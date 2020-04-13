"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function getValueFromJson(property, path = path_1.resolve(__dirname, '../../', 'package.json'), defaultValue) {
    const content = fs_1.readFileSync(path).toString();
    try {
        const packageJson = JSON.parse(content);
        return packageJson[property] || defaultValue;
    }
    catch (e) {
        return defaultValue;
    }
}
exports.getValueFromJson = getValueFromJson;
//# sourceMappingURL=getValueFromJson.js.map