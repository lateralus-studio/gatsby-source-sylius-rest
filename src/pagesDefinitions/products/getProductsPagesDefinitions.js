"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlPattern = require("url-pattern");
const getPathPattern_1 = require("../utils/getPathPattern");
const DEFAULT_PATH_PATTERN = '/:locale/:slug';
function getProductsPagesDefinitions(pluginPage, products) {
    return products.map((product) => {
        const path = getPathPattern_1.getPathPattern(pluginPage.path, product.locale, DEFAULT_PATH_PATTERN);
        const pattern = new UrlPattern(path);
        return {
            path: pattern.stringify(product),
            component: pluginPage.component,
            context: {
                code: product.code,
                product,
            },
        };
    });
}
exports.getProductsPagesDefinitions = getProductsPagesDefinitions;
//# sourceMappingURL=getProductsPagesDefinitions.js.map