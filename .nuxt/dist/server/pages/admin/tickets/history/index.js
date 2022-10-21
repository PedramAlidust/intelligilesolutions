
exports.ids = [11];
exports.modules = {

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("22ef50fc", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_84a80568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_84a80568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_84a80568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_84a80568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_84a80568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".user[data-v-84a80568]:active{background-color:#cecfd0}.DetailBtn[data-v-84a80568]{background-color:#e99d7b;color:#231942;font-family:Source Sans Pro,sans-serif;font-size:10pt;padding:5px 25px;text-transform:capitalize}.DetailBtn[data-v-84a80568]:focus{box-shadow:none}.page-link[data-v-84a80568]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-84a80568]:focus{background-color:#055452;color:#fff;box-shadow:none}.SortStatus[data-v-84a80568]{color:#828282;font-family:Open Sans;font-size:10pt;font-weight:400}.TableBkg[data-v-84a80568]{min-height:80vh}.nav-link[data-v-84a80568],.TableBkg[data-v-84a80568]{background-color:#fff}.nav-link[data-v-84a80568]{font-family:Source Sans Pro,sans-serif;color:#9296ad;font-size:10pt}.nav-link.active[data-v-84a80568]{background-color:#055452;color:#fff!important;border-radius:8px;font-weight:600}.nav-tabs[data-v-84a80568]{border-bottom:0;display:flex;justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/tickets/history/index.vue?vue&type=template&id=84a80568&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"container-full mt-4 px-4 d-none d-md-block d-lg-block\" data-v-84a80568><ul id=\"ex1\" role=\"tablist\" class=\"nav nav-tabs mb-3\" data-v-84a80568><li role=\"presentation\" class=\"nav-item\" data-v-84a80568><a id=\"ex1-tab-1\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-1\" role=\"tab\" aria-controls=\"ex1-tabs-1\" aria-selected=\"true\" class=\"nav-link px-3\" data-v-84a80568>New Ticket</a></li> <li role=\"presentation\" class=\"nav-item\" data-v-84a80568><a id=\"ex1-tab-2\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-2\" role=\"tab\" aria-controls=\"ex1-tabs-2\" aria-selected=\"false\" class=\"nav-link px-3\" data-v-84a80568>Current Ticket</a></li> <li role=\"presentation\" class=\"nav-item\" data-v-84a80568><a id=\"ex1-tab-3\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-3\" role=\"tab\" aria-controls=\"ex1-tabs-3\" aria-selected=\"false\" class=\"nav-link active px-3\" data-v-84a80568>History</a></li></ul></div> <div class=\"bg-white px-4 py-2 d-flex d-md-none d-lg-none justify-content-between align-items-center\" data-v-84a80568><div class=\"d-flex align-items-center\" data-v-84a80568><i class=\"bi bi-chevron-left\" data-v-84a80568></i> <p class=\"mb-0 ms-2\" data-v-84a80568>Back</p></div> <div data-v-84a80568><i class=\"bi bi-search\" style=\"color: #bcbcbc\" data-v-84a80568></i></div></div> "), _vm._ssrNode("<div class=\"d-flex flex-column flex-md-row flex-lg-row bg-white rounded-1\" style=\"height: 80vh\" data-v-84a80568>", "</div>", [_vm._ssrNode("<div class=\"w-25 d-none d-md-flex d-lg-flex flex-column border-end\" data-v-84a80568><div class=\"w-100 px-4 py-3\" data-v-84a80568><i class=\"bi bi-search\" style=\"color: #bcbccb\" data-v-84a80568></i> <input type=\"text\" placeholder=\"search Message ...\" class=\"border-0 ms-2\" style=\"color: #bcbccb; outline: none\" data-v-84a80568></div> <div class=\"mt-4 w-100\" data-v-84a80568><div class=\"px-4 py-2 user d-flex justify-content-between\" data-v-84a80568><div class=\"d-flex align-items-center\" data-v-84a80568><img" + _vm._ssrAttr("src", __webpack_require__(6)) + " alt class=\"border-circle\" style=\"width: 50px\" data-v-84a80568> <div class=\"flex flex-column ms-3\" data-v-84a80568><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px\" data-v-84a80568>\n                Jack Dorsi\n              </p> <p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px\" data-v-84a80568>\n                Hello,I have a question ....\n              </p></div></div> <div class=\"d-flex flex-column justify-content-between\" data-v-84a80568><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px\" data-v-84a80568>\n              3 min ago\n            </p> <p class=\"mb-0\" style=\"color: #2cc51c; font-size: 13px\" data-v-84a80568>open</p></div></div></div></div> <div class=\"w-100 d-flex d-md-none d-lg-none flex-column border-end\" data-v-84a80568><div class=\"w-100 px-4 py-3 d-none d-md-flex d-lg-flex\" data-v-84a80568><i class=\"bi bi-search\" style=\"color: #bcbccb\" data-v-84a80568></i> <input type=\"text\" placeholder=\"search Message ...\" class=\"border-0 ms-2\" style=\"color: #bcbccb; outline: none\" data-v-84a80568></div> <div class=\"mt-4 w-100\" data-v-84a80568><div class=\"px-4 py-2 user d-flex justify-content-between border-bottom\" data-v-84a80568><div class=\"d-flex align-items-center\" data-v-84a80568><img" + _vm._ssrAttr("src", __webpack_require__(6)) + " alt class=\"border-circle\" style=\"width: 50px\" data-v-84a80568> <div class=\"flex flex-column ms-3\" data-v-84a80568><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px\" data-v-84a80568>\n                Jack Dorsi\n              </p> <p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px\" data-v-84a80568>\n                Hello,I have a question ....\n              </p></div></div> <div class=\"d-flex flex-column justify-content-between\" data-v-84a80568><p class=\"mb-0\" style=\"color: #4d4f5c; font-size: 13px\" data-v-84a80568>\n              3 min ago\n            </p> <p class=\"mb-0\" style=\"color: #2cc51c; font-size: 13px\" data-v-84a80568>open</p></div></div></div></div> "), _vm._ssrNode("<div class=\"w-100 d-flex\" style=\"overflow-y: auto\" data-v-84a80568>", "</div>", [_c('NuxtChild')], 1)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/tickets/history/index.vue?vue&type=template&id=84a80568&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/tickets/history/index.vue?vue&type=script&lang=js&
/* harmony default export */ var historyvue_type_script_lang_js_ = ({
  layout: "admin"
});
// CONCATENATED MODULE: ./pages/admin/tickets/history/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var tickets_historyvue_type_script_lang_js_ = (historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/tickets/history/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(285)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tickets_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "84a80568",
  "751784a9"
  
)

/* harmony default export */ var tickets_history = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map