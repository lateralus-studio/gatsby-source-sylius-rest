"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getPackageName_1 = require("../getPackageName");
describe('getPackageName', () => {
    it('should return this package name', () => {
        // when
        // then
        expect(getPackageName_1.getPackageName()).toEqual('gatsby-source-sylius-rest');
    });
    describe('when path to package.json is provided', () => {
        describe('and it has name defined', () => {
            it('should return package name from it', () => {
                // having
                const path = path_1.resolve(__dirname, '../__fixtures__/package.json');
                // when
                // then
                expect(getPackageName_1.getPackageName(path)).toEqual('foo-package');
            });
        });
        describe('and it has not name defined', () => {
            it('should return default package name', () => {
                // having
                const path = path_1.resolve(__dirname, '../__fixtures__/packageWithoutName.json');
                // when
                // then
                expect(getPackageName_1.getPackageName(path)).toEqual('gatsby-source-sylius-rest');
            });
        });
    });
    describe('when corrupted package.json is provided', () => {
        it('should return default package name', () => {
            // having
            const path = path_1.resolve(__dirname, '../__fixtures__/corrupted.json');
            // when
            // then
            expect(getPackageName_1.getPackageName(path)).toEqual('gatsby-source-sylius-rest');
        });
    });
});
//# sourceMappingURL=getPackageName.test.js.map