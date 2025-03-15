import { describe, it, expect } from 'vitest';
import setExt from '../src/index.js';
import path from 'path';

describe('setExt() function tests', () => {
    it('Changes file extension correctly', () => {
        expect(setExt('./path/to/file.txt', '.md')).toEqual(
            path.normalize('./path/to/file.md'),
        );
    });

    it('Removes file extension when null is passed', () => {
        expect(setExt('./path/to/file.txt', null)).toEqual(
            path.normalize('./path/to/file'),
        );
    });

    it('Handles files with multiple dots in the name', () => {
        expect(setExt('./path/to/file.backup.txt', '.log')).toEqual(
            path.normalize('./path/to/file.backup.log'),
        );
    });

    it('Handles files with no extensions', () => {
        expect(setExt('./path/to/file', '.json')).toEqual(
            path.normalize('./path/to/file.json'),
        );
    });

    it('Returns directory unchanged when given a directory path', () => {
        expect(setExt('./some/directory/', '.json')).toEqual(
            path.normalize('./some/directory/'),
        );
        expect(setExt('C:\\SomePath\\Documents\\', '.txt')).toEqual(
            path.normalize('C:\\SomePath\\Documents\\'),
        );
    });

    it('Handles absolute paths', () => {
        expect(setExt('/absolute/path/to/file.txt', '.yaml')).toEqual(
            path.normalize('/absolute/path/to/file.yaml'),
        );
    });

    it('Throws error for empty filename', () => {
        expect(() => setExt('', '.md')).toThrow(TypeError);
    });

    it('Throws error for non-string inputs', () => {
        expect(() => setExt(null, '.json')).toThrow(TypeError);
        expect(() => setExt(undefined, '.json')).toThrow(TypeError);
        expect(() => setExt(42, '.json')).toThrow(TypeError);
        expect(() => setExt({}, '.json')).toThrow(TypeError);
    });

    it('Handles Windows paths correctly', () => {
        const winPath = 'C:\\SomePath\\file.txt';
        expect(setExt(winPath, '.log')).toEqual(
            path.normalize('C:\\SomePath\\file.log'),
        );
    });
});
