"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlPattern = require("url-pattern");
const getPathPattern_1 = require("../utils/getPathPattern");
const DEFAULT_PATH_PATTERN = '/:locale/:slug';
function getTaxonPagesDefinitions(pluginPage, taxons) {
    return taxons.map((taxon) => {
        const path = getPathPattern_1.getPathPattern(pluginPage.path, taxon.locale, DEFAULT_PATH_PATTERN);
        const pattern = new UrlPattern(path);
        return {
            path: pattern.stringify(taxon),
            component: pluginPage.component,
            context: {
                code: taxon.code,
                taxon,
            },
        };
    });
}
exports.getTaxonPagesDefinitions = getTaxonPagesDefinitions;
//# sourceMappingURL=getTaxonPagesDefinitions.js.map