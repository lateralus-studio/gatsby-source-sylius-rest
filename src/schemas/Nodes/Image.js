"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSchema = {
    name: 'SyliusImage',
    fields: {
        path: 'String!',
        code: 'String!',
        file: 'File!',
        productSlug: 'String',
    },
    interfaces: [
        'Node',
    ],
    extensions: {
        infer: false,
    },
};
//# sourceMappingURL=Image.js.map