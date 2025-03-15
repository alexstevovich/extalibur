declare module 'extalibur' {
    /**
     * Modifies the file extension of the given file path.
     *
     * @param file - The file path to modify.
     * @param ext - The new extension to set, including the dot (e.g., ".md").
     *              Pass `null` to remove the extension.
     * @returns The file path with the updated extension.
     *
     * @example
     * ```ts
     * import setExt from 'extalibur';
     *
     * const filePath = './path/to/memoires.txt';
     * console.log(setExt(filePath, '.md')); // "./path/to/memoires.md"
     * console.log(setExt(filePath, null));  // "./path/to/memoires"
     * ```
     */
    export function setExt(file: string, ext: string | null): string;

    /** Default export */
    const _default: typeof setExt;
    export default _default;
}
