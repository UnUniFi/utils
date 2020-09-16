import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from 'cosmos-client/configuration';
import { Coin, BaseReq } from 'cosmos-client/api';
import { StdTx } from 'cosmos-client/x/auth/types';
import {
  BASE_PATH,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from 'cosmos-client/base';
import { AccAddress } from 'cosmos-client';

export interface CreateCdpReq {
  /**
   *
   * @type {BaseReq}
   * @memberof CreateCdpReq
   */
  base_req?: BaseReq;
  /**
   *
   * @type {AccAddress}
   * @memberof CreateCdpReq
   */
  sender?: AccAddress;
  /**
   *
   * @type {Coin}
   * @memberof CreateCdpReq
   */
  collateral?: Coin;
  /**
   *
   * @type {Coin}
   * @memberof CreateCdpReq
   */
  principal?: Coin;
}

export interface CdpAccount {
    account_number: number;
    address: string;
    coins: Coin[];
    name: string;
    permissions: string[];
    public_key: string;
    sequence: number;
}

export interface CollateralParam {
  auction_size: string;
  conversion_factor: string;
  debt_limit: Coin;
  denom: string;
  liquidation_market_id: string;
  liquidation_penalty: string;
  liquidation_ratio: string;
  prefix: number;
  spot_market_id: string;
  stability_fee: string;
}

export interface DebtParam {
  conversion_factor: string;
  debt_floor: string;
  denom: string;
  reference_asset: string;
  savings_rate: string;
}

export interface CdpParameters {
    circuit_breaker: boolean;
    collateral_params: CollateralParam[];
    debt_auction_lot: string;
    debt_auction_threshold: string;
    debt_param: DebtParam;
    global_debt_limit: Coin;
    savings_distribution_frequency: string;
    surplus_auction_lot: string;
    surplus_auction_threshold: string;
}
  };
}

/**
 * CdpApi - axios parameter creator
 * @export
 */
export const CdpApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    cdpAccountsGet(options: any = {}): RequestArgs {
      const localVarPath = '/cdp/accounts';
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

      delete localVarUrlObj.search;
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
    cdpParametersGet(options: any = {}): RequestArgs {
      const localVarPath = '/cdp/parameters';
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

      delete localVarUrlObj.search;
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
    /**
     *
     * @summary Create CDP
     * @param {CreateCdpReq} createCdpRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cdpPost(createCdpReq: CreateCdpReq, options: any = {}): RequestArgs {
      if (createCdpReq === undefined || createCdpReq === null) {
        throw new RequiredError(
          'createCdpReq',
          'Required parameter createCdpReq was null or undefined when calling cdpPost.',
        );
      }

      const localVarPath = '/cdp';
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      localVarUrlObj.query = {
        ...localVarUrlObj.query,
        ...localVarQueryParameter,
        ...options.query,
      };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof createCdpReq !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(createCdpReq !== undefined ? createCdpReq : {})
        : createCdpReq || '';

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

export const CdpApiFp = function (configuration?: Configuration) {
  return {
    cdpAccountsGet(
      options?: any,
    ): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CdpAccount> {
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const localVarAxiosArgs = CdpApiAxiosParamCreator(
          configuration,
        ).cdpAccountsGet(options);

        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    cdpParametersGet(
      options?: any,
    ): (
      axios?: AxiosInstance,
      basePath?: string,
    ) => AxiosPromise<CdpParameters> {
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const localVarAxiosArgs = CdpApiAxiosParamCreator(
          configuration,
        ).cdpParametersGet(options);

        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Create CDP
     * @param {CreateCdpReq} createCdpRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cdpPost(
      createCdpReq: CreateCdpReq,
      options?: any,
    ): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<StdTx> {
      const localVarAxiosArgs = CdpApiAxiosParamCreator(configuration).cdpPost(
        createCdpReq,
        options,
      );

      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
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
 * CdpApi - object-oriented interface
 * @export
 * @class CdpApi
 * @extends {BaseAPI}
 */
export class CdpApi extends BaseAPI {
  public cdpAccountsGet(options?: any) {
    return CdpApiFp(this.configuration).cdpAccountsGet(options)(
      this.axios as AxiosInstance,
      this.basePath,
    );
  }

  public cdpParametersGet(options?: any) {
    return CdpApiFp(this.configuration).cdpParametersGet(options)(
      this.axios as AxiosInstance,
      this.basePath,
    );
  }

  /**
   *
   * @summary Create CDP
   * @param {CreateCdpReq} createCdpRequestBody
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CdpApi
   */
  public cdpPost(createCdpReq: CreateCdpReq, options?: any) {
    return CdpApiFp(this.configuration).cdpPost(createCdpReq, options)(
      this.axios as AxiosInstance,
      this.basePath,
    );
  }
}
