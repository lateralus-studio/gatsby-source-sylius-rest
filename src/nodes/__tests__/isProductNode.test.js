"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isProductNode_1 = require("../isProductNode");
describe('isProductNode', () => {
    describe('when ProductNode is provided', () => {
        it('should return true', () => {
            // having
            const node = {
                channelCode: 'channel',
                code: 'code',
                id: 'id',
                images: [],
                internal: {
                    type: 'SyliusProduct',
                    contentDigest: '',
                },
                locale: 'pl',
                name: 'name',
                slug: 'slug',
                taxons: {
                    main: 'taxon',
                    others: [],
                },
                variants: [],
            };
            // when
            // then
            expect(isProductNode_1.isProductNode(node)).toEqual(true);
        });
    });
    describe('when another node is provided', () => {
        it('should return false', () => {
            // having
            const node = {
                id: 'id',
                internal: {
                    type: 'SomeNode',
                    contentDigest: '',
                },
            };
            // when
            // then
            expect(isProductNode_1.isProductNode(node)).toEqual(false);
        });
    });
});
//# sourceMappingURL=isProductNode.test.js.map