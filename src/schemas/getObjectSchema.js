"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getObjectSchema(schema, fields) {
    const schemaFields = typeof schema.fields === 'undefined' ? {} : schema.fields;
    return Object.assign(Object.assign({}, schema), { fields: Object.assign(Object.assign({}, schemaFields), fields) });
}
exports.getObjectSchema = getObjectSchema;
//# sourceMappingURL=getObjectSchema.js.map