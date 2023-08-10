
import { SupportCurrency, SupportCurrencyAva } from '../domain/data-provider';
import axios,{AxiosInstance} from "axios";
import lowdb, { Low, LowSync, JSONFileSync, Memory } from '@commonify/lowdb'
import path from 'path'

export default class BandClient {
  private client: AxiosInstance;
  private db: JsonDbClint;
  constructor(url: string, dbType:string,dbPath:string,limitMin:string){
    if(!url){
      throw new Error("need band protocol url")
    }

    this.client = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    });
    this.db = new JsonDbClint(dbType, dbPath, parseInt(limitMin))
  }
  async getPrice(currency: SupportCurrency|SupportCurrencyAva):Promise<number>{
    switch(currency){
      case "JPY":
        return await this.getCurrentPrice(currency)
      case "EUR":
        return await this.getCurrentPrice(currency)
      case "JPY30":
        return await this.getAveragePrice("JPY", 30)
      case "EUR30":
        return await this.getAveragePrice("EUR", 30)
      default:
        throw new Error(`invalid currency`)
    }
  }

  async getCurrentPrice(currency: SupportCurrency):Promise<number>{
    const prices = await this.client.get(`/api/oracle/v1/request_prices?symbols=BTC&symbols=${currency}&ask_count=16&min_count=10`)
    if(!prices.data){
      throw new Error(`invalid url or currency`)
    }
    const btcUsd = prices.data.price_results[0].px
    const currencyUsd = prices.data.price_results[1].px
    const currencyBtc = parseInt(btcUsd) / parseInt(currencyUsd)
    const currencyUbtc = currencyBtc / 1000000;
    this.db.insertData(currency, currencyUbtc)
    return currencyUbtc
  }

  async getAveragePrice(currency: SupportCurrency, spanMin: number):Promise<number>{
    const now = this.nanoSecToSec(Date.now())
    const start = now - this.minToSec(spanMin)
    const priceList = this.db.getTimeRangeData(currency, start, now)
    if(priceList.length ==  0){
      return await this.getCurrentPrice(currency)
    }
    const sumPrice = priceList.reduce((acc:number, elem:CurrencyRecordDataType) => {
     return acc + elem.price
    },0)
    return sumPrice / priceList.length
  }

  private minToSec(targetMin: number):number{
    return targetMin * 60
  }

  private nanoSecToSec(targetNanoSec: number):number{
    return Math.round(targetNanoSec / 1000)
  }
}

type CurrencyRecordDataType = {
  epoch_sec_time:number,
  epoch_time_alias:string,
  price:number,
}

type CurrencyDataType = {
  [key in SupportCurrency]: {
    data:CurrencyRecordDataType[]
  }
}
class JsonDbClint {
  private db: lowdb.Low<CurrencyDataType>| lowdb.LowSync<CurrencyDataType>;
  private dataSavedLimitMin: number;
  private sliceExecuteCount: number;
  private sliceExecuteNumber: number  = 10;
  constructor(type: string, filePath: string, dataSavedLimitMin: number){
    this.dataSavedLimitMin = dataSavedLimitMin
    this.sliceExecuteCount = 0
    if(type  == "json"){
      const adapter = new JSONFileSync<CurrencyDataType>(path.resolve(filePath))
      this.db = new LowSync(adapter)
      this.db.read()
    }else{
      this.db = new Low(new Memory())
    }

    if(this.db.data == null){
      this.db.data = {
        JPY:{
          data:[]
        },
        EUR:{
          data:[]
        },
        USD:{
          data:[]
        }
      }
      this.db.write()
    }
  }

  async insertData(currency: SupportCurrency, price: number){
    const date = new Date()
    const insertData: CurrencyRecordDataType = {
      epoch_sec_time:this.nanoSecToSec(date.getTime()),
      epoch_time_alias:date.toLocaleString(),
      price
    }
    if(!this.db.data){
      throw new Error("internal error")
    }
    this.db.data[currency].data.push(insertData)
    this.db.write()
    this.sliceExecuteCount++
    if(this.sliceExecuteCount == this.sliceExecuteNumber){
      this.sliceData(currency, this.nanoSecToSec(date.getTime()) - this.minToSec(this.dataSavedLimitMin))
      this.sliceExecuteCount = 0
    }
  }

  private nanoSecToSec(targetNanoSec: number):number{
    return Math.round(targetNanoSec / 1000)
  }

  private minToSec(targetMin: number):number{
    return targetMin * 60
  }

  getData(currency: SupportCurrency):CurrencyRecordDataType|null{
    if(!this.db.data){
      return null
    }
    return this.db.data[currency].data[this.db.data[currency].data.length -1]
  }

  getTimeRangeData(currency: SupportCurrency ,start: number, end: number):CurrencyRecordDataType[]{
    if(!this.db.data){
      return []
    }
    const result = []
    const priceDataList  = this.db.data[currency].data
    // listの最後に最新のデータが入っている
    // 逆ループをかけてtime rangeを超えていたらすぐにループをぬける
    for (var i = priceDataList.length - 1; i >= 0; i--) {
      if(priceDataList[i].epoch_sec_time < start){
        break;
      }
      if(priceDataList[i].epoch_sec_time > end){
        break;
      }
      result.push(priceDataList[i])
    }
    return result
  }

  private sliceData(currency: SupportCurrency ,limit_time: number){
    if(!this.db.data){
      return
    }
    this.db.data[currency].data = this.db.data[currency].data.filter((elem: CurrencyRecordDataType) => {
      return elem.epoch_sec_time > limit_time
    })
    this.db.write()
  }
}
