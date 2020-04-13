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
const RestDataProvider_1 = require("./RestDataProvider");
class LatestProductsProvider extends RestDataProvider_1.RestDataProvider {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { resourceName: 'product-latest' }));
    }
    getRecords(options) {
        const _super = Object.create(null, {
            getRecords: { get: () => super.getRecords }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const defaultQueryParams = {
                limit: 10000,
            };
            const requestOptions = Object.assign(Object.assign({}, options), { responseProcessor: this.processResponse.bind(this), queryParameters: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.queryParameters), { params: Object.assign(Object.assign({}, defaultQueryParams), (_a = options === null || options === void 0 ? void 0 : options.queryParameters) === null || _a === void 0 ? void 0 : _a.params) }) });
            return _super.getRecords.call(this, requestOptions);
        });
    }
    // eslint-disable-next-line class-methods-use-this
    processResponse(response) {
        return response.items;
    }
}
exports.LatestProductsProvider = LatestProductsProvider;
//# sourceMappingURL=LatestProductsProvider.js.map