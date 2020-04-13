"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reportDebug(reporter, options, message, type = 'info') {
    if (!options.debug) {
        return;
    }
    report(reporter, message, type);
}
exports.reportDebug = reportDebug;
function report(reporter, message, type = 'info') {
    reporter[type](`[sylius-rest] ${message}`);
}
exports.report = report;
//# sourceMappingURL=reportDebug.js.map