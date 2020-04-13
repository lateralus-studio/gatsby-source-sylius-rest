"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taxonSchema = {
    name: 'SyliusTaxon',
    fields: {
        code: 'String!',
        description: 'String',
        images: '[SyliusImage]',
        locale: 'String!',
        name: 'String!',
        position: 'Int!',
        slug: 'String!',
    },
    interfaces: [
        'Node',
    ],
    extensions: {
        childOf: {
            types: ['SyliusTaxon'],
        },
        infer: false,
    },
};
//# sourceMappingURL=Taxon.js.map