"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RestClient_1 = require("typed-rest-client/RestClient");
const getPackageName_1 = require("../../utils/getPackageName");
const getPackageVersion_1 = require("../../utils/getPackageVersion");
const userAgent = `${getPackageName_1.getPackageName()}-${getPackageVersion_1.getPackageVersion()}`;
class RestDataProvider {
    constructor({ resourceName, url }) {
        this.resourceName = resourceName;
        this.url = url;
        this.client = new RestClient_1.RestClient(userAgent);
    }
    getRecords(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.getResourceUrl();
            const response = yield this.client.get(url, options);
            return response.result;
        });
    }
    getRecord(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.getSingleResourcePath(id);
            const response = yield this.client.get(url, options);
            return response.result;
        });
    }
    getSingleResourcePath(id) {
        return `${this.getResourceUrl()}/${id}`;
    }
    getResourceUrl() {
        return `${this.url}/${this.resourceName}`;
    }
}
exports.RestDataProvider = RestDataProvider;
//# sourceMappingURL=RestDataProvider.js.map