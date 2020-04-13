"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDefaultOptions_1 = require("../getDefaultOptions");
describe('getDefaultOptions', () => {
    describe('when empty options object is provided', () => {
        it('should return object filled with default options', () => {
            // having
            const options = {
                plugins: [],
            };
            // when
            const newOptions = getDefaultOptions_1.getDefaultOptions(options);
            // then
            expect(newOptions).toEqual(getDefaultOptions_1.defaultOptions);
        });
    });
    describe('when partial schemas are given', () => {
        it('should return other schemas as empty object', () => {
            // having
            const options = {
                plugins: [],
                schemas: {
                    image: {
                        imageField: 'String!',
                    },
                    product: {
                        productField: 'String!',
                    },
                    productPrice: {
                        productPriceField: 'String!',
                    },
                },
            };
            // when
            const newOptions = getDefaultOptions_1.getDefaultOptions(options);
            // then
            expect(newOptions).toEqual(Object.assign(Object.assign({}, getDefaultOptions_1.defaultOptions), { schemas: {
                    image: {
                        imageField: 'String!',
                    },
                    product: {
                        productField: 'String!',
                    },
                    productPrice: {
                        productPriceField: 'String!',
                    },
                    productTaxons: {},
                    productVariant: {},
                    taxon: {},
                } }));
        });
    });
});
//# sourceMappingURL=getDefaultOptions.test.js.map