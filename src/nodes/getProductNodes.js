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
const gatsby_source_filesystem_1 = require("gatsby-source-filesystem");
const lodash_1 = require("lodash");
function getProductNodes(products, locale, createNodeId, createContentDigest, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(products.map((product) => {
            return getProductNode(product, locale, createNodeId, createContentDigest, options);
        }));
    });
}
exports.getProductNodes = getProductNodes;
function getProductNode(product, locale, createNodeId, createContentDigest, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cache, createNode, getCache, store, reporter, } = options;
        const content = JSON.stringify(product);
        const id = createNodeId(`product-${locale}-${product.code}`);
        const images = yield Promise.all(product.images.map((image) => __awaiter(this, void 0, void 0, function* () {
            const imageId = createNodeId(`image-${image.path}`);
            const imageContent = JSON.stringify(image);
            const fileNode = yield gatsby_source_filesystem_1.createRemoteFileNode({
                cache,
                getCache,
                createNode,
                createNodeId,
                parentNodeId: imageId,
                store,
                url: image.path,
                reporter,
            });
            return Object.assign(Object.assign({}, image), { file: fileNode, id: imageId, productSlug: product.slug, internal: {
                    type: 'SyliusImage',
                    content: imageContent,
                    contentDigest: createContentDigest(imageContent),
                } });
        })));
        return Object.assign(Object.assign({}, product), { locale,
            id, variants: lodash_1.values(product.variants), images, internal: {
                type: 'SyliusProduct',
                content,
                contentDigest: createContentDigest(content),
            } });
    });
}
//# sourceMappingURL=getProductNodes.js.map