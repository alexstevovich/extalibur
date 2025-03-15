/* *******************************************************
 * extalibur
 *
 * @license
 *
 * Apache-2.0
 *
 * Copyright 2016-2025 Alex Stevovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @meta
 *
 * package_name: extalibur
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-15T04:31:35.645Z
 * certified_version: 1.0.0
 * file_uuid: 6b22dba6-ec7e-45b6-8b27-18e60a382f1b
 * file_size: 2423 bytes
 * file_hash: a8a81930e8310c366c87865fc89f2669e22b6597843dcd30c50049fa7288dbcd
 * mast_hash: f758250101a03712b4a130bbfd0e3892754ea3aeff9a3caa764e794cc3c5bc85
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
import path from 'path';

/**
 * Modifies the file extension of the given file path.
 *
 * @param {string} file - The file path to modify.
 * @param {string | null} ext - The new extension to set.
 *     - Pass a string (e.g., `".md"`) to change the extension.
 *     - Pass `null` to remove the extension.
 * @returns {string} The file path with the updated extension.
 */
export function setExt(file, ext) {
    if (typeof file !== 'string' || !file.trim()) {
        throw new TypeError('File path must be a non-empty string.');
    }

    const normalizedPath = path.normalize(file); // Normalize for cross-platform consistency
    const isDirectory = normalizedPath.endsWith(path.sep); // Detect if it's a directory

    if (isDirectory) {
        return normalizedPath; // If it's a directory, return it unchanged.
    }

    const dirname = path.dirname(normalizedPath);
    const basename = path.basename(
        normalizedPath,
        path.extname(normalizedPath),
    );

    const updatedPath = path.join(
        dirname,
        ext ? `${basename}${ext}` : basename,
    );

    return path.normalize(updatedPath); // Normalize again for Windows/Linux consistency
}

export default setExt;
