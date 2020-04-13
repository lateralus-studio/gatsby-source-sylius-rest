"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestDataProvider_1 = require("./RestDataProvider");
class TaxonsProvider extends RestDataProvider_1.RestDataProvider {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { resourceName: 'taxons' }));
    }
}
exports.TaxonsProvider = TaxonsProvider;
//# sourceMappingURL=TaxonsProvider.js.map