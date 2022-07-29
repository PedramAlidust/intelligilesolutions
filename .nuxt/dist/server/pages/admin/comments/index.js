
exports.ids = [2];
exports.modules = {

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("08e46f80", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03f64b47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03f64b47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03f64b47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03f64b47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_03f64b47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".PageTitle[data-v-03f64b47]{font-family:open sans,sans-serif;font-size:16pt;color:#43425d;font-weight:600}.starbi[data-v-03f64b47]{color:#ed8a19}.CheckIcon[data-v-03f64b47]{color:#fff;font-size:16pt}.CancelIcon[data-v-03f64b47]{color:#000;font-size:16pt}.DetailBtn[data-v-03f64b47]{padding:0 2px!important;border-radius:8px;box-shadow:none}th[data-v-03f64b47]{background-color:#f5f6fa;font-size:10pt;color:#212529;padding:10px 15px;border-bottom:0}td[data-v-03f64b47],th[data-v-03f64b47]{font-family:Source Sans Pro,sans-serif;font-weight:400}td[data-v-03f64b47]{color:#000;vertical-align:top}p[data-v-03f64b47]{margin-bottom:0}.DetailBtn[data-v-03f64b47]{background-color:#e99d7b;color:#231942;font-family:Source Sans Pro,sans-serif;font-size:10pt;padding:5px 25px;text-transform:capitalize}.DetailBtn[data-v-03f64b47]:focus{box-shadow:none}.page-link[data-v-03f64b47]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-03f64b47]:focus{background-color:#055452;color:#fff;box-shadow:none}.SortStatus[data-v-03f64b47]{color:#828282;font-size:10pt}.sort[data-v-03f64b47],.SortStatus[data-v-03f64b47]{font-family:Open Sans;font-weight:400}.sort[data-v-03f64b47]{color:#000;font-size:14pt!important;font-size:10pt}.TableBkg[data-v-03f64b47]{min-height:80vh}.nav-link[data-v-03f64b47],.TableBkg[data-v-03f64b47]{background-color:#fff}.nav-link[data-v-03f64b47]{font-family:Source Sans Pro,sans-serif;color:#9296ad;font-size:10pt}.nav-link.active[data-v-03f64b47]{background-color:#055452;color:#fff!important;border-radius:8px;font-weight:600}.nav-tabs[data-v-03f64b47]{border-bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/comments/index.vue?vue&type=template&id=03f64b47&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-full py-4\" data-v-03f64b47><p class=\"PageTitle\" data-v-03f64b47>Comments</p></div> "), _vm._ssrNode("<div class=\"container-full mt-4 px-4 TableBkg\" data-v-03f64b47>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between pt-5 px-3\" data-v-03f64b47>", "</div>", [_c('AdminPagination'), _vm._ssrNode(" <div class=\"d-flex align-items-center\" data-v-03f64b47><p class=\"sort\" data-v-03f64b47>Sort</p> <p class=\"SortStatus px-2\" data-v-03f64b47>Last Opened</p></div>")], 2), _vm._ssrNode(" <div class=\"container-full px-3\" data-v-03f64b47><table class=\"table align-middle mb-0 bg-white\" data-v-03f64b47><thead class=\"bg-light\" data-v-03f64b47><tr data-v-03f64b47><th data-v-03f64b47>#</th> <th data-v-03f64b47>Customer</th> <th data-v-03f64b47>Product</th> <th data-v-03f64b47>Date</th> <th data-v-03f64b47>Time</th> <th data-v-03f64b47>Score</th> <th data-v-03f64b47>Comments</th> <th data-v-03f64b47></th></tr></thead> <tbody data-v-03f64b47><tr data-v-03f64b47><td data-v-03f64b47><p data-v-03f64b47>1</p></td> <td data-v-03f64b47><p data-v-03f64b47>Jack Dorsi</p></td> <td data-v-03f64b47><p data-v-03f64b47>Sella body butter</p></td> <td data-v-03f64b47><p data-v-03f64b47>September30,2022</p></td> <td data-v-03f64b47><p data-v-03f64b47>at 10:56 am</p></td> <td data-v-03f64b47><i class=\"bi bi-star-fill starbi\" data-v-03f64b47></i> <i class=\"bi bi-star-fill starbi\" data-v-03f64b47></i> <i class=\"bi bi-star-fill starbi\" data-v-03f64b47></i> <i class=\"bi bi-star starbi\" data-v-03f64b47></i> <i class=\"bi bi-star starbi\" data-v-03f64b47></i></td> <td style=\"width: 20%;\" data-v-03f64b47><p data-v-03f64b47>\n              I really had to prep my face to make it super hydrated.\n              I found the coverage better with a Overall, \n              it has good coverage\n              </p></td> <td data-v-03f64b47><button type=\"button\" class=\"mx-2 DetailBtn btn btn-sm\" data-v-03f64b47><i class=\"CheckIcon bi bi-check2\" data-v-03f64b47></i></button> <button type=\"button\" class=\"DetailBtn btn btn-sm\" data-v-03f64b47><i class=\"CancelIcon bi bi-x-lg\" data-v-03f64b47></i></button></td></tr></tbody></table></div>")], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/comments/index.vue?vue&type=template&id=03f64b47&scoped=true&

// EXTERNAL MODULE: ./components/AdminPagination.vue + 4 modules
var AdminPagination = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/comments/index.vue?vue&type=script&lang=js&

/* harmony default export */ var commentsvue_type_script_lang_js_ = ({
  name: "admin",
  layout: 'admin',
  components: {
    AdminPagination: AdminPagination["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/admin/comments/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_commentsvue_type_script_lang_js_ = (commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/comments/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03f64b47",
  "140585bf"
  
)

/* harmony default export */ var comments = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6cd8b96c", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-link[data-v-71559e4e]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-71559e4e]:focus{background-color:#055452;color:#fff;box-shadow:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminPagination.vue?vue&type=template&id=71559e4e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "mt-2"
  }, [_vm._ssrNode("<nav aria-label=\"...\" data-v-71559e4e><ul class=\"pagination\" data-v-71559e4e><a href=\"#\" class=\"page-link\" data-v-71559e4e>Previous</a> <li class=\"page-item\" data-v-71559e4e><a href=\"#\" class=\"page-link\" data-v-71559e4e>1</a></li> <li class=\"page-item\" data-v-71559e4e><a href=\"#\" class=\"page-link\" data-v-71559e4e>2</a></li> <li class=\"page-item\" data-v-71559e4e><a href=\"#\" class=\"page-link\" data-v-71559e4e>3</a></li> <li class=\"page-item\" data-v-71559e4e><a href=\"#\" class=\"page-link\" data-v-71559e4e>Next</a></li></ul></nav>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AdminPagination.vue?vue&type=template&id=71559e4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminPagination.vue?vue&type=script&lang=js&
/* harmony default export */ var AdminPaginationvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/AdminPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AdminPaginationvue_type_script_lang_js_ = (AdminPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AdminPagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AdminPaginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "71559e4e",
  "fb084e66"
  
)

/* harmony default export */ var AdminPagination = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map