"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productVariantSchema = {
    name: 'SyliusProductVariant',
    fields: {
        axis: '[String]!',
        code: 'String!',
        // images: 'SyliusImage[]',
        name: 'String',
        nameAxis: 'JSON!',
        originalPrice: 'SyliusProductPrice!',
        price: 'SyliusProductPrice!',
    },
};
//# sourceMappingURL=ProductVariant.js.map