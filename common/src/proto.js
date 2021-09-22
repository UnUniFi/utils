/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const main = $root.main = (() => {

    /**
     * Namespace main.
     * @exports main
     * @namespace
     */
    const main = {};

    main.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof main
         * @interface IAccount
         * @property {string|null} [id] Account id
         * @property {Array.<string>|null} [user_ids] Account user_ids
         * @property {Array.<string>|null} [admin_user_ids] Account admin_user_ids
         * @property {string|null} [name] Account name
         * @property {string|null} [image_url] Account image_url
         * @property {google.protobuf.ITimestamp|null} [created_at] Account created_at
         * @property {google.protobuf.ITimestamp|null} [updated_at] Account updated_at
         */

        /**
         * Constructs a new Account.
         * @memberof main
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {main.IAccount=} [properties] Properties to set
         */
        function Account(properties) {
            this.user_ids = [];
            this.admin_user_ids = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Account id.
         * @member {string} id
         * @memberof main.Account
         * @instance
         */
        Account.prototype.id = "";

        /**
         * Account user_ids.
         * @member {Array.<string>} user_ids
         * @memberof main.Account
         * @instance
         */
        Account.prototype.user_ids = $util.emptyArray;

        /**
         * Account admin_user_ids.
         * @member {Array.<string>} admin_user_ids
         * @memberof main.Account
         * @instance
         */
        Account.prototype.admin_user_ids = $util.emptyArray;

        /**
         * Account name.
         * @member {string} name
         * @memberof main.Account
         * @instance
         */
        Account.prototype.name = "";

        /**
         * Account image_url.
         * @member {string} image_url
         * @memberof main.Account
         * @instance
         */
        Account.prototype.image_url = "";

        /**
         * Account created_at.
         * @member {google.protobuf.ITimestamp|null|undefined} created_at
         * @memberof main.Account
         * @instance
         */
        Account.prototype.created_at = null;

        /**
         * Account updated_at.
         * @member {google.protobuf.ITimestamp|null|undefined} updated_at
         * @memberof main.Account
         * @instance
         */
        Account.prototype.updated_at = null;

        /**
         * Encodes the specified Account message. Does not implicitly {@link main.Account.verify|verify} messages.
         * @function encode
         * @memberof main.Account
         * @static
         * @param {main.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.user_ids != null && message.user_ids.length)
                for (let i = 0; i < message.user_ids.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_ids[i]);
            if (message.admin_user_ids != null && message.admin_user_ids.length)
                for (let i = 0; i < message.admin_user_ids.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.admin_user_ids[i]);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.image_url != null && Object.hasOwnProperty.call(message, "image_url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.image_url);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link main.Account.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.Account
         * @static
         * @param {main.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @function decode
         * @memberof main.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.Account();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    if (!(message.user_ids && message.user_ids.length))
                        message.user_ids = [];
                    message.user_ids.push(reader.string());
                    break;
                case 3:
                    if (!(message.admin_user_ids && message.admin_user_ids.length))
                        message.admin_user_ids = [];
                    message.admin_user_ids.push(reader.string());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.image_url = reader.string();
                    break;
                case 6:
                    message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Account message.
         * @function verify
         * @memberof main.Account
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.user_ids != null && message.hasOwnProperty("user_ids")) {
                if (!Array.isArray(message.user_ids))
                    return "user_ids: array expected";
                for (let i = 0; i < message.user_ids.length; ++i)
                    if (!$util.isString(message.user_ids[i]))
                        return "user_ids: string[] expected";
            }
            if (message.admin_user_ids != null && message.hasOwnProperty("admin_user_ids")) {
                if (!Array.isArray(message.admin_user_ids))
                    return "admin_user_ids: array expected";
                for (let i = 0; i < message.admin_user_ids.length; ++i)
                    if (!$util.isString(message.admin_user_ids[i]))
                        return "admin_user_ids: string[] expected";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                if (!$util.isString(message.image_url))
                    return "image_url: string expected";
            if (message.created_at != null && message.hasOwnProperty("created_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                if (error)
                    return "created_at." + error;
            }
            if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                if (error)
                    return "updated_at." + error;
            }
            return null;
        };

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.Account
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.Account} Account
         */
        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.main.Account)
                return object;
            let message = new $root.main.Account();
            if (object.id != null)
                message.id = String(object.id);
            if (object.user_ids) {
                if (!Array.isArray(object.user_ids))
                    throw TypeError(".main.Account.user_ids: array expected");
                message.user_ids = [];
                for (let i = 0; i < object.user_ids.length; ++i)
                    message.user_ids[i] = String(object.user_ids[i]);
            }
            if (object.admin_user_ids) {
                if (!Array.isArray(object.admin_user_ids))
                    throw TypeError(".main.Account.admin_user_ids: array expected");
                message.admin_user_ids = [];
                for (let i = 0; i < object.admin_user_ids.length; ++i)
                    message.admin_user_ids[i] = String(object.admin_user_ids[i]);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.image_url != null)
                message.image_url = String(object.image_url);
            if (object.created_at != null) {
                if (typeof object.created_at !== "object")
                    throw TypeError(".main.Account.created_at: object expected");
                message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
            }
            if (object.updated_at != null) {
                if (typeof object.updated_at !== "object")
                    throw TypeError(".main.Account.updated_at: object expected");
                message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
            }
            return message;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.Account
         * @static
         * @param {main.Account} message Account
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.user_ids = [];
                object.admin_user_ids = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.image_url = "";
                object.created_at = null;
                object.updated_at = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.user_ids && message.user_ids.length) {
                object.user_ids = [];
                for (let j = 0; j < message.user_ids.length; ++j)
                    object.user_ids[j] = message.user_ids[j];
            }
            if (message.admin_user_ids && message.admin_user_ids.length) {
                object.admin_user_ids = [];
                for (let j = 0; j < message.admin_user_ids.length; ++j)
                    object.admin_user_ids[j] = message.admin_user_ids[j];
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                object.image_url = message.image_url;
            if (message.created_at != null && message.hasOwnProperty("created_at"))
                object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
            if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
            return object;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof main.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    main.User = (function() {

        /**
         * Properties of a User.
         * @memberof main
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [current_account_id] User current_account_id
         * @property {Array.<string>|null} [account_ids_order] User account_ids_order
         * @property {google.protobuf.ITimestamp|null} [created_at] User created_at
         * @property {google.protobuf.ITimestamp|null} [updated_at] User updated_at
         * @property {boolean|null} [is_admin] User is_admin
         */

        /**
         * Constructs a new User.
         * @memberof main
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {main.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.account_ids_order = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof main.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User current_account_id.
         * @member {string} current_account_id
         * @memberof main.User
         * @instance
         */
        User.prototype.current_account_id = "";

        /**
         * User account_ids_order.
         * @member {Array.<string>} account_ids_order
         * @memberof main.User
         * @instance
         */
        User.prototype.account_ids_order = $util.emptyArray;

        /**
         * User created_at.
         * @member {google.protobuf.ITimestamp|null|undefined} created_at
         * @memberof main.User
         * @instance
         */
        User.prototype.created_at = null;

        /**
         * User updated_at.
         * @member {google.protobuf.ITimestamp|null|undefined} updated_at
         * @memberof main.User
         * @instance
         */
        User.prototype.updated_at = null;

        /**
         * User is_admin.
         * @member {boolean} is_admin
         * @memberof main.User
         * @instance
         */
        User.prototype.is_admin = false;

        /**
         * Encodes the specified User message. Does not implicitly {@link main.User.verify|verify} messages.
         * @function encode
         * @memberof main.User
         * @static
         * @param {main.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.current_account_id != null && Object.hasOwnProperty.call(message, "current_account_id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.current_account_id);
            if (message.account_ids_order != null && message.account_ids_order.length)
                for (let i = 0; i < message.account_ids_order.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_ids_order[i]);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.is_admin != null && Object.hasOwnProperty.call(message, "is_admin"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_admin);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link main.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof main.User
         * @static
         * @param {main.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof main.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {main.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.main.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.current_account_id = reader.string();
                    break;
                case 3:
                    if (!(message.account_ids_order && message.account_ids_order.length))
                        message.account_ids_order = [];
                    message.account_ids_order.push(reader.string());
                    break;
                case 4:
                    message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.is_admin = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof main.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {main.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof main.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.current_account_id != null && message.hasOwnProperty("current_account_id"))
                if (!$util.isString(message.current_account_id))
                    return "current_account_id: string expected";
            if (message.account_ids_order != null && message.hasOwnProperty("account_ids_order")) {
                if (!Array.isArray(message.account_ids_order))
                    return "account_ids_order: array expected";
                for (let i = 0; i < message.account_ids_order.length; ++i)
                    if (!$util.isString(message.account_ids_order[i]))
                        return "account_ids_order: string[] expected";
            }
            if (message.created_at != null && message.hasOwnProperty("created_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                if (error)
                    return "created_at." + error;
            }
            if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                if (error)
                    return "updated_at." + error;
            }
            if (message.is_admin != null && message.hasOwnProperty("is_admin"))
                if (typeof message.is_admin !== "boolean")
                    return "is_admin: boolean expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof main.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {main.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.main.User)
                return object;
            let message = new $root.main.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.current_account_id != null)
                message.current_account_id = String(object.current_account_id);
            if (object.account_ids_order) {
                if (!Array.isArray(object.account_ids_order))
                    throw TypeError(".main.User.account_ids_order: array expected");
                message.account_ids_order = [];
                for (let i = 0; i < object.account_ids_order.length; ++i)
                    message.account_ids_order[i] = String(object.account_ids_order[i]);
            }
            if (object.created_at != null) {
                if (typeof object.created_at !== "object")
                    throw TypeError(".main.User.created_at: object expected");
                message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
            }
            if (object.updated_at != null) {
                if (typeof object.updated_at !== "object")
                    throw TypeError(".main.User.updated_at: object expected");
                message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
            }
            if (object.is_admin != null)
                message.is_admin = Boolean(object.is_admin);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof main.User
         * @static
         * @param {main.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.account_ids_order = [];
            if (options.defaults) {
                object.id = "";
                object.current_account_id = "";
                object.created_at = null;
                object.updated_at = null;
                object.is_admin = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.current_account_id != null && message.hasOwnProperty("current_account_id"))
                object.current_account_id = message.current_account_id;
            if (message.account_ids_order && message.account_ids_order.length) {
                object.account_ids_order = [];
                for (let j = 0; j < message.account_ids_order.length; ++j)
                    object.account_ids_order[j] = message.account_ids_order[j];
            }
            if (message.created_at != null && message.hasOwnProperty("created_at"))
                object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
            if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
            if (message.is_admin != null && message.hasOwnProperty("is_admin"))
                object.is_admin = message.is_admin;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof main.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return main;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
