"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getObjectSchema_1 = require("../getObjectSchema");
describe('getObjectSchema', () => {
    let baseSchema;
    beforeEach(() => {
        // having
        baseSchema = {
            name: 'SyliusProductPrice',
            fields: {
                current: 'Int!',
                currency: 'String!',
            },
        };
    });
    describe('when fields is an empty object', () => {
        let fields;
        beforeEach(() => {
            // having
            fields = {};
        });
        it('should not return object same as base schema', () => {
            // when
            // then
            expect(getObjectSchema_1.getObjectSchema(baseSchema, fields)).toEqual(baseSchema);
        });
        it('should not mutate base schema', () => {
            // when
            // then
            expect(getObjectSchema_1.getObjectSchema(baseSchema, fields)).not.toBe(baseSchema);
        });
    });
    describe('when fields are overriden', () => {
        let fields;
        beforeEach(() => {
            // having
            fields = {
                current: 'String!',
            };
        });
        it('should return updated schema', () => {
            // having
            const expectedSchema = {
                name: 'SyliusProductPrice',
                fields: {
                    current: 'String!',
                    currency: 'String!',
                },
            };
            // when
            // then
            expect(getObjectSchema_1.getObjectSchema(baseSchema, fields)).toEqual(expectedSchema);
        });
        it('should not mutate base schema', () => {
            // when
            // then
            expect(getObjectSchema_1.getObjectSchema(baseSchema, fields)).not.toBe(baseSchema);
        });
    });
    describe('when new fields are added', () => {
        let fields;
        beforeEach(() => {
            // having
            fields = {
                newField: 'String!',
            };
        });
        it('should return updated schema', () => {
            // having
            const expectedSchema = {
                name: 'SyliusProductPrice',
                fields: {
                    current: 'Int!',
                    currency: 'String!',
                    newField: 'String!',
                },
            };
            // when
            // then
            expect(getObjectSchema_1.getObjectSchema(baseSchema, fields)).toEqual(expectedSchema);
        });
        it('should not mutate base schema', () => {
            // when
            // then
            expect(getObjectSchema_1.getObjectSchema(baseSchema, fields)).not.toBe(baseSchema);
        });
    });
});
//# sourceMappingURL=getObjectSchema.test.js.map