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
const LatestProductsProvider_1 = require("./providers/LatestProductsProvider");
const getLocalizedCollections_1 = require("./getLocalizedCollections");
function getAllLatestProducts(url, locales) {
    return __awaiter(this, void 0, void 0, function* () {
        const latestsProductsProvider = new LatestProductsProvider_1.LatestProductsProvider({ url });
        return getLocalizedCollections_1.getLocalizedCollections(latestsProductsProvider, locales);
    });
}
exports.getAllLatestProducts = getAllLatestProducts;
//# sourceMappingURL=getAllLatestProducts.js.map