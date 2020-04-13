"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getValueFromJson_1 = require("./getValueFromJson");
const DEFAULT_NAME = 'gatsby-source-sylius-rest';
function getPackageName(path = path_1.resolve(__dirname, '../../', 'package.json')) {
    return getValueFromJson_1.getValueFromJson('name', path, DEFAULT_NAME);
}
exports.getPackageName = getPackageName;
//# sourceMappingURL=getPackageName.js.map