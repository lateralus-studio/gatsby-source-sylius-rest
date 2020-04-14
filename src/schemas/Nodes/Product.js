"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = {
    name: 'SyliusProduct',
    fields: {
        attributes: '[SyliusAttribute]',
        averageRating: 'Float',
        channelCode: 'String!',
        code: 'String!',
        description: 'String',
        images: '[SyliusImage]',
        locale: 'String!',
        metaKeywords: 'String',
        metaDescription: 'String',
        name: 'String!',
        shortDescription: 'String',
        slug: 'String!',
        taxons: 'SyliusProductTaxons',
        variants: '[SyliusProductVariant]',
    },
    interfaces: [
        'Node',
    ],
    extensions: {
        infer: false,
    },
};
//# sourceMappingURL=Product.js.map