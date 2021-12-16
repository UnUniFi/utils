import * as $protobuf from "protobufjs";
/** Namespace ununifi. */
export namespace ununifi {

    /** Namespace auction. */
    namespace auction {

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: ununifi.auction.IQueryParamsRequest, callback: ununifi.auction.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: ununifi.auction.IQueryParamsRequest): Promise<ununifi.auction.QueryParamsResponse>;

            /**
             * Calls Auction.
             * @param request QueryGetAuctionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryGetAuctionResponse
             */
            public auction(request: ununifi.auction.IQueryGetAuctionRequest, callback: ununifi.auction.Query.AuctionCallback): void;

            /**
             * Calls Auction.
             * @param request QueryGetAuctionRequest message or plain object
             * @returns Promise
             */
            public auction(request: ununifi.auction.IQueryGetAuctionRequest): Promise<ununifi.auction.QueryGetAuctionResponse>;

            /**
             * Calls AuctionAll.
             * @param request QueryAllAuctionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllAuctionResponse
             */
            public auctionAll(request: ununifi.auction.IQueryAllAuctionRequest, callback: ununifi.auction.Query.AuctionAllCallback): void;

            /**
             * Calls AuctionAll.
             * @param request QueryAllAuctionRequest message or plain object
             * @returns Promise
             */
            public auctionAll(request: ununifi.auction.IQueryAllAuctionRequest): Promise<ununifi.auction.QueryAllAuctionResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link ununifi.auction.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: ununifi.auction.QueryParamsResponse) => void;

            /**
             * Callback as used by {@link ununifi.auction.Query#auction}.
             * @param error Error, if any
             * @param [response] QueryGetAuctionResponse
             */
            type AuctionCallback = (error: (Error|null), response?: ununifi.auction.QueryGetAuctionResponse) => void;

            /**
             * Callback as used by {@link ununifi.auction.Query#auctionAll}.
             * @param error Error, if any
             * @param [response] QueryAllAuctionResponse
             */
            type AuctionAllCallback = (error: (Error|null), response?: ununifi.auction.QueryAllAuctionResponse) => void;
        }

        /** Properties of a QueryParamsRequest. */
        interface IQueryParamsRequest {
        }

        /** Represents a QueryParamsRequest. */
        class QueryParamsRequest implements IQueryParamsRequest {

            /**
             * Constructs a new QueryParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IQueryParamsRequest);

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link ununifi.auction.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link ununifi.auction.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.QueryParamsRequest;

            /**
             * Verifies a QueryParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (ununifi.auction.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (ununifi.auction.IParams|null);

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link ununifi.auction.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link ununifi.auction.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.QueryParamsResponse;

            /**
             * Verifies a QueryParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetAuctionRequest. */
        interface IQueryGetAuctionRequest {

            /** QueryGetAuctionRequest id */
            id?: (Long|null);
        }

        /** Represents a QueryGetAuctionRequest. */
        class QueryGetAuctionRequest implements IQueryGetAuctionRequest {

            /**
             * Constructs a new QueryGetAuctionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IQueryGetAuctionRequest);

            /** QueryGetAuctionRequest id. */
            public id: Long;

            /**
             * Encodes the specified QueryGetAuctionRequest message. Does not implicitly {@link ununifi.auction.QueryGetAuctionRequest.verify|verify} messages.
             * @param message QueryGetAuctionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IQueryGetAuctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetAuctionRequest message, length delimited. Does not implicitly {@link ununifi.auction.QueryGetAuctionRequest.verify|verify} messages.
             * @param message QueryGetAuctionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IQueryGetAuctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetAuctionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetAuctionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.QueryGetAuctionRequest;

            /**
             * Decodes a QueryGetAuctionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetAuctionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.QueryGetAuctionRequest;

            /**
             * Verifies a QueryGetAuctionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetAuctionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetAuctionRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.QueryGetAuctionRequest;

            /**
             * Creates a plain object from a QueryGetAuctionRequest message. Also converts values to other types if specified.
             * @param message QueryGetAuctionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.QueryGetAuctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetAuctionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetAuctionResponse. */
        interface IQueryGetAuctionResponse {

            /** QueryGetAuctionResponse auction */
            auction?: (google.protobuf.IAny|null);
        }

        /** Represents a QueryGetAuctionResponse. */
        class QueryGetAuctionResponse implements IQueryGetAuctionResponse {

            /**
             * Constructs a new QueryGetAuctionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IQueryGetAuctionResponse);

            /** QueryGetAuctionResponse auction. */
            public auction?: (google.protobuf.IAny|null);

            /**
             * Encodes the specified QueryGetAuctionResponse message. Does not implicitly {@link ununifi.auction.QueryGetAuctionResponse.verify|verify} messages.
             * @param message QueryGetAuctionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IQueryGetAuctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetAuctionResponse message, length delimited. Does not implicitly {@link ununifi.auction.QueryGetAuctionResponse.verify|verify} messages.
             * @param message QueryGetAuctionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IQueryGetAuctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetAuctionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetAuctionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.QueryGetAuctionResponse;

            /**
             * Decodes a QueryGetAuctionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetAuctionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.QueryGetAuctionResponse;

            /**
             * Verifies a QueryGetAuctionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetAuctionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetAuctionResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.QueryGetAuctionResponse;

            /**
             * Creates a plain object from a QueryGetAuctionResponse message. Also converts values to other types if specified.
             * @param message QueryGetAuctionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.QueryGetAuctionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetAuctionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllAuctionRequest. */
        interface IQueryAllAuctionRequest {

            /** QueryAllAuctionRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a QueryAllAuctionRequest. */
        class QueryAllAuctionRequest implements IQueryAllAuctionRequest {

            /**
             * Constructs a new QueryAllAuctionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IQueryAllAuctionRequest);

            /** QueryAllAuctionRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified QueryAllAuctionRequest message. Does not implicitly {@link ununifi.auction.QueryAllAuctionRequest.verify|verify} messages.
             * @param message QueryAllAuctionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IQueryAllAuctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllAuctionRequest message, length delimited. Does not implicitly {@link ununifi.auction.QueryAllAuctionRequest.verify|verify} messages.
             * @param message QueryAllAuctionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IQueryAllAuctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllAuctionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllAuctionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.QueryAllAuctionRequest;

            /**
             * Decodes a QueryAllAuctionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllAuctionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.QueryAllAuctionRequest;

            /**
             * Verifies a QueryAllAuctionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllAuctionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllAuctionRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.QueryAllAuctionRequest;

            /**
             * Creates a plain object from a QueryAllAuctionRequest message. Also converts values to other types if specified.
             * @param message QueryAllAuctionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.QueryAllAuctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllAuctionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllAuctionResponse. */
        interface IQueryAllAuctionResponse {

            /** QueryAllAuctionResponse auctions */
            auctions?: (google.protobuf.IAny[]|null);

            /** QueryAllAuctionResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a QueryAllAuctionResponse. */
        class QueryAllAuctionResponse implements IQueryAllAuctionResponse {

            /**
             * Constructs a new QueryAllAuctionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IQueryAllAuctionResponse);

            /** QueryAllAuctionResponse auctions. */
            public auctions: google.protobuf.IAny[];

            /** QueryAllAuctionResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified QueryAllAuctionResponse message. Does not implicitly {@link ununifi.auction.QueryAllAuctionResponse.verify|verify} messages.
             * @param message QueryAllAuctionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IQueryAllAuctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllAuctionResponse message, length delimited. Does not implicitly {@link ununifi.auction.QueryAllAuctionResponse.verify|verify} messages.
             * @param message QueryAllAuctionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IQueryAllAuctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllAuctionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllAuctionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.QueryAllAuctionResponse;

            /**
             * Decodes a QueryAllAuctionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllAuctionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.QueryAllAuctionResponse;

            /**
             * Verifies a QueryAllAuctionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllAuctionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllAuctionResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.QueryAllAuctionResponse;

            /**
             * Creates a plain object from a QueryAllAuctionResponse message. Also converts values to other types if specified.
             * @param message QueryAllAuctionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.QueryAllAuctionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllAuctionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BaseAuction. */
        interface IBaseAuction {

            /** BaseAuction id */
            id?: (Long|null);

            /** BaseAuction initiator */
            initiator?: (string|null);

            /** BaseAuction lot */
            lot?: (cosmos.base.v1beta1.ICoin|null);

            /** BaseAuction bidder */
            bidder?: (string|null);

            /** BaseAuction bid */
            bid?: (cosmos.base.v1beta1.ICoin|null);

            /** BaseAuction has_received_bids */
            has_received_bids?: (boolean|null);

            /** BaseAuction end_time */
            end_time?: (google.protobuf.ITimestamp|null);

            /** BaseAuction max_end_time */
            max_end_time?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a BaseAuction. */
        class BaseAuction implements IBaseAuction {

            /**
             * Constructs a new BaseAuction.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IBaseAuction);

            /** BaseAuction id. */
            public id: Long;

            /** BaseAuction initiator. */
            public initiator: string;

            /** BaseAuction lot. */
            public lot?: (cosmos.base.v1beta1.ICoin|null);

            /** BaseAuction bidder. */
            public bidder: string;

            /** BaseAuction bid. */
            public bid?: (cosmos.base.v1beta1.ICoin|null);

            /** BaseAuction has_received_bids. */
            public has_received_bids: boolean;

            /** BaseAuction end_time. */
            public end_time?: (google.protobuf.ITimestamp|null);

            /** BaseAuction max_end_time. */
            public max_end_time?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified BaseAuction message. Does not implicitly {@link ununifi.auction.BaseAuction.verify|verify} messages.
             * @param message BaseAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IBaseAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaseAuction message, length delimited. Does not implicitly {@link ununifi.auction.BaseAuction.verify|verify} messages.
             * @param message BaseAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IBaseAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaseAuction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaseAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.BaseAuction;

            /**
             * Decodes a BaseAuction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaseAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.BaseAuction;

            /**
             * Verifies a BaseAuction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaseAuction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaseAuction
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.BaseAuction;

            /**
             * Creates a plain object from a BaseAuction message. Also converts values to other types if specified.
             * @param message BaseAuction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.BaseAuction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaseAuction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SurplusAuction. */
        interface ISurplusAuction {

            /** SurplusAuction base_auction */
            base_auction?: (ununifi.auction.IBaseAuction|null);
        }

        /** Represents a SurplusAuction. */
        class SurplusAuction implements ISurplusAuction {

            /**
             * Constructs a new SurplusAuction.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.ISurplusAuction);

            /** SurplusAuction base_auction. */
            public base_auction?: (ununifi.auction.IBaseAuction|null);

            /**
             * Encodes the specified SurplusAuction message. Does not implicitly {@link ununifi.auction.SurplusAuction.verify|verify} messages.
             * @param message SurplusAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.ISurplusAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SurplusAuction message, length delimited. Does not implicitly {@link ununifi.auction.SurplusAuction.verify|verify} messages.
             * @param message SurplusAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.ISurplusAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SurplusAuction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SurplusAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.SurplusAuction;

            /**
             * Decodes a SurplusAuction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SurplusAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.SurplusAuction;

            /**
             * Verifies a SurplusAuction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SurplusAuction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SurplusAuction
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.SurplusAuction;

            /**
             * Creates a plain object from a SurplusAuction message. Also converts values to other types if specified.
             * @param message SurplusAuction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.SurplusAuction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SurplusAuction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DebtAuction. */
        interface IDebtAuction {

            /** DebtAuction base_auction */
            base_auction?: (ununifi.auction.IBaseAuction|null);

            /** DebtAuction corresponding_debt */
            corresponding_debt?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a DebtAuction. */
        class DebtAuction implements IDebtAuction {

            /**
             * Constructs a new DebtAuction.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IDebtAuction);

            /** DebtAuction base_auction. */
            public base_auction?: (ununifi.auction.IBaseAuction|null);

            /** DebtAuction corresponding_debt. */
            public corresponding_debt?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified DebtAuction message. Does not implicitly {@link ununifi.auction.DebtAuction.verify|verify} messages.
             * @param message DebtAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IDebtAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DebtAuction message, length delimited. Does not implicitly {@link ununifi.auction.DebtAuction.verify|verify} messages.
             * @param message DebtAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IDebtAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DebtAuction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DebtAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.DebtAuction;

            /**
             * Decodes a DebtAuction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DebtAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.DebtAuction;

            /**
             * Verifies a DebtAuction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DebtAuction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DebtAuction
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.DebtAuction;

            /**
             * Creates a plain object from a DebtAuction message. Also converts values to other types if specified.
             * @param message DebtAuction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.DebtAuction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DebtAuction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CollateralAuction. */
        interface ICollateralAuction {

            /** CollateralAuction base_auction */
            base_auction?: (ununifi.auction.IBaseAuction|null);

            /** CollateralAuction corresponding_debt */
            corresponding_debt?: (cosmos.base.v1beta1.ICoin|null);

            /** CollateralAuction max_bid */
            max_bid?: (cosmos.base.v1beta1.ICoin|null);

            /** CollateralAuction lot_returns */
            lot_returns?: (ununifi.auction.IWeightedAddress[]|null);
        }

        /** Represents a CollateralAuction. */
        class CollateralAuction implements ICollateralAuction {

            /**
             * Constructs a new CollateralAuction.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.ICollateralAuction);

            /** CollateralAuction base_auction. */
            public base_auction?: (ununifi.auction.IBaseAuction|null);

            /** CollateralAuction corresponding_debt. */
            public corresponding_debt?: (cosmos.base.v1beta1.ICoin|null);

            /** CollateralAuction max_bid. */
            public max_bid?: (cosmos.base.v1beta1.ICoin|null);

            /** CollateralAuction lot_returns. */
            public lot_returns: ununifi.auction.IWeightedAddress[];

            /**
             * Encodes the specified CollateralAuction message. Does not implicitly {@link ununifi.auction.CollateralAuction.verify|verify} messages.
             * @param message CollateralAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.ICollateralAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CollateralAuction message, length delimited. Does not implicitly {@link ununifi.auction.CollateralAuction.verify|verify} messages.
             * @param message CollateralAuction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.ICollateralAuction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CollateralAuction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CollateralAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.CollateralAuction;

            /**
             * Decodes a CollateralAuction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CollateralAuction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.CollateralAuction;

            /**
             * Verifies a CollateralAuction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CollateralAuction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CollateralAuction
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.CollateralAuction;

            /**
             * Creates a plain object from a CollateralAuction message. Also converts values to other types if specified.
             * @param message CollateralAuction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.CollateralAuction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CollateralAuction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WeightedAddress. */
        interface IWeightedAddress {

            /** WeightedAddress address */
            address?: (string|null);

            /** WeightedAddress weight */
            weight?: (string|null);
        }

        /** Represents a WeightedAddress. */
        class WeightedAddress implements IWeightedAddress {

            /**
             * Constructs a new WeightedAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IWeightedAddress);

            /** WeightedAddress address. */
            public address: string;

            /** WeightedAddress weight. */
            public weight: string;

            /**
             * Encodes the specified WeightedAddress message. Does not implicitly {@link ununifi.auction.WeightedAddress.verify|verify} messages.
             * @param message WeightedAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IWeightedAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WeightedAddress message, length delimited. Does not implicitly {@link ununifi.auction.WeightedAddress.verify|verify} messages.
             * @param message WeightedAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IWeightedAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WeightedAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WeightedAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.WeightedAddress;

            /**
             * Decodes a WeightedAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WeightedAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.WeightedAddress;

            /**
             * Verifies a WeightedAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WeightedAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WeightedAddress
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.WeightedAddress;

            /**
             * Creates a plain object from a WeightedAddress message. Also converts values to other types if specified.
             * @param message WeightedAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.WeightedAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WeightedAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params max_auction_duration */
            max_auction_duration?: (google.protobuf.IDuration|null);

            /** Params bid_duration */
            bid_duration?: (google.protobuf.IDuration|null);

            /** Params increment_surplus */
            increment_surplus?: (string|null);

            /** Params increment_debt */
            increment_debt?: (string|null);

            /** Params increment_collateral */
            increment_collateral?: (string|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IParams);

            /** Params max_auction_duration. */
            public max_auction_duration?: (google.protobuf.IDuration|null);

            /** Params bid_duration. */
            public bid_duration?: (google.protobuf.IDuration|null);

            /** Params increment_surplus. */
            public increment_surplus: string;

            /** Params increment_debt. */
            public increment_debt: string;

            /** Params increment_collateral. */
            public increment_collateral: string;

            /**
             * Encodes the specified Params message. Does not implicitly {@link ununifi.auction.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link ununifi.auction.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {

            /**
             * Constructs a new Msg service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls PlaceBid.
             * @param request MsgPlaceBid message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgPlaceBidResponse
             */
            public placeBid(request: ununifi.auction.IMsgPlaceBid, callback: ununifi.auction.Msg.PlaceBidCallback): void;

            /**
             * Calls PlaceBid.
             * @param request MsgPlaceBid message or plain object
             * @returns Promise
             */
            public placeBid(request: ununifi.auction.IMsgPlaceBid): Promise<ununifi.auction.MsgPlaceBidResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link ununifi.auction.Msg#placeBid}.
             * @param error Error, if any
             * @param [response] MsgPlaceBidResponse
             */
            type PlaceBidCallback = (error: (Error|null), response?: ununifi.auction.MsgPlaceBidResponse) => void;
        }

        /** Properties of a MsgPlaceBid. */
        interface IMsgPlaceBid {

            /** MsgPlaceBid auction_id */
            auction_id?: (Long|null);

            /** MsgPlaceBid bidder */
            bidder?: (string|null);

            /** MsgPlaceBid amount */
            amount?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a MsgPlaceBid. */
        class MsgPlaceBid implements IMsgPlaceBid {

            /**
             * Constructs a new MsgPlaceBid.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IMsgPlaceBid);

            /** MsgPlaceBid auction_id. */
            public auction_id: Long;

            /** MsgPlaceBid bidder. */
            public bidder: string;

            /** MsgPlaceBid amount. */
            public amount?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified MsgPlaceBid message. Does not implicitly {@link ununifi.auction.MsgPlaceBid.verify|verify} messages.
             * @param message MsgPlaceBid message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IMsgPlaceBid, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgPlaceBid message, length delimited. Does not implicitly {@link ununifi.auction.MsgPlaceBid.verify|verify} messages.
             * @param message MsgPlaceBid message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IMsgPlaceBid, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgPlaceBid message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgPlaceBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.MsgPlaceBid;

            /**
             * Decodes a MsgPlaceBid message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgPlaceBid
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.MsgPlaceBid;

            /**
             * Verifies a MsgPlaceBid message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgPlaceBid message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgPlaceBid
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.MsgPlaceBid;

            /**
             * Creates a plain object from a MsgPlaceBid message. Also converts values to other types if specified.
             * @param message MsgPlaceBid
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.MsgPlaceBid, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgPlaceBid to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgPlaceBidResponse. */
        interface IMsgPlaceBidResponse {
        }

        /** Represents a MsgPlaceBidResponse. */
        class MsgPlaceBidResponse implements IMsgPlaceBidResponse {

            /**
             * Constructs a new MsgPlaceBidResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IMsgPlaceBidResponse);

            /**
             * Encodes the specified MsgPlaceBidResponse message. Does not implicitly {@link ununifi.auction.MsgPlaceBidResponse.verify|verify} messages.
             * @param message MsgPlaceBidResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IMsgPlaceBidResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgPlaceBidResponse message, length delimited. Does not implicitly {@link ununifi.auction.MsgPlaceBidResponse.verify|verify} messages.
             * @param message MsgPlaceBidResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IMsgPlaceBidResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgPlaceBidResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgPlaceBidResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.MsgPlaceBidResponse;

            /**
             * Decodes a MsgPlaceBidResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgPlaceBidResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.MsgPlaceBidResponse;

            /**
             * Verifies a MsgPlaceBidResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgPlaceBidResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgPlaceBidResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.MsgPlaceBidResponse;

            /**
             * Creates a plain object from a MsgPlaceBidResponse message. Also converts values to other types if specified.
             * @param message MsgPlaceBidResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.MsgPlaceBidResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgPlaceBidResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState next_auction_id */
            next_auction_id?: (Long|null);

            /** GenesisState params */
            params?: (ununifi.auction.IParams|null);

            /** GenesisState auctions */
            auctions?: (google.protobuf.IAny[]|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.auction.IGenesisState);

            /** GenesisState next_auction_id. */
            public next_auction_id: Long;

            /** GenesisState params. */
            public params?: (ununifi.auction.IParams|null);

            /** GenesisState auctions. */
            public auctions: google.protobuf.IAny[];

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link ununifi.auction.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.auction.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link ununifi.auction.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.auction.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.auction.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.auction.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): ununifi.auction.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.auction.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace cdp. */
    namespace cdp {

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: ununifi.cdp.IQueryParamsRequest, callback: ununifi.cdp.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: ununifi.cdp.IQueryParamsRequest): Promise<ununifi.cdp.QueryParamsResponse>;

            /**
             * Calls Cdp.
             * @param request QueryGetCdpRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryGetCdpResponse
             */
            public cdp(request: ununifi.cdp.IQueryGetCdpRequest, callback: ununifi.cdp.Query.CdpCallback): void;

            /**
             * Calls Cdp.
             * @param request QueryGetCdpRequest message or plain object
             * @returns Promise
             */
            public cdp(request: ununifi.cdp.IQueryGetCdpRequest): Promise<ununifi.cdp.QueryGetCdpResponse>;

            /**
             * Calls CdpAll.
             * @param request QueryAllCdpRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllCdpResponse
             */
            public cdpAll(request: ununifi.cdp.IQueryAllCdpRequest, callback: ununifi.cdp.Query.CdpAllCallback): void;

            /**
             * Calls CdpAll.
             * @param request QueryAllCdpRequest message or plain object
             * @returns Promise
             */
            public cdpAll(request: ununifi.cdp.IQueryAllCdpRequest): Promise<ununifi.cdp.QueryAllCdpResponse>;

            /**
             * Calls AccountAll.
             * @param request QueryAllAccountRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllAccountResponse
             */
            public accountAll(request: ununifi.cdp.IQueryAllAccountRequest, callback: ununifi.cdp.Query.AccountAllCallback): void;

            /**
             * Calls AccountAll.
             * @param request QueryAllAccountRequest message or plain object
             * @returns Promise
             */
            public accountAll(request: ununifi.cdp.IQueryAllAccountRequest): Promise<ununifi.cdp.QueryAllAccountResponse>;

            /**
             * Calls DepositAll.
             * @param request QueryAllDepositRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllDepositResponse
             */
            public depositAll(request: ununifi.cdp.IQueryAllDepositRequest, callback: ununifi.cdp.Query.DepositAllCallback): void;

            /**
             * Calls DepositAll.
             * @param request QueryAllDepositRequest message or plain object
             * @returns Promise
             */
            public depositAll(request: ununifi.cdp.IQueryAllDepositRequest): Promise<ununifi.cdp.QueryAllDepositResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link ununifi.cdp.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: ununifi.cdp.QueryParamsResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Query#cdp}.
             * @param error Error, if any
             * @param [response] QueryGetCdpResponse
             */
            type CdpCallback = (error: (Error|null), response?: ununifi.cdp.QueryGetCdpResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Query#cdpAll}.
             * @param error Error, if any
             * @param [response] QueryAllCdpResponse
             */
            type CdpAllCallback = (error: (Error|null), response?: ununifi.cdp.QueryAllCdpResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Query#accountAll}.
             * @param error Error, if any
             * @param [response] QueryAllAccountResponse
             */
            type AccountAllCallback = (error: (Error|null), response?: ununifi.cdp.QueryAllAccountResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Query#depositAll}.
             * @param error Error, if any
             * @param [response] QueryAllDepositResponse
             */
            type DepositAllCallback = (error: (Error|null), response?: ununifi.cdp.QueryAllDepositResponse) => void;
        }

        /** Properties of a QueryParamsRequest. */
        interface IQueryParamsRequest {
        }

        /** Represents a QueryParamsRequest. */
        class QueryParamsRequest implements IQueryParamsRequest {

            /**
             * Constructs a new QueryParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryParamsRequest);

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link ununifi.cdp.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link ununifi.cdp.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryParamsRequest;

            /**
             * Verifies a QueryParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (ununifi.cdp.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (ununifi.cdp.IParams|null);

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link ununifi.cdp.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link ununifi.cdp.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryParamsResponse;

            /**
             * Verifies a QueryParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetCdpRequest. */
        interface IQueryGetCdpRequest {

            /** QueryGetCdpRequest owner */
            owner?: (string|null);

            /** QueryGetCdpRequest collateral_type */
            collateral_type?: (string|null);
        }

        /** Represents a QueryGetCdpRequest. */
        class QueryGetCdpRequest implements IQueryGetCdpRequest {

            /**
             * Constructs a new QueryGetCdpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryGetCdpRequest);

            /** QueryGetCdpRequest owner. */
            public owner: string;

            /** QueryGetCdpRequest collateral_type. */
            public collateral_type: string;

            /**
             * Encodes the specified QueryGetCdpRequest message. Does not implicitly {@link ununifi.cdp.QueryGetCdpRequest.verify|verify} messages.
             * @param message QueryGetCdpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryGetCdpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetCdpRequest message, length delimited. Does not implicitly {@link ununifi.cdp.QueryGetCdpRequest.verify|verify} messages.
             * @param message QueryGetCdpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryGetCdpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetCdpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetCdpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryGetCdpRequest;

            /**
             * Decodes a QueryGetCdpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetCdpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryGetCdpRequest;

            /**
             * Verifies a QueryGetCdpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetCdpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetCdpRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryGetCdpRequest;

            /**
             * Creates a plain object from a QueryGetCdpRequest message. Also converts values to other types if specified.
             * @param message QueryGetCdpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryGetCdpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetCdpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetCdpResponse. */
        interface IQueryGetCdpResponse {

            /** QueryGetCdpResponse cdp */
            cdp?: (ununifi.cdp.IAugmentedCdp|null);
        }

        /** Represents a QueryGetCdpResponse. */
        class QueryGetCdpResponse implements IQueryGetCdpResponse {

            /**
             * Constructs a new QueryGetCdpResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryGetCdpResponse);

            /** QueryGetCdpResponse cdp. */
            public cdp?: (ununifi.cdp.IAugmentedCdp|null);

            /**
             * Encodes the specified QueryGetCdpResponse message. Does not implicitly {@link ununifi.cdp.QueryGetCdpResponse.verify|verify} messages.
             * @param message QueryGetCdpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryGetCdpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetCdpResponse message, length delimited. Does not implicitly {@link ununifi.cdp.QueryGetCdpResponse.verify|verify} messages.
             * @param message QueryGetCdpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryGetCdpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetCdpResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetCdpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryGetCdpResponse;

            /**
             * Decodes a QueryGetCdpResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetCdpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryGetCdpResponse;

            /**
             * Verifies a QueryGetCdpResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetCdpResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetCdpResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryGetCdpResponse;

            /**
             * Creates a plain object from a QueryGetCdpResponse message. Also converts values to other types if specified.
             * @param message QueryGetCdpResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryGetCdpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetCdpResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllCdpRequest. */
        interface IQueryAllCdpRequest {

            /** QueryAllCdpRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a QueryAllCdpRequest. */
        class QueryAllCdpRequest implements IQueryAllCdpRequest {

            /**
             * Constructs a new QueryAllCdpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryAllCdpRequest);

            /** QueryAllCdpRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified QueryAllCdpRequest message. Does not implicitly {@link ununifi.cdp.QueryAllCdpRequest.verify|verify} messages.
             * @param message QueryAllCdpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryAllCdpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllCdpRequest message, length delimited. Does not implicitly {@link ununifi.cdp.QueryAllCdpRequest.verify|verify} messages.
             * @param message QueryAllCdpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryAllCdpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllCdpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllCdpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryAllCdpRequest;

            /**
             * Decodes a QueryAllCdpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllCdpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryAllCdpRequest;

            /**
             * Verifies a QueryAllCdpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllCdpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllCdpRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryAllCdpRequest;

            /**
             * Creates a plain object from a QueryAllCdpRequest message. Also converts values to other types if specified.
             * @param message QueryAllCdpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryAllCdpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllCdpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllCdpResponse. */
        interface IQueryAllCdpResponse {

            /** QueryAllCdpResponse cdp */
            cdp?: (ununifi.cdp.IAugmentedCdp[]|null);

            /** QueryAllCdpResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a QueryAllCdpResponse. */
        class QueryAllCdpResponse implements IQueryAllCdpResponse {

            /**
             * Constructs a new QueryAllCdpResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryAllCdpResponse);

            /** QueryAllCdpResponse cdp. */
            public cdp: ununifi.cdp.IAugmentedCdp[];

            /** QueryAllCdpResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified QueryAllCdpResponse message. Does not implicitly {@link ununifi.cdp.QueryAllCdpResponse.verify|verify} messages.
             * @param message QueryAllCdpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryAllCdpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllCdpResponse message, length delimited. Does not implicitly {@link ununifi.cdp.QueryAllCdpResponse.verify|verify} messages.
             * @param message QueryAllCdpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryAllCdpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllCdpResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllCdpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryAllCdpResponse;

            /**
             * Decodes a QueryAllCdpResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllCdpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryAllCdpResponse;

            /**
             * Verifies a QueryAllCdpResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllCdpResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllCdpResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryAllCdpResponse;

            /**
             * Creates a plain object from a QueryAllCdpResponse message. Also converts values to other types if specified.
             * @param message QueryAllCdpResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryAllCdpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllCdpResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllAccountRequest. */
        interface IQueryAllAccountRequest {
        }

        /** Represents a QueryAllAccountRequest. */
        class QueryAllAccountRequest implements IQueryAllAccountRequest {

            /**
             * Constructs a new QueryAllAccountRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryAllAccountRequest);

            /**
             * Encodes the specified QueryAllAccountRequest message. Does not implicitly {@link ununifi.cdp.QueryAllAccountRequest.verify|verify} messages.
             * @param message QueryAllAccountRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryAllAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllAccountRequest message, length delimited. Does not implicitly {@link ununifi.cdp.QueryAllAccountRequest.verify|verify} messages.
             * @param message QueryAllAccountRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryAllAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllAccountRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllAccountRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryAllAccountRequest;

            /**
             * Decodes a QueryAllAccountRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllAccountRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryAllAccountRequest;

            /**
             * Verifies a QueryAllAccountRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllAccountRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllAccountRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryAllAccountRequest;

            /**
             * Creates a plain object from a QueryAllAccountRequest message. Also converts values to other types if specified.
             * @param message QueryAllAccountRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryAllAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllAccountRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllAccountResponse. */
        interface IQueryAllAccountResponse {

            /** QueryAllAccountResponse accounts */
            accounts?: (google.protobuf.IAny[]|null);
        }

        /** Represents a QueryAllAccountResponse. */
        class QueryAllAccountResponse implements IQueryAllAccountResponse {

            /**
             * Constructs a new QueryAllAccountResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryAllAccountResponse);

            /** QueryAllAccountResponse accounts. */
            public accounts: google.protobuf.IAny[];

            /**
             * Encodes the specified QueryAllAccountResponse message. Does not implicitly {@link ununifi.cdp.QueryAllAccountResponse.verify|verify} messages.
             * @param message QueryAllAccountResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryAllAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllAccountResponse message, length delimited. Does not implicitly {@link ununifi.cdp.QueryAllAccountResponse.verify|verify} messages.
             * @param message QueryAllAccountResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryAllAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllAccountResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllAccountResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryAllAccountResponse;

            /**
             * Decodes a QueryAllAccountResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllAccountResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryAllAccountResponse;

            /**
             * Verifies a QueryAllAccountResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllAccountResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllAccountResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryAllAccountResponse;

            /**
             * Creates a plain object from a QueryAllAccountResponse message. Also converts values to other types if specified.
             * @param message QueryAllAccountResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryAllAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllAccountResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllDepositRequest. */
        interface IQueryAllDepositRequest {

            /** QueryAllDepositRequest owner */
            owner?: (string|null);

            /** QueryAllDepositRequest collateral_type */
            collateral_type?: (string|null);
        }

        /** Represents a QueryAllDepositRequest. */
        class QueryAllDepositRequest implements IQueryAllDepositRequest {

            /**
             * Constructs a new QueryAllDepositRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryAllDepositRequest);

            /** QueryAllDepositRequest owner. */
            public owner: string;

            /** QueryAllDepositRequest collateral_type. */
            public collateral_type: string;

            /**
             * Encodes the specified QueryAllDepositRequest message. Does not implicitly {@link ununifi.cdp.QueryAllDepositRequest.verify|verify} messages.
             * @param message QueryAllDepositRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryAllDepositRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllDepositRequest message, length delimited. Does not implicitly {@link ununifi.cdp.QueryAllDepositRequest.verify|verify} messages.
             * @param message QueryAllDepositRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryAllDepositRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllDepositRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllDepositRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryAllDepositRequest;

            /**
             * Decodes a QueryAllDepositRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllDepositRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryAllDepositRequest;

            /**
             * Verifies a QueryAllDepositRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllDepositRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllDepositRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryAllDepositRequest;

            /**
             * Creates a plain object from a QueryAllDepositRequest message. Also converts values to other types if specified.
             * @param message QueryAllDepositRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryAllDepositRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllDepositRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllDepositResponse. */
        interface IQueryAllDepositResponse {

            /** QueryAllDepositResponse deposits */
            deposits?: (ununifi.cdp.IDeposit[]|null);
        }

        /** Represents a QueryAllDepositResponse. */
        class QueryAllDepositResponse implements IQueryAllDepositResponse {

            /**
             * Constructs a new QueryAllDepositResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IQueryAllDepositResponse);

            /** QueryAllDepositResponse deposits. */
            public deposits: ununifi.cdp.IDeposit[];

            /**
             * Encodes the specified QueryAllDepositResponse message. Does not implicitly {@link ununifi.cdp.QueryAllDepositResponse.verify|verify} messages.
             * @param message QueryAllDepositResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IQueryAllDepositResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllDepositResponse message, length delimited. Does not implicitly {@link ununifi.cdp.QueryAllDepositResponse.verify|verify} messages.
             * @param message QueryAllDepositResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IQueryAllDepositResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllDepositResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllDepositResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.QueryAllDepositResponse;

            /**
             * Decodes a QueryAllDepositResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllDepositResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.QueryAllDepositResponse;

            /**
             * Verifies a QueryAllDepositResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllDepositResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllDepositResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.QueryAllDepositResponse;

            /**
             * Creates a plain object from a QueryAllDepositResponse message. Also converts values to other types if specified.
             * @param message QueryAllDepositResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.QueryAllDepositResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllDepositResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Cdp. */
        interface ICdp {

            /** Cdp id */
            id?: (Long|null);

            /** Cdp owner */
            owner?: (string|null);

            /** Cdp type */
            type?: (string|null);

            /** Cdp collateral */
            collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** Cdp principal */
            principal?: (cosmos.base.v1beta1.ICoin|null);

            /** Cdp accumulated_fees */
            accumulated_fees?: (cosmos.base.v1beta1.ICoin|null);

            /** Cdp fees_updated */
            fees_updated?: (google.protobuf.ITimestamp|null);

            /** Cdp interest_factor */
            interest_factor?: (string|null);
        }

        /** Represents a Cdp. */
        class Cdp implements ICdp {

            /**
             * Constructs a new Cdp.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.ICdp);

            /** Cdp id. */
            public id: Long;

            /** Cdp owner. */
            public owner: string;

            /** Cdp type. */
            public type: string;

            /** Cdp collateral. */
            public collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** Cdp principal. */
            public principal?: (cosmos.base.v1beta1.ICoin|null);

            /** Cdp accumulated_fees. */
            public accumulated_fees?: (cosmos.base.v1beta1.ICoin|null);

            /** Cdp fees_updated. */
            public fees_updated?: (google.protobuf.ITimestamp|null);

            /** Cdp interest_factor. */
            public interest_factor: string;

            /**
             * Encodes the specified Cdp message. Does not implicitly {@link ununifi.cdp.Cdp.verify|verify} messages.
             * @param message Cdp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.ICdp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Cdp message, length delimited. Does not implicitly {@link ununifi.cdp.Cdp.verify|verify} messages.
             * @param message Cdp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.ICdp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Cdp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Cdp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.Cdp;

            /**
             * Decodes a Cdp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Cdp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.Cdp;

            /**
             * Verifies a Cdp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Cdp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Cdp
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.Cdp;

            /**
             * Creates a plain object from a Cdp message. Also converts values to other types if specified.
             * @param message Cdp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.Cdp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Cdp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Deposit. */
        interface IDeposit {

            /** Deposit cdp_id */
            cdp_id?: (Long|null);

            /** Deposit depositor */
            depositor?: (string|null);

            /** Deposit amount */
            amount?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a Deposit. */
        class Deposit implements IDeposit {

            /**
             * Constructs a new Deposit.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IDeposit);

            /** Deposit cdp_id. */
            public cdp_id: Long;

            /** Deposit depositor. */
            public depositor: string;

            /** Deposit amount. */
            public amount?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified Deposit message. Does not implicitly {@link ununifi.cdp.Deposit.verify|verify} messages.
             * @param message Deposit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Deposit message, length delimited. Does not implicitly {@link ununifi.cdp.Deposit.verify|verify} messages.
             * @param message Deposit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Deposit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Deposit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.Deposit;

            /**
             * Decodes a Deposit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Deposit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.Deposit;

            /**
             * Verifies a Deposit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Deposit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Deposit
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.Deposit;

            /**
             * Creates a plain object from a Deposit message. Also converts values to other types if specified.
             * @param message Deposit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.Deposit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Deposit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AugmentedCdp. */
        interface IAugmentedCdp {

            /** AugmentedCdp cdp */
            cdp?: (ununifi.cdp.ICdp|null);

            /** AugmentedCdp collateral_value */
            collateral_value?: (cosmos.base.v1beta1.ICoin|null);

            /** AugmentedCdp collateralization_ratio */
            collateralization_ratio?: (string|null);
        }

        /** Represents an AugmentedCdp. */
        class AugmentedCdp implements IAugmentedCdp {

            /**
             * Constructs a new AugmentedCdp.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IAugmentedCdp);

            /** AugmentedCdp cdp. */
            public cdp?: (ununifi.cdp.ICdp|null);

            /** AugmentedCdp collateral_value. */
            public collateral_value?: (cosmos.base.v1beta1.ICoin|null);

            /** AugmentedCdp collateralization_ratio. */
            public collateralization_ratio: string;

            /**
             * Encodes the specified AugmentedCdp message. Does not implicitly {@link ununifi.cdp.AugmentedCdp.verify|verify} messages.
             * @param message AugmentedCdp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IAugmentedCdp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AugmentedCdp message, length delimited. Does not implicitly {@link ununifi.cdp.AugmentedCdp.verify|verify} messages.
             * @param message AugmentedCdp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IAugmentedCdp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AugmentedCdp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AugmentedCdp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.AugmentedCdp;

            /**
             * Decodes an AugmentedCdp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AugmentedCdp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.AugmentedCdp;

            /**
             * Verifies an AugmentedCdp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AugmentedCdp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AugmentedCdp
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.AugmentedCdp;

            /**
             * Creates a plain object from an AugmentedCdp message. Also converts values to other types if specified.
             * @param message AugmentedCdp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.AugmentedCdp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AugmentedCdp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params collateral_params */
            collateral_params?: (ununifi.cdp.ICollateralParam[]|null);

            /** Params debt_param */
            debt_param?: (ununifi.cdp.IDebtParam|null);

            /** Params global_debt_limit */
            global_debt_limit?: (cosmos.base.v1beta1.ICoin|null);

            /** Params surplus_auction_threshold */
            surplus_auction_threshold?: (string|null);

            /** Params surplus_auction_lot */
            surplus_auction_lot?: (string|null);

            /** Params debt_auction_threshold */
            debt_auction_threshold?: (string|null);

            /** Params debt_auction_lot */
            debt_auction_lot?: (string|null);

            /** Params circuit_breaker */
            circuit_breaker?: (boolean|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IParams);

            /** Params collateral_params. */
            public collateral_params: ununifi.cdp.ICollateralParam[];

            /** Params debt_param. */
            public debt_param?: (ununifi.cdp.IDebtParam|null);

            /** Params global_debt_limit. */
            public global_debt_limit?: (cosmos.base.v1beta1.ICoin|null);

            /** Params surplus_auction_threshold. */
            public surplus_auction_threshold: string;

            /** Params surplus_auction_lot. */
            public surplus_auction_lot: string;

            /** Params debt_auction_threshold. */
            public debt_auction_threshold: string;

            /** Params debt_auction_lot. */
            public debt_auction_lot: string;

            /** Params circuit_breaker. */
            public circuit_breaker: boolean;

            /**
             * Encodes the specified Params message. Does not implicitly {@link ununifi.cdp.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link ununifi.cdp.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CollateralParam. */
        interface ICollateralParam {

            /** CollateralParam denom */
            denom?: (string|null);

            /** CollateralParam type */
            type?: (string|null);

            /** CollateralParam liquidation_ratio */
            liquidation_ratio?: (string|null);

            /** CollateralParam debt_limit */
            debt_limit?: (cosmos.base.v1beta1.ICoin|null);

            /** CollateralParam stability_fee */
            stability_fee?: (string|null);

            /** CollateralParam auction_size */
            auction_size?: (string|null);

            /** CollateralParam liquidation_penalty */
            liquidation_penalty?: (string|null);

            /** CollateralParam prefix */
            prefix?: (number|null);

            /** CollateralParam spot_market_id */
            spot_market_id?: (string|null);

            /** CollateralParam liquidation_market_id */
            liquidation_market_id?: (string|null);

            /** CollateralParam keeper_reward_percentage */
            keeper_reward_percentage?: (string|null);

            /** CollateralParam check_collateralization_index_count */
            check_collateralization_index_count?: (string|null);

            /** CollateralParam conversion_factor */
            conversion_factor?: (string|null);
        }

        /** Represents a CollateralParam. */
        class CollateralParam implements ICollateralParam {

            /**
             * Constructs a new CollateralParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.ICollateralParam);

            /** CollateralParam denom. */
            public denom: string;

            /** CollateralParam type. */
            public type: string;

            /** CollateralParam liquidation_ratio. */
            public liquidation_ratio: string;

            /** CollateralParam debt_limit. */
            public debt_limit?: (cosmos.base.v1beta1.ICoin|null);

            /** CollateralParam stability_fee. */
            public stability_fee: string;

            /** CollateralParam auction_size. */
            public auction_size: string;

            /** CollateralParam liquidation_penalty. */
            public liquidation_penalty: string;

            /** CollateralParam prefix. */
            public prefix: number;

            /** CollateralParam spot_market_id. */
            public spot_market_id: string;

            /** CollateralParam liquidation_market_id. */
            public liquidation_market_id: string;

            /** CollateralParam keeper_reward_percentage. */
            public keeper_reward_percentage: string;

            /** CollateralParam check_collateralization_index_count. */
            public check_collateralization_index_count: string;

            /** CollateralParam conversion_factor. */
            public conversion_factor: string;

            /**
             * Encodes the specified CollateralParam message. Does not implicitly {@link ununifi.cdp.CollateralParam.verify|verify} messages.
             * @param message CollateralParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.ICollateralParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CollateralParam message, length delimited. Does not implicitly {@link ununifi.cdp.CollateralParam.verify|verify} messages.
             * @param message CollateralParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.ICollateralParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CollateralParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CollateralParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.CollateralParam;

            /**
             * Decodes a CollateralParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CollateralParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.CollateralParam;

            /**
             * Verifies a CollateralParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CollateralParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CollateralParam
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.CollateralParam;

            /**
             * Creates a plain object from a CollateralParam message. Also converts values to other types if specified.
             * @param message CollateralParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.CollateralParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CollateralParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DebtParam. */
        interface IDebtParam {

            /** DebtParam denom */
            denom?: (string|null);

            /** DebtParam reference_asset */
            reference_asset?: (string|null);

            /** DebtParam conversion_factor */
            conversion_factor?: (string|null);

            /** DebtParam debt_floor */
            debt_floor?: (string|null);
        }

        /** Represents a DebtParam. */
        class DebtParam implements IDebtParam {

            /**
             * Constructs a new DebtParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IDebtParam);

            /** DebtParam denom. */
            public denom: string;

            /** DebtParam reference_asset. */
            public reference_asset: string;

            /** DebtParam conversion_factor. */
            public conversion_factor: string;

            /** DebtParam debt_floor. */
            public debt_floor: string;

            /**
             * Encodes the specified DebtParam message. Does not implicitly {@link ununifi.cdp.DebtParam.verify|verify} messages.
             * @param message DebtParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IDebtParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DebtParam message, length delimited. Does not implicitly {@link ununifi.cdp.DebtParam.verify|verify} messages.
             * @param message DebtParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IDebtParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DebtParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DebtParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.DebtParam;

            /**
             * Decodes a DebtParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DebtParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.DebtParam;

            /**
             * Verifies a DebtParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DebtParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DebtParam
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.DebtParam;

            /**
             * Creates a plain object from a DebtParam message. Also converts values to other types if specified.
             * @param message DebtParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.DebtParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DebtParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {

            /**
             * Constructs a new Msg service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls CreateCdp.
             * @param request MsgCreateCdp message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgCreateCdpResponse
             */
            public createCdp(request: ununifi.cdp.IMsgCreateCdp, callback: ununifi.cdp.Msg.CreateCdpCallback): void;

            /**
             * Calls CreateCdp.
             * @param request MsgCreateCdp message or plain object
             * @returns Promise
             */
            public createCdp(request: ununifi.cdp.IMsgCreateCdp): Promise<ununifi.cdp.MsgCreateCdpResponse>;

            /**
             * Calls Deposit.
             * @param request MsgDeposit message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgDepositResponse
             */
            public deposit(request: ununifi.cdp.IMsgDeposit, callback: ununifi.cdp.Msg.DepositCallback): void;

            /**
             * Calls Deposit.
             * @param request MsgDeposit message or plain object
             * @returns Promise
             */
            public deposit(request: ununifi.cdp.IMsgDeposit): Promise<ununifi.cdp.MsgDepositResponse>;

            /**
             * Calls Withdraw.
             * @param request MsgWithdraw message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgWithdrawResponse
             */
            public withdraw(request: ununifi.cdp.IMsgWithdraw, callback: ununifi.cdp.Msg.WithdrawCallback): void;

            /**
             * Calls Withdraw.
             * @param request MsgWithdraw message or plain object
             * @returns Promise
             */
            public withdraw(request: ununifi.cdp.IMsgWithdraw): Promise<ununifi.cdp.MsgWithdrawResponse>;

            /**
             * Calls DrawDebt.
             * @param request MsgDrawDebt message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgDrawDebtResponse
             */
            public drawDebt(request: ununifi.cdp.IMsgDrawDebt, callback: ununifi.cdp.Msg.DrawDebtCallback): void;

            /**
             * Calls DrawDebt.
             * @param request MsgDrawDebt message or plain object
             * @returns Promise
             */
            public drawDebt(request: ununifi.cdp.IMsgDrawDebt): Promise<ununifi.cdp.MsgDrawDebtResponse>;

            /**
             * Calls RepayDebt.
             * @param request MsgRepayDebt message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgRepayDebtResponse
             */
            public repayDebt(request: ununifi.cdp.IMsgRepayDebt, callback: ununifi.cdp.Msg.RepayDebtCallback): void;

            /**
             * Calls RepayDebt.
             * @param request MsgRepayDebt message or plain object
             * @returns Promise
             */
            public repayDebt(request: ununifi.cdp.IMsgRepayDebt): Promise<ununifi.cdp.MsgRepayDebtResponse>;

            /**
             * Calls Liquidate.
             * @param request MsgLiquidate message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgLiquidateResponse
             */
            public liquidate(request: ununifi.cdp.IMsgLiquidate, callback: ununifi.cdp.Msg.LiquidateCallback): void;

            /**
             * Calls Liquidate.
             * @param request MsgLiquidate message or plain object
             * @returns Promise
             */
            public liquidate(request: ununifi.cdp.IMsgLiquidate): Promise<ununifi.cdp.MsgLiquidateResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link ununifi.cdp.Msg#createCdp}.
             * @param error Error, if any
             * @param [response] MsgCreateCdpResponse
             */
            type CreateCdpCallback = (error: (Error|null), response?: ununifi.cdp.MsgCreateCdpResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Msg#deposit}.
             * @param error Error, if any
             * @param [response] MsgDepositResponse
             */
            type DepositCallback = (error: (Error|null), response?: ununifi.cdp.MsgDepositResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Msg#withdraw}.
             * @param error Error, if any
             * @param [response] MsgWithdrawResponse
             */
            type WithdrawCallback = (error: (Error|null), response?: ununifi.cdp.MsgWithdrawResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Msg#drawDebt}.
             * @param error Error, if any
             * @param [response] MsgDrawDebtResponse
             */
            type DrawDebtCallback = (error: (Error|null), response?: ununifi.cdp.MsgDrawDebtResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Msg#repayDebt}.
             * @param error Error, if any
             * @param [response] MsgRepayDebtResponse
             */
            type RepayDebtCallback = (error: (Error|null), response?: ununifi.cdp.MsgRepayDebtResponse) => void;

            /**
             * Callback as used by {@link ununifi.cdp.Msg#liquidate}.
             * @param error Error, if any
             * @param [response] MsgLiquidateResponse
             */
            type LiquidateCallback = (error: (Error|null), response?: ununifi.cdp.MsgLiquidateResponse) => void;
        }

        /** Properties of a MsgCreateCdp. */
        interface IMsgCreateCdp {

            /** MsgCreateCdp sender */
            sender?: (string|null);

            /** MsgCreateCdp collateral */
            collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgCreateCdp principal */
            principal?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgCreateCdp collateral_type */
            collateral_type?: (string|null);
        }

        /** Represents a MsgCreateCdp. */
        class MsgCreateCdp implements IMsgCreateCdp {

            /**
             * Constructs a new MsgCreateCdp.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgCreateCdp);

            /** MsgCreateCdp sender. */
            public sender: string;

            /** MsgCreateCdp collateral. */
            public collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgCreateCdp principal. */
            public principal?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgCreateCdp collateral_type. */
            public collateral_type: string;

            /**
             * Encodes the specified MsgCreateCdp message. Does not implicitly {@link ununifi.cdp.MsgCreateCdp.verify|verify} messages.
             * @param message MsgCreateCdp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgCreateCdp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCreateCdp message, length delimited. Does not implicitly {@link ununifi.cdp.MsgCreateCdp.verify|verify} messages.
             * @param message MsgCreateCdp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgCreateCdp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCreateCdp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCreateCdp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgCreateCdp;

            /**
             * Decodes a MsgCreateCdp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCreateCdp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgCreateCdp;

            /**
             * Verifies a MsgCreateCdp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCreateCdp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCreateCdp
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgCreateCdp;

            /**
             * Creates a plain object from a MsgCreateCdp message. Also converts values to other types if specified.
             * @param message MsgCreateCdp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgCreateCdp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCreateCdp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCreateCdpResponse. */
        interface IMsgCreateCdpResponse {
        }

        /** Represents a MsgCreateCdpResponse. */
        class MsgCreateCdpResponse implements IMsgCreateCdpResponse {

            /**
             * Constructs a new MsgCreateCdpResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgCreateCdpResponse);

            /**
             * Encodes the specified MsgCreateCdpResponse message. Does not implicitly {@link ununifi.cdp.MsgCreateCdpResponse.verify|verify} messages.
             * @param message MsgCreateCdpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgCreateCdpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCreateCdpResponse message, length delimited. Does not implicitly {@link ununifi.cdp.MsgCreateCdpResponse.verify|verify} messages.
             * @param message MsgCreateCdpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgCreateCdpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCreateCdpResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCreateCdpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgCreateCdpResponse;

            /**
             * Decodes a MsgCreateCdpResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCreateCdpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgCreateCdpResponse;

            /**
             * Verifies a MsgCreateCdpResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCreateCdpResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCreateCdpResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgCreateCdpResponse;

            /**
             * Creates a plain object from a MsgCreateCdpResponse message. Also converts values to other types if specified.
             * @param message MsgCreateCdpResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgCreateCdpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCreateCdpResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgDeposit. */
        interface IMsgDeposit {

            /** MsgDeposit depositor */
            depositor?: (string|null);

            /** MsgDeposit owner */
            owner?: (string|null);

            /** MsgDeposit collateral */
            collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgDeposit collateral_type */
            collateral_type?: (string|null);
        }

        /** Represents a MsgDeposit. */
        class MsgDeposit implements IMsgDeposit {

            /**
             * Constructs a new MsgDeposit.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgDeposit);

            /** MsgDeposit depositor. */
            public depositor: string;

            /** MsgDeposit owner. */
            public owner: string;

            /** MsgDeposit collateral. */
            public collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgDeposit collateral_type. */
            public collateral_type: string;

            /**
             * Encodes the specified MsgDeposit message. Does not implicitly {@link ununifi.cdp.MsgDeposit.verify|verify} messages.
             * @param message MsgDeposit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgDeposit message, length delimited. Does not implicitly {@link ununifi.cdp.MsgDeposit.verify|verify} messages.
             * @param message MsgDeposit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgDeposit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgDeposit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgDeposit;

            /**
             * Decodes a MsgDeposit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgDeposit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgDeposit;

            /**
             * Verifies a MsgDeposit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgDeposit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgDeposit
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgDeposit;

            /**
             * Creates a plain object from a MsgDeposit message. Also converts values to other types if specified.
             * @param message MsgDeposit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgDeposit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgDeposit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgDepositResponse. */
        interface IMsgDepositResponse {
        }

        /** Represents a MsgDepositResponse. */
        class MsgDepositResponse implements IMsgDepositResponse {

            /**
             * Constructs a new MsgDepositResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgDepositResponse);

            /**
             * Encodes the specified MsgDepositResponse message. Does not implicitly {@link ununifi.cdp.MsgDepositResponse.verify|verify} messages.
             * @param message MsgDepositResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgDepositResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgDepositResponse message, length delimited. Does not implicitly {@link ununifi.cdp.MsgDepositResponse.verify|verify} messages.
             * @param message MsgDepositResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgDepositResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgDepositResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgDepositResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgDepositResponse;

            /**
             * Decodes a MsgDepositResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgDepositResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgDepositResponse;

            /**
             * Verifies a MsgDepositResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgDepositResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgDepositResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgDepositResponse;

            /**
             * Creates a plain object from a MsgDepositResponse message. Also converts values to other types if specified.
             * @param message MsgDepositResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgDepositResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgDepositResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgWithdraw. */
        interface IMsgWithdraw {

            /** MsgWithdraw depositor */
            depositor?: (string|null);

            /** MsgWithdraw owner */
            owner?: (string|null);

            /** MsgWithdraw collateral */
            collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgWithdraw collateral_type */
            collateral_type?: (string|null);
        }

        /** Represents a MsgWithdraw. */
        class MsgWithdraw implements IMsgWithdraw {

            /**
             * Constructs a new MsgWithdraw.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgWithdraw);

            /** MsgWithdraw depositor. */
            public depositor: string;

            /** MsgWithdraw owner. */
            public owner: string;

            /** MsgWithdraw collateral. */
            public collateral?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgWithdraw collateral_type. */
            public collateral_type: string;

            /**
             * Encodes the specified MsgWithdraw message. Does not implicitly {@link ununifi.cdp.MsgWithdraw.verify|verify} messages.
             * @param message MsgWithdraw message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgWithdraw message, length delimited. Does not implicitly {@link ununifi.cdp.MsgWithdraw.verify|verify} messages.
             * @param message MsgWithdraw message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgWithdraw, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgWithdraw message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgWithdraw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgWithdraw;

            /**
             * Decodes a MsgWithdraw message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgWithdraw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgWithdraw;

            /**
             * Verifies a MsgWithdraw message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgWithdraw message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgWithdraw
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgWithdraw;

            /**
             * Creates a plain object from a MsgWithdraw message. Also converts values to other types if specified.
             * @param message MsgWithdraw
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgWithdraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgWithdraw to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgWithdrawResponse. */
        interface IMsgWithdrawResponse {
        }

        /** Represents a MsgWithdrawResponse. */
        class MsgWithdrawResponse implements IMsgWithdrawResponse {

            /**
             * Constructs a new MsgWithdrawResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgWithdrawResponse);

            /**
             * Encodes the specified MsgWithdrawResponse message. Does not implicitly {@link ununifi.cdp.MsgWithdrawResponse.verify|verify} messages.
             * @param message MsgWithdrawResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgWithdrawResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgWithdrawResponse message, length delimited. Does not implicitly {@link ununifi.cdp.MsgWithdrawResponse.verify|verify} messages.
             * @param message MsgWithdrawResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgWithdrawResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgWithdrawResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgWithdrawResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgWithdrawResponse;

            /**
             * Decodes a MsgWithdrawResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgWithdrawResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgWithdrawResponse;

            /**
             * Verifies a MsgWithdrawResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgWithdrawResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgWithdrawResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgWithdrawResponse;

            /**
             * Creates a plain object from a MsgWithdrawResponse message. Also converts values to other types if specified.
             * @param message MsgWithdrawResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgWithdrawResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgWithdrawResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgDrawDebt. */
        interface IMsgDrawDebt {

            /** MsgDrawDebt sender */
            sender?: (string|null);

            /** MsgDrawDebt collateral_type */
            collateral_type?: (string|null);

            /** MsgDrawDebt principal */
            principal?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a MsgDrawDebt. */
        class MsgDrawDebt implements IMsgDrawDebt {

            /**
             * Constructs a new MsgDrawDebt.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgDrawDebt);

            /** MsgDrawDebt sender. */
            public sender: string;

            /** MsgDrawDebt collateral_type. */
            public collateral_type: string;

            /** MsgDrawDebt principal. */
            public principal?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified MsgDrawDebt message. Does not implicitly {@link ununifi.cdp.MsgDrawDebt.verify|verify} messages.
             * @param message MsgDrawDebt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgDrawDebt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgDrawDebt message, length delimited. Does not implicitly {@link ununifi.cdp.MsgDrawDebt.verify|verify} messages.
             * @param message MsgDrawDebt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgDrawDebt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgDrawDebt message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgDrawDebt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgDrawDebt;

            /**
             * Decodes a MsgDrawDebt message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgDrawDebt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgDrawDebt;

            /**
             * Verifies a MsgDrawDebt message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgDrawDebt message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgDrawDebt
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgDrawDebt;

            /**
             * Creates a plain object from a MsgDrawDebt message. Also converts values to other types if specified.
             * @param message MsgDrawDebt
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgDrawDebt, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgDrawDebt to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgDrawDebtResponse. */
        interface IMsgDrawDebtResponse {
        }

        /** Represents a MsgDrawDebtResponse. */
        class MsgDrawDebtResponse implements IMsgDrawDebtResponse {

            /**
             * Constructs a new MsgDrawDebtResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgDrawDebtResponse);

            /**
             * Encodes the specified MsgDrawDebtResponse message. Does not implicitly {@link ununifi.cdp.MsgDrawDebtResponse.verify|verify} messages.
             * @param message MsgDrawDebtResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgDrawDebtResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgDrawDebtResponse message, length delimited. Does not implicitly {@link ununifi.cdp.MsgDrawDebtResponse.verify|verify} messages.
             * @param message MsgDrawDebtResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgDrawDebtResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgDrawDebtResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgDrawDebtResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgDrawDebtResponse;

            /**
             * Decodes a MsgDrawDebtResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgDrawDebtResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgDrawDebtResponse;

            /**
             * Verifies a MsgDrawDebtResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgDrawDebtResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgDrawDebtResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgDrawDebtResponse;

            /**
             * Creates a plain object from a MsgDrawDebtResponse message. Also converts values to other types if specified.
             * @param message MsgDrawDebtResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgDrawDebtResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgDrawDebtResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRepayDebt. */
        interface IMsgRepayDebt {

            /** MsgRepayDebt sender */
            sender?: (string|null);

            /** MsgRepayDebt collateral_type */
            collateral_type?: (string|null);

            /** MsgRepayDebt payment */
            payment?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a MsgRepayDebt. */
        class MsgRepayDebt implements IMsgRepayDebt {

            /**
             * Constructs a new MsgRepayDebt.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgRepayDebt);

            /** MsgRepayDebt sender. */
            public sender: string;

            /** MsgRepayDebt collateral_type. */
            public collateral_type: string;

            /** MsgRepayDebt payment. */
            public payment?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified MsgRepayDebt message. Does not implicitly {@link ununifi.cdp.MsgRepayDebt.verify|verify} messages.
             * @param message MsgRepayDebt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgRepayDebt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRepayDebt message, length delimited. Does not implicitly {@link ununifi.cdp.MsgRepayDebt.verify|verify} messages.
             * @param message MsgRepayDebt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgRepayDebt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRepayDebt message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRepayDebt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgRepayDebt;

            /**
             * Decodes a MsgRepayDebt message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRepayDebt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgRepayDebt;

            /**
             * Verifies a MsgRepayDebt message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRepayDebt message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRepayDebt
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgRepayDebt;

            /**
             * Creates a plain object from a MsgRepayDebt message. Also converts values to other types if specified.
             * @param message MsgRepayDebt
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgRepayDebt, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRepayDebt to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRepayDebtResponse. */
        interface IMsgRepayDebtResponse {
        }

        /** Represents a MsgRepayDebtResponse. */
        class MsgRepayDebtResponse implements IMsgRepayDebtResponse {

            /**
             * Constructs a new MsgRepayDebtResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgRepayDebtResponse);

            /**
             * Encodes the specified MsgRepayDebtResponse message. Does not implicitly {@link ununifi.cdp.MsgRepayDebtResponse.verify|verify} messages.
             * @param message MsgRepayDebtResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgRepayDebtResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRepayDebtResponse message, length delimited. Does not implicitly {@link ununifi.cdp.MsgRepayDebtResponse.verify|verify} messages.
             * @param message MsgRepayDebtResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgRepayDebtResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRepayDebtResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRepayDebtResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgRepayDebtResponse;

            /**
             * Decodes a MsgRepayDebtResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRepayDebtResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgRepayDebtResponse;

            /**
             * Verifies a MsgRepayDebtResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRepayDebtResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRepayDebtResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgRepayDebtResponse;

            /**
             * Creates a plain object from a MsgRepayDebtResponse message. Also converts values to other types if specified.
             * @param message MsgRepayDebtResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgRepayDebtResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRepayDebtResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgLiquidate. */
        interface IMsgLiquidate {

            /** MsgLiquidate keeper */
            keeper?: (string|null);

            /** MsgLiquidate borrower */
            borrower?: (string|null);

            /** MsgLiquidate collateral_type */
            collateral_type?: (string|null);
        }

        /** Represents a MsgLiquidate. */
        class MsgLiquidate implements IMsgLiquidate {

            /**
             * Constructs a new MsgLiquidate.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgLiquidate);

            /** MsgLiquidate keeper. */
            public keeper: string;

            /** MsgLiquidate borrower. */
            public borrower: string;

            /** MsgLiquidate collateral_type. */
            public collateral_type: string;

            /**
             * Encodes the specified MsgLiquidate message. Does not implicitly {@link ununifi.cdp.MsgLiquidate.verify|verify} messages.
             * @param message MsgLiquidate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgLiquidate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgLiquidate message, length delimited. Does not implicitly {@link ununifi.cdp.MsgLiquidate.verify|verify} messages.
             * @param message MsgLiquidate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgLiquidate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgLiquidate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgLiquidate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgLiquidate;

            /**
             * Decodes a MsgLiquidate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgLiquidate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgLiquidate;

            /**
             * Verifies a MsgLiquidate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgLiquidate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgLiquidate
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgLiquidate;

            /**
             * Creates a plain object from a MsgLiquidate message. Also converts values to other types if specified.
             * @param message MsgLiquidate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgLiquidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgLiquidate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgLiquidateResponse. */
        interface IMsgLiquidateResponse {
        }

        /** Represents a MsgLiquidateResponse. */
        class MsgLiquidateResponse implements IMsgLiquidateResponse {

            /**
             * Constructs a new MsgLiquidateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IMsgLiquidateResponse);

            /**
             * Encodes the specified MsgLiquidateResponse message. Does not implicitly {@link ununifi.cdp.MsgLiquidateResponse.verify|verify} messages.
             * @param message MsgLiquidateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IMsgLiquidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgLiquidateResponse message, length delimited. Does not implicitly {@link ununifi.cdp.MsgLiquidateResponse.verify|verify} messages.
             * @param message MsgLiquidateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IMsgLiquidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgLiquidateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgLiquidateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.MsgLiquidateResponse;

            /**
             * Decodes a MsgLiquidateResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgLiquidateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.MsgLiquidateResponse;

            /**
             * Verifies a MsgLiquidateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgLiquidateResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgLiquidateResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.MsgLiquidateResponse;

            /**
             * Creates a plain object from a MsgLiquidateResponse message. Also converts values to other types if specified.
             * @param message MsgLiquidateResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.MsgLiquidateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgLiquidateResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (ununifi.cdp.IParams|null);

            /** GenesisState cdps */
            cdps?: (ununifi.cdp.ICdp[]|null);

            /** GenesisState deposits */
            deposits?: (ununifi.cdp.IDeposit[]|null);

            /** GenesisState starting_cdp_id */
            starting_cdp_id?: (Long|null);

            /** GenesisState debt_denom */
            debt_denom?: (string|null);

            /** GenesisState gov_denom */
            gov_denom?: (string|null);

            /** GenesisState previous_accumulation_times */
            previous_accumulation_times?: (ununifi.cdp.IGenesisAccumulationTime[]|null);

            /** GenesisState total_principals */
            total_principals?: (ununifi.cdp.IGenesisTotalPrincipal[]|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IGenesisState);

            /** GenesisState params. */
            public params?: (ununifi.cdp.IParams|null);

            /** GenesisState cdps. */
            public cdps: ununifi.cdp.ICdp[];

            /** GenesisState deposits. */
            public deposits: ununifi.cdp.IDeposit[];

            /** GenesisState starting_cdp_id. */
            public starting_cdp_id: Long;

            /** GenesisState debt_denom. */
            public debt_denom: string;

            /** GenesisState gov_denom. */
            public gov_denom: string;

            /** GenesisState previous_accumulation_times. */
            public previous_accumulation_times: ununifi.cdp.IGenesisAccumulationTime[];

            /** GenesisState total_principals. */
            public total_principals: ununifi.cdp.IGenesisTotalPrincipal[];

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link ununifi.cdp.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link ununifi.cdp.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisAccumulationTime. */
        interface IGenesisAccumulationTime {

            /** GenesisAccumulationTime collateral_type */
            collateral_type?: (string|null);

            /** GenesisAccumulationTime previous_accumulation_time */
            previous_accumulation_time?: (google.protobuf.ITimestamp|null);

            /** GenesisAccumulationTime interest_factor */
            interest_factor?: (string|null);
        }

        /** Represents a GenesisAccumulationTime. */
        class GenesisAccumulationTime implements IGenesisAccumulationTime {

            /**
             * Constructs a new GenesisAccumulationTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IGenesisAccumulationTime);

            /** GenesisAccumulationTime collateral_type. */
            public collateral_type: string;

            /** GenesisAccumulationTime previous_accumulation_time. */
            public previous_accumulation_time?: (google.protobuf.ITimestamp|null);

            /** GenesisAccumulationTime interest_factor. */
            public interest_factor: string;

            /**
             * Encodes the specified GenesisAccumulationTime message. Does not implicitly {@link ununifi.cdp.GenesisAccumulationTime.verify|verify} messages.
             * @param message GenesisAccumulationTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IGenesisAccumulationTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisAccumulationTime message, length delimited. Does not implicitly {@link ununifi.cdp.GenesisAccumulationTime.verify|verify} messages.
             * @param message GenesisAccumulationTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IGenesisAccumulationTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisAccumulationTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisAccumulationTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.GenesisAccumulationTime;

            /**
             * Decodes a GenesisAccumulationTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisAccumulationTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.GenesisAccumulationTime;

            /**
             * Verifies a GenesisAccumulationTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisAccumulationTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisAccumulationTime
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.GenesisAccumulationTime;

            /**
             * Creates a plain object from a GenesisAccumulationTime message. Also converts values to other types if specified.
             * @param message GenesisAccumulationTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.GenesisAccumulationTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisAccumulationTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisTotalPrincipal. */
        interface IGenesisTotalPrincipal {

            /** GenesisTotalPrincipal collateral_type */
            collateral_type?: (string|null);

            /** GenesisTotalPrincipal total_principal */
            total_principal?: (string|null);
        }

        /** Represents a GenesisTotalPrincipal. */
        class GenesisTotalPrincipal implements IGenesisTotalPrincipal {

            /**
             * Constructs a new GenesisTotalPrincipal.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.cdp.IGenesisTotalPrincipal);

            /** GenesisTotalPrincipal collateral_type. */
            public collateral_type: string;

            /** GenesisTotalPrincipal total_principal. */
            public total_principal: string;

            /**
             * Encodes the specified GenesisTotalPrincipal message. Does not implicitly {@link ununifi.cdp.GenesisTotalPrincipal.verify|verify} messages.
             * @param message GenesisTotalPrincipal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.cdp.IGenesisTotalPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisTotalPrincipal message, length delimited. Does not implicitly {@link ununifi.cdp.GenesisTotalPrincipal.verify|verify} messages.
             * @param message GenesisTotalPrincipal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.cdp.IGenesisTotalPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisTotalPrincipal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisTotalPrincipal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.cdp.GenesisTotalPrincipal;

            /**
             * Decodes a GenesisTotalPrincipal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisTotalPrincipal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.cdp.GenesisTotalPrincipal;

            /**
             * Verifies a GenesisTotalPrincipal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisTotalPrincipal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisTotalPrincipal
             */
            public static fromObject(object: { [k: string]: any }): ununifi.cdp.GenesisTotalPrincipal;

            /**
             * Creates a plain object from a GenesisTotalPrincipal message. Also converts values to other types if specified.
             * @param message GenesisTotalPrincipal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.cdp.GenesisTotalPrincipal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisTotalPrincipal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace incentive. */
    namespace incentive {

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: ununifi.incentive.IQueryParamsRequest, callback: ununifi.incentive.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: ununifi.incentive.IQueryParamsRequest): Promise<ununifi.incentive.QueryParamsResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link ununifi.incentive.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: ununifi.incentive.QueryParamsResponse) => void;
        }

        /** Properties of a QueryParamsRequest. */
        interface IQueryParamsRequest {
        }

        /** Represents a QueryParamsRequest. */
        class QueryParamsRequest implements IQueryParamsRequest {

            /**
             * Constructs a new QueryParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IQueryParamsRequest);

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link ununifi.incentive.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link ununifi.incentive.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.QueryParamsRequest;

            /**
             * Verifies a QueryParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (ununifi.incentive.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (ununifi.incentive.IParams|null);

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link ununifi.incentive.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link ununifi.incentive.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.QueryParamsResponse;

            /**
             * Verifies a QueryParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BaseClaim. */
        interface IBaseClaim {

            /** BaseClaim owner */
            owner?: (string|null);

            /** BaseClaim reward */
            reward?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a BaseClaim. */
        class BaseClaim implements IBaseClaim {

            /**
             * Constructs a new BaseClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IBaseClaim);

            /** BaseClaim owner. */
            public owner: string;

            /** BaseClaim reward. */
            public reward?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified BaseClaim message. Does not implicitly {@link ununifi.incentive.BaseClaim.verify|verify} messages.
             * @param message BaseClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IBaseClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaseClaim message, length delimited. Does not implicitly {@link ununifi.incentive.BaseClaim.verify|verify} messages.
             * @param message BaseClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IBaseClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaseClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaseClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.BaseClaim;

            /**
             * Decodes a BaseClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaseClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.BaseClaim;

            /**
             * Verifies a BaseClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaseClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaseClaim
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.BaseClaim;

            /**
             * Creates a plain object from a BaseClaim message. Also converts values to other types if specified.
             * @param message BaseClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.BaseClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaseClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BaseMultiClaim. */
        interface IBaseMultiClaim {

            /** BaseMultiClaim owner */
            owner?: (string|null);

            /** BaseMultiClaim reward */
            reward?: (cosmos.base.v1beta1.ICoin[]|null);
        }

        /** Represents a BaseMultiClaim. */
        class BaseMultiClaim implements IBaseMultiClaim {

            /**
             * Constructs a new BaseMultiClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IBaseMultiClaim);

            /** BaseMultiClaim owner. */
            public owner: string;

            /** BaseMultiClaim reward. */
            public reward: cosmos.base.v1beta1.ICoin[];

            /**
             * Encodes the specified BaseMultiClaim message. Does not implicitly {@link ununifi.incentive.BaseMultiClaim.verify|verify} messages.
             * @param message BaseMultiClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IBaseMultiClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaseMultiClaim message, length delimited. Does not implicitly {@link ununifi.incentive.BaseMultiClaim.verify|verify} messages.
             * @param message BaseMultiClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IBaseMultiClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaseMultiClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaseMultiClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.BaseMultiClaim;

            /**
             * Decodes a BaseMultiClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaseMultiClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.BaseMultiClaim;

            /**
             * Verifies a BaseMultiClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaseMultiClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaseMultiClaim
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.BaseMultiClaim;

            /**
             * Creates a plain object from a BaseMultiClaim message. Also converts values to other types if specified.
             * @param message BaseMultiClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.BaseMultiClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaseMultiClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CdpMintingClaim. */
        interface ICdpMintingClaim {

            /** CdpMintingClaim base_claim */
            base_claim?: (ununifi.incentive.IBaseClaim|null);

            /** CdpMintingClaim reward_indexes */
            reward_indexes?: (ununifi.incentive.IRewardIndex[]|null);
        }

        /** Represents a CdpMintingClaim. */
        class CdpMintingClaim implements ICdpMintingClaim {

            /**
             * Constructs a new CdpMintingClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.ICdpMintingClaim);

            /** CdpMintingClaim base_claim. */
            public base_claim?: (ununifi.incentive.IBaseClaim|null);

            /** CdpMintingClaim reward_indexes. */
            public reward_indexes: ununifi.incentive.IRewardIndex[];

            /**
             * Encodes the specified CdpMintingClaim message. Does not implicitly {@link ununifi.incentive.CdpMintingClaim.verify|verify} messages.
             * @param message CdpMintingClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.ICdpMintingClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CdpMintingClaim message, length delimited. Does not implicitly {@link ununifi.incentive.CdpMintingClaim.verify|verify} messages.
             * @param message CdpMintingClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.ICdpMintingClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CdpMintingClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CdpMintingClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.CdpMintingClaim;

            /**
             * Decodes a CdpMintingClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CdpMintingClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.CdpMintingClaim;

            /**
             * Verifies a CdpMintingClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CdpMintingClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CdpMintingClaim
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.CdpMintingClaim;

            /**
             * Creates a plain object from a CdpMintingClaim message. Also converts values to other types if specified.
             * @param message CdpMintingClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.CdpMintingClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CdpMintingClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RewardIndex. */
        interface IRewardIndex {

            /** RewardIndex collateral_type */
            collateral_type?: (string|null);

            /** RewardIndex reward_factor */
            reward_factor?: (string|null);
        }

        /** Represents a RewardIndex. */
        class RewardIndex implements IRewardIndex {

            /**
             * Constructs a new RewardIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IRewardIndex);

            /** RewardIndex collateral_type. */
            public collateral_type: string;

            /** RewardIndex reward_factor. */
            public reward_factor: string;

            /**
             * Encodes the specified RewardIndex message. Does not implicitly {@link ununifi.incentive.RewardIndex.verify|verify} messages.
             * @param message RewardIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IRewardIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RewardIndex message, length delimited. Does not implicitly {@link ununifi.incentive.RewardIndex.verify|verify} messages.
             * @param message RewardIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IRewardIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RewardIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RewardIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.RewardIndex;

            /**
             * Decodes a RewardIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RewardIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.RewardIndex;

            /**
             * Verifies a RewardIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RewardIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RewardIndex
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.RewardIndex;

            /**
             * Creates a plain object from a RewardIndex message. Also converts values to other types if specified.
             * @param message RewardIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.RewardIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RewardIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params cdp_minting_reward_periods */
            cdp_minting_reward_periods?: (ununifi.incentive.IRewardPeriod[]|null);

            /** Params claim_multipliers */
            claim_multipliers?: (ununifi.incentive.IMultiplier[]|null);

            /** Params claim_end */
            claim_end?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IParams);

            /** Params cdp_minting_reward_periods. */
            public cdp_minting_reward_periods: ununifi.incentive.IRewardPeriod[];

            /** Params claim_multipliers. */
            public claim_multipliers: ununifi.incentive.IMultiplier[];

            /** Params claim_end. */
            public claim_end?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified Params message. Does not implicitly {@link ununifi.incentive.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link ununifi.incentive.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RewardPeriod. */
        interface IRewardPeriod {

            /** RewardPeriod active */
            active?: (boolean|null);

            /** RewardPeriod collateral_type */
            collateral_type?: (string|null);

            /** RewardPeriod start */
            start?: (google.protobuf.ITimestamp|null);

            /** RewardPeriod end */
            end?: (google.protobuf.ITimestamp|null);

            /** RewardPeriod rewards_per_second */
            rewards_per_second?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a RewardPeriod. */
        class RewardPeriod implements IRewardPeriod {

            /**
             * Constructs a new RewardPeriod.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IRewardPeriod);

            /** RewardPeriod active. */
            public active: boolean;

            /** RewardPeriod collateral_type. */
            public collateral_type: string;

            /** RewardPeriod start. */
            public start?: (google.protobuf.ITimestamp|null);

            /** RewardPeriod end. */
            public end?: (google.protobuf.ITimestamp|null);

            /** RewardPeriod rewards_per_second. */
            public rewards_per_second?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Encodes the specified RewardPeriod message. Does not implicitly {@link ununifi.incentive.RewardPeriod.verify|verify} messages.
             * @param message RewardPeriod message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IRewardPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RewardPeriod message, length delimited. Does not implicitly {@link ununifi.incentive.RewardPeriod.verify|verify} messages.
             * @param message RewardPeriod message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IRewardPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RewardPeriod message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RewardPeriod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.RewardPeriod;

            /**
             * Decodes a RewardPeriod message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RewardPeriod
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.RewardPeriod;

            /**
             * Verifies a RewardPeriod message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RewardPeriod message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RewardPeriod
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.RewardPeriod;

            /**
             * Creates a plain object from a RewardPeriod message. Also converts values to other types if specified.
             * @param message RewardPeriod
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.RewardPeriod, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RewardPeriod to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Multiplier. */
        interface IMultiplier {

            /** Multiplier name */
            name?: (string|null);

            /** Multiplier months_lockup */
            months_lockup?: (Long|null);

            /** Multiplier factor */
            factor?: (string|null);
        }

        /** Represents a Multiplier. */
        class Multiplier implements IMultiplier {

            /**
             * Constructs a new Multiplier.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IMultiplier);

            /** Multiplier name. */
            public name: string;

            /** Multiplier months_lockup. */
            public months_lockup: Long;

            /** Multiplier factor. */
            public factor: string;

            /**
             * Encodes the specified Multiplier message. Does not implicitly {@link ununifi.incentive.Multiplier.verify|verify} messages.
             * @param message Multiplier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IMultiplier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Multiplier message, length delimited. Does not implicitly {@link ununifi.incentive.Multiplier.verify|verify} messages.
             * @param message Multiplier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IMultiplier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Multiplier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Multiplier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.Multiplier;

            /**
             * Decodes a Multiplier message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Multiplier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.Multiplier;

            /**
             * Verifies a Multiplier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Multiplier message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Multiplier
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.Multiplier;

            /**
             * Creates a plain object from a Multiplier message. Also converts values to other types if specified.
             * @param message Multiplier
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.Multiplier, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Multiplier to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {

            /**
             * Constructs a new Msg service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls ClaimCdpMintingReward.
             * @param request MsgClaimCdpMintingReward message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgClaimCdpMintingRewardResponse
             */
            public claimCdpMintingReward(request: ununifi.incentive.IMsgClaimCdpMintingReward, callback: ununifi.incentive.Msg.ClaimCdpMintingRewardCallback): void;

            /**
             * Calls ClaimCdpMintingReward.
             * @param request MsgClaimCdpMintingReward message or plain object
             * @returns Promise
             */
            public claimCdpMintingReward(request: ununifi.incentive.IMsgClaimCdpMintingReward): Promise<ununifi.incentive.MsgClaimCdpMintingRewardResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link ununifi.incentive.Msg#claimCdpMintingReward}.
             * @param error Error, if any
             * @param [response] MsgClaimCdpMintingRewardResponse
             */
            type ClaimCdpMintingRewardCallback = (error: (Error|null), response?: ununifi.incentive.MsgClaimCdpMintingRewardResponse) => void;
        }

        /** Properties of a MsgClaimCdpMintingReward. */
        interface IMsgClaimCdpMintingReward {

            /** MsgClaimCdpMintingReward sender */
            sender?: (string|null);

            /** MsgClaimCdpMintingReward multiplier_name */
            multiplier_name?: (string|null);
        }

        /** Represents a MsgClaimCdpMintingReward. */
        class MsgClaimCdpMintingReward implements IMsgClaimCdpMintingReward {

            /**
             * Constructs a new MsgClaimCdpMintingReward.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IMsgClaimCdpMintingReward);

            /** MsgClaimCdpMintingReward sender. */
            public sender: string;

            /** MsgClaimCdpMintingReward multiplier_name. */
            public multiplier_name: string;

            /**
             * Encodes the specified MsgClaimCdpMintingReward message. Does not implicitly {@link ununifi.incentive.MsgClaimCdpMintingReward.verify|verify} messages.
             * @param message MsgClaimCdpMintingReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IMsgClaimCdpMintingReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgClaimCdpMintingReward message, length delimited. Does not implicitly {@link ununifi.incentive.MsgClaimCdpMintingReward.verify|verify} messages.
             * @param message MsgClaimCdpMintingReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IMsgClaimCdpMintingReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgClaimCdpMintingReward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgClaimCdpMintingReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.MsgClaimCdpMintingReward;

            /**
             * Decodes a MsgClaimCdpMintingReward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgClaimCdpMintingReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.MsgClaimCdpMintingReward;

            /**
             * Verifies a MsgClaimCdpMintingReward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgClaimCdpMintingReward message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgClaimCdpMintingReward
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.MsgClaimCdpMintingReward;

            /**
             * Creates a plain object from a MsgClaimCdpMintingReward message. Also converts values to other types if specified.
             * @param message MsgClaimCdpMintingReward
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.MsgClaimCdpMintingReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgClaimCdpMintingReward to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgClaimCdpMintingRewardResponse. */
        interface IMsgClaimCdpMintingRewardResponse {
        }

        /** Represents a MsgClaimCdpMintingRewardResponse. */
        class MsgClaimCdpMintingRewardResponse implements IMsgClaimCdpMintingRewardResponse {

            /**
             * Constructs a new MsgClaimCdpMintingRewardResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IMsgClaimCdpMintingRewardResponse);

            /**
             * Encodes the specified MsgClaimCdpMintingRewardResponse message. Does not implicitly {@link ununifi.incentive.MsgClaimCdpMintingRewardResponse.verify|verify} messages.
             * @param message MsgClaimCdpMintingRewardResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IMsgClaimCdpMintingRewardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgClaimCdpMintingRewardResponse message, length delimited. Does not implicitly {@link ununifi.incentive.MsgClaimCdpMintingRewardResponse.verify|verify} messages.
             * @param message MsgClaimCdpMintingRewardResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IMsgClaimCdpMintingRewardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgClaimCdpMintingRewardResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgClaimCdpMintingRewardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.MsgClaimCdpMintingRewardResponse;

            /**
             * Decodes a MsgClaimCdpMintingRewardResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgClaimCdpMintingRewardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.MsgClaimCdpMintingRewardResponse;

            /**
             * Verifies a MsgClaimCdpMintingRewardResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgClaimCdpMintingRewardResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgClaimCdpMintingRewardResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.MsgClaimCdpMintingRewardResponse;

            /**
             * Creates a plain object from a MsgClaimCdpMintingRewardResponse message. Also converts values to other types if specified.
             * @param message MsgClaimCdpMintingRewardResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.MsgClaimCdpMintingRewardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgClaimCdpMintingRewardResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (ununifi.incentive.IParams|null);

            /** GenesisState cdp_accumulation_times */
            cdp_accumulation_times?: (ununifi.incentive.IGenesisAccumulationTime[]|null);

            /** GenesisState cdp_minting_claims */
            cdp_minting_claims?: (ununifi.incentive.ICdpMintingClaim[]|null);

            /** GenesisState denoms */
            denoms?: (ununifi.incentive.IGenesisDenoms|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IGenesisState);

            /** GenesisState params. */
            public params?: (ununifi.incentive.IParams|null);

            /** GenesisState cdp_accumulation_times. */
            public cdp_accumulation_times: ununifi.incentive.IGenesisAccumulationTime[];

            /** GenesisState cdp_minting_claims. */
            public cdp_minting_claims: ununifi.incentive.ICdpMintingClaim[];

            /** GenesisState denoms. */
            public denoms?: (ununifi.incentive.IGenesisDenoms|null);

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link ununifi.incentive.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link ununifi.incentive.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisAccumulationTime. */
        interface IGenesisAccumulationTime {

            /** GenesisAccumulationTime collateral_type */
            collateral_type?: (string|null);

            /** GenesisAccumulationTime previous_accumulation_time */
            previous_accumulation_time?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a GenesisAccumulationTime. */
        class GenesisAccumulationTime implements IGenesisAccumulationTime {

            /**
             * Constructs a new GenesisAccumulationTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IGenesisAccumulationTime);

            /** GenesisAccumulationTime collateral_type. */
            public collateral_type: string;

            /** GenesisAccumulationTime previous_accumulation_time. */
            public previous_accumulation_time?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified GenesisAccumulationTime message. Does not implicitly {@link ununifi.incentive.GenesisAccumulationTime.verify|verify} messages.
             * @param message GenesisAccumulationTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IGenesisAccumulationTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisAccumulationTime message, length delimited. Does not implicitly {@link ununifi.incentive.GenesisAccumulationTime.verify|verify} messages.
             * @param message GenesisAccumulationTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IGenesisAccumulationTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisAccumulationTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisAccumulationTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.GenesisAccumulationTime;

            /**
             * Decodes a GenesisAccumulationTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisAccumulationTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.GenesisAccumulationTime;

            /**
             * Verifies a GenesisAccumulationTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisAccumulationTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisAccumulationTime
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.GenesisAccumulationTime;

            /**
             * Creates a plain object from a GenesisAccumulationTime message. Also converts values to other types if specified.
             * @param message GenesisAccumulationTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.GenesisAccumulationTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisAccumulationTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisDenoms. */
        interface IGenesisDenoms {

            /** GenesisDenoms principal_denom */
            principal_denom?: (string|null);

            /** GenesisDenoms cdp_minting_reward_denom */
            cdp_minting_reward_denom?: (string|null);
        }

        /** Represents a GenesisDenoms. */
        class GenesisDenoms implements IGenesisDenoms {

            /**
             * Constructs a new GenesisDenoms.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.incentive.IGenesisDenoms);

            /** GenesisDenoms principal_denom. */
            public principal_denom: string;

            /** GenesisDenoms cdp_minting_reward_denom. */
            public cdp_minting_reward_denom: string;

            /**
             * Encodes the specified GenesisDenoms message. Does not implicitly {@link ununifi.incentive.GenesisDenoms.verify|verify} messages.
             * @param message GenesisDenoms message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.incentive.IGenesisDenoms, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisDenoms message, length delimited. Does not implicitly {@link ununifi.incentive.GenesisDenoms.verify|verify} messages.
             * @param message GenesisDenoms message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.incentive.IGenesisDenoms, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisDenoms message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisDenoms
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.incentive.GenesisDenoms;

            /**
             * Decodes a GenesisDenoms message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisDenoms
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.incentive.GenesisDenoms;

            /**
             * Verifies a GenesisDenoms message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisDenoms message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisDenoms
             */
            public static fromObject(object: { [k: string]: any }): ununifi.incentive.GenesisDenoms;

            /**
             * Creates a plain object from a GenesisDenoms message. Also converts values to other types if specified.
             * @param message GenesisDenoms
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.incentive.GenesisDenoms, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisDenoms to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace pricefeed. */
    namespace pricefeed {

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: ununifi.pricefeed.IQueryParamsRequest, callback: ununifi.pricefeed.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: ununifi.pricefeed.IQueryParamsRequest): Promise<ununifi.pricefeed.QueryParamsResponse>;

            /**
             * Calls MarketAll.
             * @param request QueryAllMarketRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllMarketResponse
             */
            public marketAll(request: ununifi.pricefeed.IQueryAllMarketRequest, callback: ununifi.pricefeed.Query.MarketAllCallback): void;

            /**
             * Calls MarketAll.
             * @param request QueryAllMarketRequest message or plain object
             * @returns Promise
             */
            public marketAll(request: ununifi.pricefeed.IQueryAllMarketRequest): Promise<ununifi.pricefeed.QueryAllMarketResponse>;

            /**
             * Calls OracleAll.
             * @param request QueryAllOracleRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllOracleResponse
             */
            public oracleAll(request: ununifi.pricefeed.IQueryAllOracleRequest, callback: ununifi.pricefeed.Query.OracleAllCallback): void;

            /**
             * Calls OracleAll.
             * @param request QueryAllOracleRequest message or plain object
             * @returns Promise
             */
            public oracleAll(request: ununifi.pricefeed.IQueryAllOracleRequest): Promise<ununifi.pricefeed.QueryAllOracleResponse>;

            /**
             * Calls Price.
             * @param request QueryGetPriceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryGetPriceResponse
             */
            public price(request: ununifi.pricefeed.IQueryGetPriceRequest, callback: ununifi.pricefeed.Query.PriceCallback): void;

            /**
             * Calls Price.
             * @param request QueryGetPriceRequest message or plain object
             * @returns Promise
             */
            public price(request: ununifi.pricefeed.IQueryGetPriceRequest): Promise<ununifi.pricefeed.QueryGetPriceResponse>;

            /**
             * Calls PriceAll.
             * @param request QueryAllPriceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllPriceResponse
             */
            public priceAll(request: ununifi.pricefeed.IQueryAllPriceRequest, callback: ununifi.pricefeed.Query.PriceAllCallback): void;

            /**
             * Calls PriceAll.
             * @param request QueryAllPriceRequest message or plain object
             * @returns Promise
             */
            public priceAll(request: ununifi.pricefeed.IQueryAllPriceRequest): Promise<ununifi.pricefeed.QueryAllPriceResponse>;

            /**
             * Calls RawPriceAll.
             * @param request QueryAllRawPriceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAllRawPriceResponse
             */
            public rawPriceAll(request: ununifi.pricefeed.IQueryAllRawPriceRequest, callback: ununifi.pricefeed.Query.RawPriceAllCallback): void;

            /**
             * Calls RawPriceAll.
             * @param request QueryAllRawPriceRequest message or plain object
             * @returns Promise
             */
            public rawPriceAll(request: ununifi.pricefeed.IQueryAllRawPriceRequest): Promise<ununifi.pricefeed.QueryAllRawPriceResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link ununifi.pricefeed.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: ununifi.pricefeed.QueryParamsResponse) => void;

            /**
             * Callback as used by {@link ununifi.pricefeed.Query#marketAll}.
             * @param error Error, if any
             * @param [response] QueryAllMarketResponse
             */
            type MarketAllCallback = (error: (Error|null), response?: ununifi.pricefeed.QueryAllMarketResponse) => void;

            /**
             * Callback as used by {@link ununifi.pricefeed.Query#oracleAll}.
             * @param error Error, if any
             * @param [response] QueryAllOracleResponse
             */
            type OracleAllCallback = (error: (Error|null), response?: ununifi.pricefeed.QueryAllOracleResponse) => void;

            /**
             * Callback as used by {@link ununifi.pricefeed.Query#price}.
             * @param error Error, if any
             * @param [response] QueryGetPriceResponse
             */
            type PriceCallback = (error: (Error|null), response?: ununifi.pricefeed.QueryGetPriceResponse) => void;

            /**
             * Callback as used by {@link ununifi.pricefeed.Query#priceAll}.
             * @param error Error, if any
             * @param [response] QueryAllPriceResponse
             */
            type PriceAllCallback = (error: (Error|null), response?: ununifi.pricefeed.QueryAllPriceResponse) => void;

            /**
             * Callback as used by {@link ununifi.pricefeed.Query#rawPriceAll}.
             * @param error Error, if any
             * @param [response] QueryAllRawPriceResponse
             */
            type RawPriceAllCallback = (error: (Error|null), response?: ununifi.pricefeed.QueryAllRawPriceResponse) => void;
        }

        /** Properties of a QueryParamsRequest. */
        interface IQueryParamsRequest {
        }

        /** Represents a QueryParamsRequest. */
        class QueryParamsRequest implements IQueryParamsRequest {

            /**
             * Constructs a new QueryParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryParamsRequest);

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link ununifi.pricefeed.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryParamsRequest;

            /**
             * Verifies a QueryParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (ununifi.pricefeed.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (ununifi.pricefeed.IParams|null);

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link ununifi.pricefeed.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryParamsResponse;

            /**
             * Verifies a QueryParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllMarketRequest. */
        interface IQueryAllMarketRequest {

            /** QueryAllMarketRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a QueryAllMarketRequest. */
        class QueryAllMarketRequest implements IQueryAllMarketRequest {

            /**
             * Constructs a new QueryAllMarketRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllMarketRequest);

            /** QueryAllMarketRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified QueryAllMarketRequest message. Does not implicitly {@link ununifi.pricefeed.QueryAllMarketRequest.verify|verify} messages.
             * @param message QueryAllMarketRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllMarketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllMarketRequest message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllMarketRequest.verify|verify} messages.
             * @param message QueryAllMarketRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllMarketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllMarketRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllMarketRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllMarketRequest;

            /**
             * Decodes a QueryAllMarketRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllMarketRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllMarketRequest;

            /**
             * Verifies a QueryAllMarketRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllMarketRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllMarketRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllMarketRequest;

            /**
             * Creates a plain object from a QueryAllMarketRequest message. Also converts values to other types if specified.
             * @param message QueryAllMarketRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllMarketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllMarketRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllMarketResponse. */
        interface IQueryAllMarketResponse {

            /** QueryAllMarketResponse markets */
            markets?: (ununifi.pricefeed.IMarket[]|null);

            /** QueryAllMarketResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a QueryAllMarketResponse. */
        class QueryAllMarketResponse implements IQueryAllMarketResponse {

            /**
             * Constructs a new QueryAllMarketResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllMarketResponse);

            /** QueryAllMarketResponse markets. */
            public markets: ununifi.pricefeed.IMarket[];

            /** QueryAllMarketResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified QueryAllMarketResponse message. Does not implicitly {@link ununifi.pricefeed.QueryAllMarketResponse.verify|verify} messages.
             * @param message QueryAllMarketResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllMarketResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllMarketResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllMarketResponse.verify|verify} messages.
             * @param message QueryAllMarketResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllMarketResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllMarketResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllMarketResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllMarketResponse;

            /**
             * Decodes a QueryAllMarketResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllMarketResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllMarketResponse;

            /**
             * Verifies a QueryAllMarketResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllMarketResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllMarketResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllMarketResponse;

            /**
             * Creates a plain object from a QueryAllMarketResponse message. Also converts values to other types if specified.
             * @param message QueryAllMarketResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllMarketResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllMarketResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllOracleRequest. */
        interface IQueryAllOracleRequest {

            /** QueryAllOracleRequest market_id */
            market_id?: (string|null);

            /** QueryAllOracleRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a QueryAllOracleRequest. */
        class QueryAllOracleRequest implements IQueryAllOracleRequest {

            /**
             * Constructs a new QueryAllOracleRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllOracleRequest);

            /** QueryAllOracleRequest market_id. */
            public market_id: string;

            /** QueryAllOracleRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified QueryAllOracleRequest message. Does not implicitly {@link ununifi.pricefeed.QueryAllOracleRequest.verify|verify} messages.
             * @param message QueryAllOracleRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllOracleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllOracleRequest message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllOracleRequest.verify|verify} messages.
             * @param message QueryAllOracleRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllOracleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllOracleRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllOracleRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllOracleRequest;

            /**
             * Decodes a QueryAllOracleRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllOracleRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllOracleRequest;

            /**
             * Verifies a QueryAllOracleRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllOracleRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllOracleRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllOracleRequest;

            /**
             * Creates a plain object from a QueryAllOracleRequest message. Also converts values to other types if specified.
             * @param message QueryAllOracleRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllOracleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllOracleRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllOracleResponse. */
        interface IQueryAllOracleResponse {

            /** QueryAllOracleResponse oracles */
            oracles?: (string[]|null);

            /** QueryAllOracleResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a QueryAllOracleResponse. */
        class QueryAllOracleResponse implements IQueryAllOracleResponse {

            /**
             * Constructs a new QueryAllOracleResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllOracleResponse);

            /** QueryAllOracleResponse oracles. */
            public oracles: string[];

            /** QueryAllOracleResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified QueryAllOracleResponse message. Does not implicitly {@link ununifi.pricefeed.QueryAllOracleResponse.verify|verify} messages.
             * @param message QueryAllOracleResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllOracleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllOracleResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllOracleResponse.verify|verify} messages.
             * @param message QueryAllOracleResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllOracleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllOracleResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllOracleResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllOracleResponse;

            /**
             * Decodes a QueryAllOracleResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllOracleResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllOracleResponse;

            /**
             * Verifies a QueryAllOracleResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllOracleResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllOracleResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllOracleResponse;

            /**
             * Creates a plain object from a QueryAllOracleResponse message. Also converts values to other types if specified.
             * @param message QueryAllOracleResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllOracleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllOracleResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetPriceRequest. */
        interface IQueryGetPriceRequest {

            /** QueryGetPriceRequest market_id */
            market_id?: (string|null);
        }

        /** Represents a QueryGetPriceRequest. */
        class QueryGetPriceRequest implements IQueryGetPriceRequest {

            /**
             * Constructs a new QueryGetPriceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryGetPriceRequest);

            /** QueryGetPriceRequest market_id. */
            public market_id: string;

            /**
             * Encodes the specified QueryGetPriceRequest message. Does not implicitly {@link ununifi.pricefeed.QueryGetPriceRequest.verify|verify} messages.
             * @param message QueryGetPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryGetPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetPriceRequest message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryGetPriceRequest.verify|verify} messages.
             * @param message QueryGetPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryGetPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetPriceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryGetPriceRequest;

            /**
             * Decodes a QueryGetPriceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryGetPriceRequest;

            /**
             * Verifies a QueryGetPriceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetPriceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetPriceRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryGetPriceRequest;

            /**
             * Creates a plain object from a QueryGetPriceRequest message. Also converts values to other types if specified.
             * @param message QueryGetPriceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryGetPriceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetPriceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetPriceResponse. */
        interface IQueryGetPriceResponse {

            /** QueryGetPriceResponse price */
            price?: (ununifi.pricefeed.ICurrentPrice|null);
        }

        /** Represents a QueryGetPriceResponse. */
        class QueryGetPriceResponse implements IQueryGetPriceResponse {

            /**
             * Constructs a new QueryGetPriceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryGetPriceResponse);

            /** QueryGetPriceResponse price. */
            public price?: (ununifi.pricefeed.ICurrentPrice|null);

            /**
             * Encodes the specified QueryGetPriceResponse message. Does not implicitly {@link ununifi.pricefeed.QueryGetPriceResponse.verify|verify} messages.
             * @param message QueryGetPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryGetPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetPriceResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryGetPriceResponse.verify|verify} messages.
             * @param message QueryGetPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryGetPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetPriceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryGetPriceResponse;

            /**
             * Decodes a QueryGetPriceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryGetPriceResponse;

            /**
             * Verifies a QueryGetPriceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetPriceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetPriceResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryGetPriceResponse;

            /**
             * Creates a plain object from a QueryGetPriceResponse message. Also converts values to other types if specified.
             * @param message QueryGetPriceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryGetPriceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetPriceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllPriceRequest. */
        interface IQueryAllPriceRequest {

            /** QueryAllPriceRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a QueryAllPriceRequest. */
        class QueryAllPriceRequest implements IQueryAllPriceRequest {

            /**
             * Constructs a new QueryAllPriceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllPriceRequest);

            /** QueryAllPriceRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified QueryAllPriceRequest message. Does not implicitly {@link ununifi.pricefeed.QueryAllPriceRequest.verify|verify} messages.
             * @param message QueryAllPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllPriceRequest message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllPriceRequest.verify|verify} messages.
             * @param message QueryAllPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllPriceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllPriceRequest;

            /**
             * Decodes a QueryAllPriceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllPriceRequest;

            /**
             * Verifies a QueryAllPriceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllPriceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllPriceRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllPriceRequest;

            /**
             * Creates a plain object from a QueryAllPriceRequest message. Also converts values to other types if specified.
             * @param message QueryAllPriceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllPriceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllPriceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllPriceResponse. */
        interface IQueryAllPriceResponse {

            /** QueryAllPriceResponse prices */
            prices?: (ununifi.pricefeed.ICurrentPrice[]|null);

            /** QueryAllPriceResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a QueryAllPriceResponse. */
        class QueryAllPriceResponse implements IQueryAllPriceResponse {

            /**
             * Constructs a new QueryAllPriceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllPriceResponse);

            /** QueryAllPriceResponse prices. */
            public prices: ununifi.pricefeed.ICurrentPrice[];

            /** QueryAllPriceResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified QueryAllPriceResponse message. Does not implicitly {@link ununifi.pricefeed.QueryAllPriceResponse.verify|verify} messages.
             * @param message QueryAllPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllPriceResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllPriceResponse.verify|verify} messages.
             * @param message QueryAllPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllPriceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllPriceResponse;

            /**
             * Decodes a QueryAllPriceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllPriceResponse;

            /**
             * Verifies a QueryAllPriceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllPriceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllPriceResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllPriceResponse;

            /**
             * Creates a plain object from a QueryAllPriceResponse message. Also converts values to other types if specified.
             * @param message QueryAllPriceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllPriceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllPriceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllRawPriceRequest. */
        interface IQueryAllRawPriceRequest {

            /** QueryAllRawPriceRequest market_id */
            market_id?: (string|null);

            /** QueryAllRawPriceRequest pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
        }

        /** Represents a QueryAllRawPriceRequest. */
        class QueryAllRawPriceRequest implements IQueryAllRawPriceRequest {

            /**
             * Constructs a new QueryAllRawPriceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllRawPriceRequest);

            /** QueryAllRawPriceRequest market_id. */
            public market_id: string;

            /** QueryAllRawPriceRequest pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

            /**
             * Encodes the specified QueryAllRawPriceRequest message. Does not implicitly {@link ununifi.pricefeed.QueryAllRawPriceRequest.verify|verify} messages.
             * @param message QueryAllRawPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllRawPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllRawPriceRequest message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllRawPriceRequest.verify|verify} messages.
             * @param message QueryAllRawPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllRawPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllRawPriceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllRawPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllRawPriceRequest;

            /**
             * Decodes a QueryAllRawPriceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllRawPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllRawPriceRequest;

            /**
             * Verifies a QueryAllRawPriceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllRawPriceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllRawPriceRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllRawPriceRequest;

            /**
             * Creates a plain object from a QueryAllRawPriceRequest message. Also converts values to other types if specified.
             * @param message QueryAllRawPriceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllRawPriceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllRawPriceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAllRawPriceResponse. */
        interface IQueryAllRawPriceResponse {

            /** QueryAllRawPriceResponse prices */
            prices?: (ununifi.pricefeed.IPostedPrice[]|null);

            /** QueryAllRawPriceResponse pagination */
            pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
        }

        /** Represents a QueryAllRawPriceResponse. */
        class QueryAllRawPriceResponse implements IQueryAllRawPriceResponse {

            /**
             * Constructs a new QueryAllRawPriceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IQueryAllRawPriceResponse);

            /** QueryAllRawPriceResponse prices. */
            public prices: ununifi.pricefeed.IPostedPrice[];

            /** QueryAllRawPriceResponse pagination. */
            public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

            /**
             * Encodes the specified QueryAllRawPriceResponse message. Does not implicitly {@link ununifi.pricefeed.QueryAllRawPriceResponse.verify|verify} messages.
             * @param message QueryAllRawPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IQueryAllRawPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAllRawPriceResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.QueryAllRawPriceResponse.verify|verify} messages.
             * @param message QueryAllRawPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IQueryAllRawPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAllRawPriceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAllRawPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.QueryAllRawPriceResponse;

            /**
             * Decodes a QueryAllRawPriceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAllRawPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.QueryAllRawPriceResponse;

            /**
             * Verifies a QueryAllRawPriceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAllRawPriceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAllRawPriceResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.QueryAllRawPriceResponse;

            /**
             * Creates a plain object from a QueryAllRawPriceResponse message. Also converts values to other types if specified.
             * @param message QueryAllRawPriceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.QueryAllRawPriceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAllRawPriceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Market. */
        interface IMarket {

            /** Market market_id */
            market_id?: (string|null);

            /** Market base_asset */
            base_asset?: (string|null);

            /** Market quote_asset */
            quote_asset?: (string|null);

            /** Market oracles */
            oracles?: (string[]|null);

            /** Market active */
            active?: (boolean|null);
        }

        /** Represents a Market. */
        class Market implements IMarket {

            /**
             * Constructs a new Market.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IMarket);

            /** Market market_id. */
            public market_id: string;

            /** Market base_asset. */
            public base_asset: string;

            /** Market quote_asset. */
            public quote_asset: string;

            /** Market oracles. */
            public oracles: string[];

            /** Market active. */
            public active: boolean;

            /**
             * Encodes the specified Market message. Does not implicitly {@link ununifi.pricefeed.Market.verify|verify} messages.
             * @param message Market message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IMarket, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Market message, length delimited. Does not implicitly {@link ununifi.pricefeed.Market.verify|verify} messages.
             * @param message Market message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IMarket, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Market message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Market
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.Market;

            /**
             * Decodes a Market message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Market
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.Market;

            /**
             * Verifies a Market message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Market message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Market
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.Market;

            /**
             * Creates a plain object from a Market message. Also converts values to other types if specified.
             * @param message Market
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.Market, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Market to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CurrentPrice. */
        interface ICurrentPrice {

            /** CurrentPrice market_id */
            market_id?: (string|null);

            /** CurrentPrice price */
            price?: (string|null);
        }

        /** Represents a CurrentPrice. */
        class CurrentPrice implements ICurrentPrice {

            /**
             * Constructs a new CurrentPrice.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.ICurrentPrice);

            /** CurrentPrice market_id. */
            public market_id: string;

            /** CurrentPrice price. */
            public price: string;

            /**
             * Encodes the specified CurrentPrice message. Does not implicitly {@link ununifi.pricefeed.CurrentPrice.verify|verify} messages.
             * @param message CurrentPrice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.ICurrentPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CurrentPrice message, length delimited. Does not implicitly {@link ununifi.pricefeed.CurrentPrice.verify|verify} messages.
             * @param message CurrentPrice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.ICurrentPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CurrentPrice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CurrentPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.CurrentPrice;

            /**
             * Decodes a CurrentPrice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CurrentPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.CurrentPrice;

            /**
             * Verifies a CurrentPrice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CurrentPrice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CurrentPrice
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.CurrentPrice;

            /**
             * Creates a plain object from a CurrentPrice message. Also converts values to other types if specified.
             * @param message CurrentPrice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.CurrentPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CurrentPrice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PostedPrice. */
        interface IPostedPrice {

            /** PostedPrice market_id */
            market_id?: (string|null);

            /** PostedPrice oracle_address */
            oracle_address?: (string|null);

            /** PostedPrice price */
            price?: (string|null);

            /** PostedPrice expiry */
            expiry?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a PostedPrice. */
        class PostedPrice implements IPostedPrice {

            /**
             * Constructs a new PostedPrice.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IPostedPrice);

            /** PostedPrice market_id. */
            public market_id: string;

            /** PostedPrice oracle_address. */
            public oracle_address: string;

            /** PostedPrice price. */
            public price: string;

            /** PostedPrice expiry. */
            public expiry?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified PostedPrice message. Does not implicitly {@link ununifi.pricefeed.PostedPrice.verify|verify} messages.
             * @param message PostedPrice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IPostedPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PostedPrice message, length delimited. Does not implicitly {@link ununifi.pricefeed.PostedPrice.verify|verify} messages.
             * @param message PostedPrice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IPostedPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PostedPrice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PostedPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.PostedPrice;

            /**
             * Decodes a PostedPrice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PostedPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.PostedPrice;

            /**
             * Verifies a PostedPrice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PostedPrice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PostedPrice
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.PostedPrice;

            /**
             * Creates a plain object from a PostedPrice message. Also converts values to other types if specified.
             * @param message PostedPrice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.PostedPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PostedPrice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params markets */
            markets?: (ununifi.pricefeed.IMarket[]|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IParams);

            /** Params markets. */
            public markets: ununifi.pricefeed.IMarket[];

            /**
             * Encodes the specified Params message. Does not implicitly {@link ununifi.pricefeed.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link ununifi.pricefeed.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {

            /**
             * Constructs a new Msg service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls PostPrice.
             * @param request MsgPostPrice message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgPostPriceResponse
             */
            public postPrice(request: ununifi.pricefeed.IMsgPostPrice, callback: ununifi.pricefeed.Msg.PostPriceCallback): void;

            /**
             * Calls PostPrice.
             * @param request MsgPostPrice message or plain object
             * @returns Promise
             */
            public postPrice(request: ununifi.pricefeed.IMsgPostPrice): Promise<ununifi.pricefeed.MsgPostPriceResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link ununifi.pricefeed.Msg#postPrice}.
             * @param error Error, if any
             * @param [response] MsgPostPriceResponse
             */
            type PostPriceCallback = (error: (Error|null), response?: ununifi.pricefeed.MsgPostPriceResponse) => void;
        }

        /** Properties of a MsgPostPrice. */
        interface IMsgPostPrice {

            /** MsgPostPrice from */
            from?: (string|null);

            /** MsgPostPrice market_id */
            market_id?: (string|null);

            /** MsgPostPrice price */
            price?: (string|null);

            /** MsgPostPrice expiry */
            expiry?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a MsgPostPrice. */
        class MsgPostPrice implements IMsgPostPrice {

            /**
             * Constructs a new MsgPostPrice.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IMsgPostPrice);

            /** MsgPostPrice from. */
            public from: string;

            /** MsgPostPrice market_id. */
            public market_id: string;

            /** MsgPostPrice price. */
            public price: string;

            /** MsgPostPrice expiry. */
            public expiry?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified MsgPostPrice message. Does not implicitly {@link ununifi.pricefeed.MsgPostPrice.verify|verify} messages.
             * @param message MsgPostPrice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IMsgPostPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgPostPrice message, length delimited. Does not implicitly {@link ununifi.pricefeed.MsgPostPrice.verify|verify} messages.
             * @param message MsgPostPrice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IMsgPostPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgPostPrice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgPostPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.MsgPostPrice;

            /**
             * Decodes a MsgPostPrice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgPostPrice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.MsgPostPrice;

            /**
             * Verifies a MsgPostPrice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgPostPrice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgPostPrice
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.MsgPostPrice;

            /**
             * Creates a plain object from a MsgPostPrice message. Also converts values to other types if specified.
             * @param message MsgPostPrice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.MsgPostPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgPostPrice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgPostPriceResponse. */
        interface IMsgPostPriceResponse {
        }

        /** Represents a MsgPostPriceResponse. */
        class MsgPostPriceResponse implements IMsgPostPriceResponse {

            /**
             * Constructs a new MsgPostPriceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IMsgPostPriceResponse);

            /**
             * Encodes the specified MsgPostPriceResponse message. Does not implicitly {@link ununifi.pricefeed.MsgPostPriceResponse.verify|verify} messages.
             * @param message MsgPostPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IMsgPostPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgPostPriceResponse message, length delimited. Does not implicitly {@link ununifi.pricefeed.MsgPostPriceResponse.verify|verify} messages.
             * @param message MsgPostPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IMsgPostPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgPostPriceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgPostPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.MsgPostPriceResponse;

            /**
             * Decodes a MsgPostPriceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgPostPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.MsgPostPriceResponse;

            /**
             * Verifies a MsgPostPriceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgPostPriceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgPostPriceResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.MsgPostPriceResponse;

            /**
             * Creates a plain object from a MsgPostPriceResponse message. Also converts values to other types if specified.
             * @param message MsgPostPriceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.MsgPostPriceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgPostPriceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (ununifi.pricefeed.IParams|null);

            /** GenesisState posted_prices */
            posted_prices?: (ununifi.pricefeed.IPostedPrice[]|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.pricefeed.IGenesisState);

            /** GenesisState params. */
            public params?: (ununifi.pricefeed.IParams|null);

            /** GenesisState posted_prices. */
            public posted_prices: ununifi.pricefeed.IPostedPrice[];

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link ununifi.pricefeed.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.pricefeed.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link ununifi.pricefeed.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.pricefeed.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.pricefeed.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.pricefeed.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): ununifi.pricefeed.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.pricefeed.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace ununifidist. */
    namespace ununifidist {

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: ununifi.ununifidist.IQueryParamsRequest, callback: ununifi.ununifidist.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: ununifi.ununifidist.IQueryParamsRequest): Promise<ununifi.ununifidist.QueryParamsResponse>;

            /**
             * Calls Balances.
             * @param request QueryGetBalancesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryGetBalancesResponse
             */
            public balances(request: ununifi.ununifidist.IQueryGetBalancesRequest, callback: ununifi.ununifidist.Query.BalancesCallback): void;

            /**
             * Calls Balances.
             * @param request QueryGetBalancesRequest message or plain object
             * @returns Promise
             */
            public balances(request: ununifi.ununifidist.IQueryGetBalancesRequest): Promise<ununifi.ununifidist.QueryGetBalancesResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link ununifi.ununifidist.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: ununifi.ununifidist.QueryParamsResponse) => void;

            /**
             * Callback as used by {@link ununifi.ununifidist.Query#balances}.
             * @param error Error, if any
             * @param [response] QueryGetBalancesResponse
             */
            type BalancesCallback = (error: (Error|null), response?: ununifi.ununifidist.QueryGetBalancesResponse) => void;
        }

        /** Properties of a QueryParamsRequest. */
        interface IQueryParamsRequest {
        }

        /** Represents a QueryParamsRequest. */
        class QueryParamsRequest implements IQueryParamsRequest {

            /**
             * Constructs a new QueryParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IQueryParamsRequest);

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link ununifi.ununifidist.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link ununifi.ununifidist.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.QueryParamsRequest;

            /**
             * Verifies a QueryParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (ununifi.ununifidist.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (ununifi.ununifidist.IParams|null);

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link ununifi.ununifidist.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link ununifi.ununifidist.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.QueryParamsResponse;

            /**
             * Verifies a QueryParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetBalancesRequest. */
        interface IQueryGetBalancesRequest {
        }

        /** Represents a QueryGetBalancesRequest. */
        class QueryGetBalancesRequest implements IQueryGetBalancesRequest {

            /**
             * Constructs a new QueryGetBalancesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IQueryGetBalancesRequest);

            /**
             * Encodes the specified QueryGetBalancesRequest message. Does not implicitly {@link ununifi.ununifidist.QueryGetBalancesRequest.verify|verify} messages.
             * @param message QueryGetBalancesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IQueryGetBalancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetBalancesRequest message, length delimited. Does not implicitly {@link ununifi.ununifidist.QueryGetBalancesRequest.verify|verify} messages.
             * @param message QueryGetBalancesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IQueryGetBalancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetBalancesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetBalancesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.QueryGetBalancesRequest;

            /**
             * Decodes a QueryGetBalancesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetBalancesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.QueryGetBalancesRequest;

            /**
             * Verifies a QueryGetBalancesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetBalancesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetBalancesRequest
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.QueryGetBalancesRequest;

            /**
             * Creates a plain object from a QueryGetBalancesRequest message. Also converts values to other types if specified.
             * @param message QueryGetBalancesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.QueryGetBalancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetBalancesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryGetBalancesResponse. */
        interface IQueryGetBalancesResponse {

            /** QueryGetBalancesResponse balances */
            balances?: (cosmos.base.v1beta1.ICoin[]|null);
        }

        /** Represents a QueryGetBalancesResponse. */
        class QueryGetBalancesResponse implements IQueryGetBalancesResponse {

            /**
             * Constructs a new QueryGetBalancesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IQueryGetBalancesResponse);

            /** QueryGetBalancesResponse balances. */
            public balances: cosmos.base.v1beta1.ICoin[];

            /**
             * Encodes the specified QueryGetBalancesResponse message. Does not implicitly {@link ununifi.ununifidist.QueryGetBalancesResponse.verify|verify} messages.
             * @param message QueryGetBalancesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IQueryGetBalancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryGetBalancesResponse message, length delimited. Does not implicitly {@link ununifi.ununifidist.QueryGetBalancesResponse.verify|verify} messages.
             * @param message QueryGetBalancesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IQueryGetBalancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryGetBalancesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryGetBalancesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.QueryGetBalancesResponse;

            /**
             * Decodes a QueryGetBalancesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryGetBalancesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.QueryGetBalancesResponse;

            /**
             * Verifies a QueryGetBalancesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryGetBalancesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryGetBalancesResponse
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.QueryGetBalancesResponse;

            /**
             * Creates a plain object from a QueryGetBalancesResponse message. Also converts values to other types if specified.
             * @param message QueryGetBalancesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.QueryGetBalancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryGetBalancesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params active */
            active?: (boolean|null);

            /** Params periods */
            periods?: (ununifi.ununifidist.IPeriod[]|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IParams);

            /** Params active. */
            public active: boolean;

            /** Params periods. */
            public periods: ununifi.ununifidist.IPeriod[];

            /**
             * Encodes the specified Params message. Does not implicitly {@link ununifi.ununifidist.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link ununifi.ununifidist.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Period. */
        interface IPeriod {

            /** Period start */
            start?: (google.protobuf.ITimestamp|null);

            /** Period end */
            end?: (google.protobuf.ITimestamp|null);

            /** Period inflation */
            inflation?: (string|null);
        }

        /** Represents a Period. */
        class Period implements IPeriod {

            /**
             * Constructs a new Period.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IPeriod);

            /** Period start. */
            public start?: (google.protobuf.ITimestamp|null);

            /** Period end. */
            public end?: (google.protobuf.ITimestamp|null);

            /** Period inflation. */
            public inflation: string;

            /**
             * Encodes the specified Period message. Does not implicitly {@link ununifi.ununifidist.Period.verify|verify} messages.
             * @param message Period message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Period message, length delimited. Does not implicitly {@link ununifi.ununifidist.Period.verify|verify} messages.
             * @param message Period message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Period message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Period
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.Period;

            /**
             * Decodes a Period message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Period
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.Period;

            /**
             * Verifies a Period message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Period message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Period
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.Period;

            /**
             * Creates a plain object from a Period message. Also converts values to other types if specified.
             * @param message Period
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.Period, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Period to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (ununifi.ununifidist.IParams|null);

            /** GenesisState previous_block_time */
            previous_block_time?: (google.protobuf.ITimestamp|null);

            /** GenesisState gov_denom */
            gov_denom?: (string|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: ununifi.ununifidist.IGenesisState);

            /** GenesisState params. */
            public params?: (ununifi.ununifidist.IParams|null);

            /** GenesisState previous_block_time. */
            public previous_block_time?: (google.protobuf.ITimestamp|null);

            /** GenesisState gov_denom. */
            public gov_denom: string;

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link ununifi.ununifidist.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ununifi.ununifidist.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link ununifi.ununifidist.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ununifi.ununifidist.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ununifi.ununifidist.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ununifi.ununifidist.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): ununifi.ununifidist.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ununifi.ununifidist.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace query. */
        namespace query {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a PageRequest. */
                interface IPageRequest {

                    /** PageRequest key */
                    key?: (Uint8Array|null);

                    /** PageRequest offset */
                    offset?: (Long|null);

                    /** PageRequest limit */
                    limit?: (Long|null);

                    /** PageRequest count_total */
                    count_total?: (boolean|null);
                }

                /** Represents a PageRequest. */
                class PageRequest implements IPageRequest {

                    /**
                     * Constructs a new PageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageRequest);

                    /** PageRequest key. */
                    public key: Uint8Array;

                    /** PageRequest offset. */
                    public offset: Long;

                    /** PageRequest limit. */
                    public limit: Long;

                    /** PageRequest count_total. */
                    public count_total: boolean;

                    /**
                     * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Verifies a PageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
                     * @param message PageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PageResponse. */
                interface IPageResponse {

                    /** PageResponse next_key */
                    next_key?: (Uint8Array|null);

                    /** PageResponse total */
                    total?: (Long|null);
                }

                /** Represents a PageResponse. */
                class PageResponse implements IPageResponse {

                    /**
                     * Constructs a new PageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageResponse);

                    /** PageResponse next_key. */
                    public next_key: Uint8Array;

                    /** PageResponse total. */
                    public total: Long;

                    /**
                     * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Verifies a PageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
                     * @param message PageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Coin. */
            interface ICoin {

                /** Coin denom */
                denom?: (string|null);

                /** Coin amount */
                amount?: (string|null);
            }

            /** Represents a Coin. */
            class Coin implements ICoin {

                /**
                 * Constructs a new Coin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.Coin;

                /**
                 * Decodes a Coin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.Coin;

                /**
                 * Verifies a Coin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Coin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Coin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.Coin;

                /**
                 * Creates a plain object from a Coin message. Also converts values to other types if specified.
                 * @param message Coin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Coin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {

                /** DecCoin denom */
                denom?: (string|null);

                /** DecCoin amount */
                amount?: (string|null);
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {

                /**
                 * Constructs a new DecCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecCoin;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecCoin;

                /**
                 * Verifies a DecCoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecCoin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecCoin;

                /**
                 * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
                 * @param message DecCoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecCoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntProto. */
            interface IIntProto {

                /** IntProto int */
                int?: (string|null);
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {

                /**
                 * Constructs a new IntProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.IntProto;

                /**
                 * Decodes an IntProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.IntProto;

                /**
                 * Verifies an IntProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.IntProto;

                /**
                 * Creates a plain object from an IntProto message. Also converts values to other types if specified.
                 * @param message IntProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.IntProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecProto. */
            interface IDecProto {

                /** DecProto dec */
                dec?: (string|null);
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {

                /**
                 * Constructs a new DecProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecProto;

                /**
                 * Decodes a DecProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecProto;

                /**
                 * Verifies a DecProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecProto;

                /**
                 * Creates a plain object from a DecProto message. Also converts values to other types if specified.
                 * @param message DecProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fully_decode_reserved_expansion */
            fully_decode_reserved_expansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fully_decode_reserved_expansion. */
            public fully_decode_reserved_expansion: boolean;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule response_body */
            response_body?: (string|null);

            /** HttpRule additional_bindings */
            additional_bindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule response_body. */
            public response_body: string;

            /** HttpRule additional_bindings. */
            public additional_bindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goproto_getters_all */
            ".gogoproto.goproto_getters_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_prefix_all */
            ".gogoproto.goproto_enum_prefix_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_stringer_all */
            ".gogoproto.goproto_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.verbose_equal_all */
            ".gogoproto.verbose_equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.face_all */
            ".gogoproto.face_all"?: (boolean|null);

            /** FileOptions .gogoproto.gostring_all */
            ".gogoproto.gostring_all"?: (boolean|null);

            /** FileOptions .gogoproto.populate_all */
            ".gogoproto.populate_all"?: (boolean|null);

            /** FileOptions .gogoproto.stringer_all */
            ".gogoproto.stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.onlyone_all */
            ".gogoproto.onlyone_all"?: (boolean|null);

            /** FileOptions .gogoproto.equal_all */
            ".gogoproto.equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.description_all */
            ".gogoproto.description_all"?: (boolean|null);

            /** FileOptions .gogoproto.testgen_all */
            ".gogoproto.testgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.benchgen_all */
            ".gogoproto.benchgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.marshaler_all */
            ".gogoproto.marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshaler_all */
            ".gogoproto.unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.stable_marshaler_all */
            ".gogoproto.stable_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.sizer_all */
            ".gogoproto.sizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_stringer_all */
            ".gogoproto.goproto_enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.enum_stringer_all */
            ".gogoproto.enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_marshaler_all */
            ".gogoproto.unsafe_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_unmarshaler_all */
            ".gogoproto.unsafe_unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_extensions_map_all */
            ".gogoproto.goproto_extensions_map_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unrecognized_all */
            ".gogoproto.goproto_unrecognized_all"?: (boolean|null);

            /** FileOptions .gogoproto.gogoproto_import */
            ".gogoproto.gogoproto_import"?: (boolean|null);

            /** FileOptions .gogoproto.protosizer_all */
            ".gogoproto.protosizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.compare_all */
            ".gogoproto.compare_all"?: (boolean|null);

            /** FileOptions .gogoproto.typedecl_all */
            ".gogoproto.typedecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.enumdecl_all */
            ".gogoproto.enumdecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_registration */
            ".gogoproto.goproto_registration"?: (boolean|null);

            /** FileOptions .gogoproto.messagename_all */
            ".gogoproto.messagename_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_sizecache_all */
            ".gogoproto.goproto_sizecache_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unkeyed_all */
            ".gogoproto.goproto_unkeyed_all"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .cosmos_proto.interface_type */
            ".cosmos_proto.interface_type"?: (string|null);

            /** MessageOptions .cosmos_proto.implements_interface */
            ".cosmos_proto.implements_interface"?: (string|null);

            /** MessageOptions .gogoproto.goproto_getters */
            ".gogoproto.goproto_getters"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_stringer */
            ".gogoproto.goproto_stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verbose_equal */
            ".gogoproto.verbose_equal"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stable_marshaler */
            ".gogoproto.stable_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_marshaler */
            ".gogoproto.unsafe_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_unmarshaler */
            ".gogoproto.unsafe_unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_extensions_map */
            ".gogoproto.goproto_extensions_map"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unrecognized */
            ".gogoproto.goproto_unrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_sizecache */
            ".gogoproto.goproto_sizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unkeyed */
            ".gogoproto.goproto_unkeyed"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .cosmos_proto.accepts_interface */
            ".cosmos_proto.accepts_interface"?: (string|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goproto_enum_prefix */
            ".gogoproto.goproto_enum_prefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goproto_enum_stringer */
            ".gogoproto.goproto_enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_stringer */
            ".gogoproto.enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_customname */
            ".gogoproto.enum_customname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalue_customname */
            ".gogoproto.enumvalue_customname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: Long;

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: Long;

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: Long;

            /** Duration nanos. */
            public nanos: number;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
