"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPathPattern(path, locale, defaultPattern) {
    if (!path) {
        return defaultPattern;
    }
    if (typeof path === 'string') {
        return path;
    }
    return path[locale] || defaultPattern;
}
exports.getPathPattern = getPathPattern;
//# sourceMappingURL=getPathPattern.js.map