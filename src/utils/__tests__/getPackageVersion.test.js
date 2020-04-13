"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getPackageVersion_1 = require("../getPackageVersion");
describe('getPackageVersion', () => {
    describe('when path to package.json is provided', () => {
        describe('and it has version defined', () => {
            it('should return package version from it', () => {
                // having
                const path = path_1.resolve(__dirname, '../__fixtures__/package.json');
                // when
                // then
                expect(getPackageVersion_1.getPackageVersion(path)).toEqual('1.0.1');
            });
        });
        describe('and it has not version defined', () => {
            it('should return undefined', () => {
                // having
                const path = path_1.resolve(__dirname, '../__fixtures__/packageWithoutVersion.json');
                // when
                // then
                expect(getPackageVersion_1.getPackageVersion(path)).toEqual(undefined);
            });
        });
    });
    describe('when corrupted package.json is provided', () => {
        it('should return undefined', () => {
            // having
            const path = path_1.resolve(__dirname, '../__fixtures__/corrupted.json');
            // when
            // then
            expect(getPackageVersion_1.getPackageVersion(path)).toEqual(undefined);
        });
    });
});
//# sourceMappingURL=getPackageVersion.test.js.map