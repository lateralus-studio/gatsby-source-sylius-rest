"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPagesForPluginPageDefinition_1 = require("./getPagesForPluginPageDefinition");
function getPagesDefinitions(pluginPages, data) {
    return pluginPages.reduce((allPages, pluginPage) => {
        const pages = getPagesForPluginPageDefinition_1.getPagesForPluginPageDefinition(pluginPage, data);
        return [
            ...allPages,
            ...pages,
        ];
    }, []);
}
exports.getPagesDefinitions = getPagesDefinitions;
//# sourceMappingURL=getPagesDefinitions.js.map