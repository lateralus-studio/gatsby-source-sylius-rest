"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = {
    debug: false,
    locales: [],
    pages: [],
    plugins: [],
    schemas: {
        image: {},
        product: {},
        productPrice: {},
        productTaxons: {},
        productVariant: {},
        taxon: {},
    },
};
function getDefaultOptions(options) {
    return Object.assign(Object.assign(Object.assign({}, exports.defaultOptions), options), { schemas: Object.assign(Object.assign({}, exports.defaultOptions.schemas), options.schemas) });
}
exports.getDefaultOptions = getDefaultOptions;
//# sourceMappingURL=getDefaultOptions.js.map