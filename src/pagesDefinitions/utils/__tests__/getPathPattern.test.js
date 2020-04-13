"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPathPattern_1 = require("../getPathPattern");
describe('getPathPattern', () => {
    describe('when path is undefined', () => {
        it('should return default path', () => {
            // having
            const locale = 'pl';
            const defaultPattern = 'default';
            // when
            const resolvedPath = getPathPattern_1.getPathPattern(undefined, locale, defaultPattern);
            // then
            expect(resolvedPath).toEqual(defaultPattern);
        });
    });
    describe('when string path is provided', () => {
        it('should return it', () => {
            // having
            const path = 'some-path';
            const locale = 'pl';
            const defaultPattern = 'default';
            // when
            const resolvedPath = getPathPattern_1.getPathPattern(path, locale, defaultPattern);
            // then
            expect(resolvedPath).toEqual(path);
        });
    });
    describe('when object with paths is provided', () => {
        const path = {
            pl: 'pl-path',
        };
        const defaultPattern = 'default';
        describe('and path is defined for given locale', () => {
            it('should return it', () => {
                // having
                const locale = 'pl';
                // when
                const resolvedPath = getPathPattern_1.getPathPattern(path, locale, defaultPattern);
                // then
                expect(resolvedPath).toEqual('pl-path');
            });
        });
        describe('and path is not defined for given locale', () => {
            it('should return default path', () => {
                // having
                const locale = 'en';
                // when
                const resolvedPath = getPathPattern_1.getPathPattern(path, locale, defaultPattern);
                // then
                expect(resolvedPath).toEqual('default');
            });
        });
    });
});
//# sourceMappingURL=getPathPattern.test.js.map