import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from 'cosmos-client/configuration';
import { BASE_PATH, RequestArgs, BaseAPI } from 'cosmos-client/base';

export interface Price {
  market_id: string;
  price: string;
}

/**
 * PricefeedApi - axios parameter creator
 * @export
 */
export const PricefeedApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Get Price by market ID
     * @param {string} marketID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pricefeedPriceMarketIdGet(
      marketId: string,
      options: any = {},
    ): RequestArgs {
      const localVarPath = `/pricefeed/price/${marketId}`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };

      delete (localVarUrlObj as any).search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

export const PricefeedApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Get Price by market ID
     * @param {string} marketID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pricefeedPriceMarketIdGet(
      marketId: string,
      options?: any,
    ): (
      axios?: AxiosInstance,
      basePath?: string,
    ) => AxiosPromise<{ height: string; result: Price }> {
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const localVarAxiosArgs = PricefeedApiAxiosParamCreator(
          configuration,
        ).pricefeedPriceMarketIdGet(marketId, options);

        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};
/**
 * PricefeedApi - object-oriented interface
 * @export
 * @class PricefeedApi
 * @extends {BaseAPI}
 */
export class PricefeedApi extends BaseAPI {
  /**
   *
   * @summary Get Price by market ID
   * @param {string} marketID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PricefeedApi
   */
  public pricefeedPriceMarketIdGet(marketId: string, options?: any) {
    return PricefeedApiFp(this.configuration).pricefeedPriceMarketIdGet(
      marketId,
      options,
    )(this.axios as AxiosInstance, this.basePath);
  }
}
