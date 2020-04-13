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
const getAllLatestProducts_1 = require("./data/getAllLatestProducts");
const getAllTaxons_1 = require("./data/getAllTaxons");
const createLinkedNodes_1 = require("./nodes/createLinkedNodes");
const getProductNodes_1 = require("./nodes/getProductNodes");
const getTaxonNodes_1 = require("./nodes/getTaxonNodes");
const getDefaultOptions_1 = require("./options/getDefaultOptions");
const reportDebug_1 = require("./utils/reportDebug");
function sourceNodes(args, pluginOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = getDefaultOptions_1.getDefaultOptions(pluginOptions);
        const { reporter, } = args;
        reportDebug_1.reportDebug(reporter, options, '------------');
        reportDebug_1.reportDebug(reporter, options, 'Source nodes');
        reportDebug_1.reportDebug(reporter, options, '------------');
        yield sourceTaxons(args, options);
        yield sourceProducts(args, options);
    });
}
exports.sourceNodes = sourceNodes;
function sourceProducts({ actions, cache, createNodeId, createContentDigest, getCache, reporter, store, }, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { locales, url } = options;
        const { createNode } = actions;
        if (!url) {
            throw new Error('Missing `url` param!');
        }
        reportDebug_1.reportDebug(reporter, options, 'Source products');
        reportDebug_1.reportDebug(reporter, options, '------------');
        return Promise.resolve()
            .then(() => getAllLatestProducts_1.getAllLatestProducts(url, locales))
            .then((localizedProducts) => {
            if (!localizedProducts.length) {
                reportDebug_1.report(reporter, 'No products has been found!', 'warn');
                return Promise.resolve();
            }
            const productsPromises = [];
            localizedProducts.forEach(({ collection: products, locale }) => {
                reportDebug_1.reportDebug(reporter, options, `Source products - ${locale} (${products.length})`);
                const productPromise = Promise.resolve()
                    .then(() => getProductNodes_1.getProductNodes(products, locale, createNodeId, createContentDigest, {
                    cache,
                    createNode,
                    getCache,
                    reporter,
                    store,
                }))
                    .then((productNodes) => {
                    const productNodesPromises = [];
                    productNodes.forEach((node) => {
                        const imagesNodesPromises = [];
                        node.images.forEach((imageNode) => {
                            imagesNodesPromises.push(Promise.resolve()
                                .then(() => createNode(imageNode)));
                        });
                        productNodesPromises.push(Promise
                            .all(imagesNodesPromises)
                            .then(() => createNode(node)));
                    });
                    return Promise.all(productNodesPromises)
                        .then(() => reportDebug_1.reportDebug(reporter, options, 'Locale products sourced'));
                });
                productsPromises.push(productPromise);
            });
            return Promise.all(productsPromises)
                .then(() => reportDebug_1.reportDebug(reporter, options, 'Products sourced'));
        });
    });
}
function sourceTaxons({ actions, createNodeId, createContentDigest, reporter, }, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { locales, url } = options;
        const { createNode, createParentChildLink } = actions;
        if (!url) {
            throw new Error('Missing `url` param!');
        }
        reportDebug_1.reportDebug(reporter, options, 'Source taxons');
        reportDebug_1.reportDebug(reporter, options, '------------');
        return Promise.resolve()
            .then(() => getAllTaxons_1.getAllTaxons(url, locales))
            .then((localizedTaxons) => {
            if (!localizedTaxons.length) {
                reportDebug_1.report(reporter, 'No taxons has been found!', 'warn');
                return Promise.resolve();
            }
            const taxonsPromises = [];
            localizedTaxons.forEach(({ collection: taxons, locale }) => {
                const taxonNodes = getTaxonNodes_1.getTaxonNodes(taxons, locale, createNodeId, createContentDigest);
                taxonsPromises.push(createLinkedNodes_1.createLinkedNodes(taxonNodes, createNode, createParentChildLink));
            });
            return Promise.all(taxonsPromises)
                .then(() => {
                reportDebug_1.reportDebug(reporter, options, 'Taxons sourced');
                reportDebug_1.reportDebug(reporter, options, '------------');
            });
        });
    });
}
//# sourceMappingURL=sourceNodes.js.map