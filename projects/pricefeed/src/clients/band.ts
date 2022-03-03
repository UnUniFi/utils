
import { SupportCurrency } from '../domain/data-provider';
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
  async getData(currency: SupportCurrency):Promise<number>{
    // if()
    return await this.getCurrentPrice(currency)
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

  async getAveragePrice(currency: SupportCurrency):Promise<number>{
    const now = Math.round(Date.now() / 1000)
    const before30 = now - 30*60
    const priceList = this.db.getTimeRangeData(currency, before30, now)
    if(priceList.length ==  0){
      return await this.getCurrentPrice(currency)
    }
    const sumPrice = priceList.reduce((acc:number, elem:CurrencyRecordDataType) => {
     return acc + elem.price 
    },0)
    return sumPrice / priceList.length
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
  constructor(type: string, filePath: string, dataSavedLimitMin: number){
    // todo write each syscle
    this.dataSavedLimitMin = dataSavedLimitMin
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
        }
      }
      this.db.write()
    }
  }

  async insertData(currency: SupportCurrency, price: number){
    const date = new Date()
    const insertData: CurrencyRecordDataType = {
      epoch_sec_time:Math.round(date.getTime() / 1000),
      epoch_time_alias:date.toLocaleString(),
      price
    }
    if(!this.db.data){
      throw new Error("internal error")
    }
    this.db.data[currency].data.push(insertData)
    this.db.write()
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

  // todo: implement
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
