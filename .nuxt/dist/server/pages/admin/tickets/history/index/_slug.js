
exports.ids = [12];
exports.modules = {

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(288);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("07a0de2b", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_234633ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_234633ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_234633ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_234633ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_234633ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".left[data-v-234633ed]{border-bottom-right-radius:150px}.left[data-v-234633ed],.right[data-v-234633ed]{border-top-right-radius:150px;border-top-left-radius:150px}.right[data-v-234633ed]{border-bottom-left-radius:150px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/tickets/history/index/_slug.vue?vue&type=template&id=234633ed&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "w-100 h-100 d-flex flex-column justify-content-between"
  }, [_vm._ssrNode("<div class=\"py-3 px-4 border-md-bottom border-lg-bottom d-flex justify-content-between\" data-v-234633ed><div class=\"d-flex align-items-center\" data-v-234633ed><img" + _vm._ssrAttr("src", __webpack_require__(6)) + " alt class=\"border-circle\" style=\"width: 50px\" data-v-234633ed> <div class=\"flex flex-column ms-3 ms-md-5 ms-lg-5\" data-v-234633ed><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$route.params.slug) + "\n        ") + "</p> <p class=\"mb-0 mt-2\" style=\"color: #43425d; font-size: 13px\" data-v-234633ed>\n          #52d45as\n        </p></div> <div class=\"d-none d-md-flex d-lg-flex align-items-center ms-5\" data-v-234633ed><div data-v-234633ed><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n            Subjet:\n          </p> <p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n            Department:\n          </p> <p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n            Priority:\n          </p></div> <div class=\"ms-4\" data-v-234633ed><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n            Error Chat\n          </p> <p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n            Salse Suport\n          </p> <p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n            High\n          </p></div></div></div> <div class=\"d-none d-md-flex d-lg-flex align-items-center\" data-v-234633ed><div class=\"me-md-5 me-lg-5\" data-v-234633ed><button class=\"border-0 px-4 py-2 text-white rounded-1\" style=\"background-color: #a7afb7\" data-v-234633ed>\n          close\n        </button> <button class=\"border-0 px-4 py-2 text-white rounded-1\" style=\"background-color: #e99d7b\" data-v-234633ed>\n          Answer\n        </button></div> <div class=\"d-flex\" data-v-234633ed><button class=\"border-0 bg-transparent\" data-v-234633ed><i class=\"bi bi-x-lg fs-4\" data-v-234633ed></i></button></div></div> <div class=\"d-flex flex-column d-md-none d-lg-none\" data-v-234633ed><button class=\"border-0 py-2 text-white rounded-1\" style=\"background-color: #a7afb7; width: 100px\" data-v-234633ed>\n        close\n      </button> <button class=\"border-0 mt-1 py-2 text-white rounded-1\" style=\"background-color: #e99d7b; width: 100px\" data-v-234633ed>\n        Answer\n      </button></div></div> <div class=\"d-flex justify-content-center d-md-none d-lg-none mt-3\" data-v-234633ed><div class=\"d-flex px-4 py-3 border rounded-4\" data-v-234633ed><div data-v-234633ed><p class=\"mb-0 mt-1\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n          Subjet:\n        </p> <p class=\"mb-0 mt-1\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n          Department:\n        </p> <p class=\"mb-0 mt-1\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n          Priority:\n        </p></div> <div class=\"ms-4\" data-v-234633ed><p class=\"mb-0 mt-1\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n          Error Chat\n        </p> <p class=\"mb-0 mt-1\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n          Salse Suport\n        </p> <p class=\"mb-0 mt-1\" style=\"color: #4d4f5c; font-size: 13px; font-weight: 600\" data-v-234633ed>\n          High\n        </p></div></div></div> <div class=\"py-5 h-100 w-100 px-4\" data-v-234633ed><div class=\"d-flex w-100 flex-column align-items-start\" data-v-234633ed><div class=\"py-3 px-3 left\" style=\"background-color: #edf0f5; width: fit-content\" data-v-234633ed><p class=\"mb-0\" data-v-234633ed>Hi Jack, how can I help you?</p></div> <p class=\"mb-0 mt-2\" style=\"color: #4d4f5c; font-size: 12px\" data-v-234633ed>\n        10:24 Am\n      </p></div> <div class=\"w-100 d-flex flex-column align-items-end mt-4\" data-v-234633ed><div class=\"py-3 px-3 right\" style=\"background-color: #65a79f; width: fit-content\" data-v-234633ed><p class=\"mb-0 text-white\" data-v-234633ed>\n          Hey , I have a question regarding my acccount. Do you have time for\n          a call?\n        </p></div> <p class=\"mb-0 mt-2\" style=\"color: #4d4f5c; font-size: 12px\" data-v-234633ed>\n        10:24 Am\n      </p></div></div> <div class=\"w-100 d-flex align-items-center py-3 px-3\" data-v-234633ed><div class=\"w-100 d-flex justify-content-between px-4 py-3 rounded-1\" style=\"background-color: #f5f6fa\" data-v-234633ed><input type=\"text\" placeholder=\"Type your Message here ....\" class=\"border-0 bg-transparent\" style=\"outline: none; font-size: 12px\" data-v-234633ed> <div class=\"d-flex align-items-center\" data-v-234633ed><i class=\"bi bi-link-45deg\" data-v-234633ed></i> <i class=\"bi bi-film mx-2\" data-v-234633ed></i> <i class=\"bi bi-emoji-smile\" data-v-234633ed></i></div></div> <button class=\"border-0 rounded-circle mx-2\" style=\"background-color: #e99d7b; width: 45px; height: 45px\" data-v-234633ed><i class=\"bi bi-send text-white fs-5\" data-v-234633ed></i></button></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/tickets/history/index/_slug.vue?vue&type=template&id=234633ed&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/tickets/history/index/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/admin/tickets/history/index/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/tickets/history/index/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(287)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "234633ed",
  "8710f1b8"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map