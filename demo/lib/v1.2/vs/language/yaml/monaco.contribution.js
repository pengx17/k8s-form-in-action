/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-yaml version: 2.1.0(a478bef722e29f5d9cef95e221926d63e8e14f91)
 * Released under the MIT license
 * https://github.com/kpdecker/monaco-yaml/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/yaml/monaco.contribution",["require","exports"],e)}(function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=monaco.Emitter,o=function(){function e(e,n){this._onDidChange=new t,this._languageId=e,this.setDiagnosticsOptions(n)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!0,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e}();n.LanguageServiceDefaultsImpl=o;var a=new o("yaml",{validate:!0,schemas:[],enableSchemaRequest:!1});monaco.languages.yaml={yamlDefaults:a},monaco.languages.register({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml"]}),monaco.languages.onLanguage("yaml",function(){e(["vs/language/yaml/yamlMode"],function(e){return e.setupMode(a)})})});