"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getValueFromJson_1 = require("./getValueFromJson");
function getPackageVersion(path = path_1.resolve(__dirname, '../../', 'package.json')) {
    return getValueFromJson_1.getValueFromJson('version', path, undefined);
}
exports.getPackageVersion = getPackageVersion;
//# sourceMappingURL=getPackageVersion.js.map