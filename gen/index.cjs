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
 * file_name: gen/index.cjs
 * purpose: Core functionality and exports combined.
 *  
 * @system
 *
 * generated_on: 2025-03-15T04:31:39.692Z
 * certified_version: 1.0.0
 * file_uuid: 6b22dba6-ec7e-45b6-8b27-18e60a382f1b
 * file_size: 3659 bytes
 * file_hash: bf1a5ef1e7762e6ad98534b7f7d782f83f98b4960d1882f8877808da09daaf2c
 * mast_hash: ff388199deb6c2b8ec36126364190f5d7a3f6932e8533ec6ab026de0607c19ed
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  setExt: () => setExt
});
module.exports = __toCommonJS(index_exports);
var import_path = __toESM(require("path"), 1);

function setExt(file, ext) {
  if (typeof file !== "string" || !file.trim()) {
    throw new TypeError("File path must be a non-empty string.");
  }
  const normalizedPath = import_path.default.normalize(file);
  const isDirectory = normalizedPath.endsWith(import_path.default.sep);
  if (isDirectory) {
    return normalizedPath;
  }
  const dirname = import_path.default.dirname(normalizedPath);
  const basename = import_path.default.basename(
    normalizedPath,
    import_path.default.extname(normalizedPath)
  );
  const updatedPath = import_path.default.join(
    dirname,
    ext ? `${basename}${ext}` : basename
  );
  return import_path.default.normalize(updatedPath);
}
var index_default = setExt;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setExt
});
