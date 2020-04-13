"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isImageNode_1 = require("../isImageNode");
describe('isImageNode', () => {
    describe('when ImageNode is provided', () => {
        it('should return true', () => {
            // having
            const node = {
                path: 'some_path.jpg',
                file: {},
                id: 'id',
                internal: {
                    type: 'SyliusImage',
                    contentDigest: '',
                },
            };
            // when
            // then
            expect(isImageNode_1.isImageNode(node)).toEqual(true);
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
            expect(isImageNode_1.isImageNode(node)).toEqual(false);
        });
    });
});
//# sourceMappingURL=isImageNode.test.js.map