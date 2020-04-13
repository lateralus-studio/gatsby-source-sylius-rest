"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plugin_1 = require("../schemas/Plugin");
const getProductsPagesDefinitions_1 = require("./products/getProductsPagesDefinitions");
const getTaxonPagesDefinitions_1 = require("./taxons/getTaxonPagesDefinitions");
function getPagesForPluginPageDefinition(pluginPage, data) {
    switch (pluginPage.type) {
        case Plugin_1.SyliusSourcePluginPagesType.TAXON: {
            return getTaxonPagesDefinitions_1.getTaxonPagesDefinitions(pluginPage, data.taxons);
        }
        case Plugin_1.SyliusSourcePluginPagesType.PRODUCT: {
            return getProductsPagesDefinitions_1.getProductsPagesDefinitions(pluginPage, data.products);
        }
        default: {
            return [];
        }
    }
}
exports.getPagesForPluginPageDefinition = getPagesForPluginPageDefinition;
//# sourceMappingURL=getPagesForPluginPageDefinition.js.map