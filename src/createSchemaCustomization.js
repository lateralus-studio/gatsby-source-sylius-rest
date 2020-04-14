"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDefaultOptions_1 = require("./options/getDefaultOptions");
const Attribute_1 = require("./schemas/Nodes/Attribute");
const Image_1 = require("./schemas/Nodes/Image");
const Product_1 = require("./schemas/Nodes/Product");
const ProductPrice_1 = require("./schemas/Nodes/ProductPrice");
const ProductTaxons_1 = require("./schemas/Nodes/ProductTaxons");
const ProductVariant_1 = require("./schemas/Nodes/ProductVariant");
const Taxon_1 = require("./schemas/Nodes/Taxon");
const reportDebug_1 = require("./utils/reportDebug");
const getObjectSchema_1 = require("./schemas/getObjectSchema");
function createSchemaCustomization({ actions: { createTypes }, reporter, schema }, pluginOptions) {
    const options = getDefaultOptions_1.getDefaultOptions(pluginOptions);
    reportDebug_1.reportDebug(reporter, options, 'createSchemaCustomization');
    createTypes([
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(ProductPrice_1.productPriceSchema, options.schemas.productPrice)),
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(ProductVariant_1.productVariantSchema, options.schemas.productVariant)),
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(ProductTaxons_1.productTaxonsSchema, options.schemas.productTaxons)),
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(Attribute_1.attributeSchema, options.schemas.product)),
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(Image_1.imageSchema, options.schemas.image)),
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(Taxon_1.taxonSchema, options.schemas.taxon)),
        schema.buildObjectType(getObjectSchema_1.getObjectSchema(Product_1.productSchema, options.schemas.product)),
    ]);
}
exports.createSchemaCustomization = createSchemaCustomization;
//# sourceMappingURL=createSchemaCustomization.js.map