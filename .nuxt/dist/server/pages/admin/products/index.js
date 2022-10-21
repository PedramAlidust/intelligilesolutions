
exports.ids = [9];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6cd8b96c", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-link[data-v-71559e4e]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-71559e4e]:focus{background-color:#055452;color:#fff;box-shadow:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 107:
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
  
  var style0 = __webpack_require__(105)
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
  "2bf7663b"
  
)

/* harmony default export */ var AdminPagination = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/uoloadP.3427c7f.png";

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("83ed2a88", content, true, context)
};

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("49a968bd", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("03239dec", content, true, context)
};

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrouping_vue_vue_type_style_index_0_id_5fdc8f18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrouping_vue_vue_type_style_index_0_id_5fdc8f18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrouping_vue_vue_type_style_index_0_id_5fdc8f18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrouping_vue_vue_type_style_index_0_id_5fdc8f18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewGrouping_vue_vue_type_style_index_0_id_5fdc8f18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Desc[data-v-5fdc8f18]{font-family:Open Sans;font-size:11pt;color:#707070}.Desc[data-v-5fdc8f18]:first-letter,.PageTitle[data-v-5fdc8f18]{text-transform:capitalize}.PageTitle[data-v-5fdc8f18]{font-family:Open Sans;font-size:18pt;font-weight:600;color:#231942}.PageTitle[data-v-5fdc8f18]:first-letter{text-transform:capitalize}.place[data-v-5fdc8f18]::placeholder{font-size:13px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_style_index_0_id_6b3217f7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_style_index_0_id_6b3217f7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_style_index_0_id_6b3217f7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_style_index_0_id_6b3217f7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProduct_vue_vue_type_style_index_0_id_6b3217f7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Desc[data-v-6b3217f7]{font-family:Open Sans;font-size:11pt;color:#707070}.Desc[data-v-6b3217f7]:first-letter,.PageTitle[data-v-6b3217f7]{text-transform:capitalize}.PageTitle[data-v-6b3217f7]{font-family:Open Sans;font-size:18pt;font-weight:600;color:#231942}.PageTitle[data-v-6b3217f7]:first-letter{text-transform:capitalize}.place[data-v-6b3217f7]::placeholder{font-size:13px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6db32551_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6db32551_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6db32551_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6db32551_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6db32551_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".InputStyle[data-v-6db32551]:before,.InputStyle[data-v-6db32551]:focus{box-shadow:none!important;background-image:none!important}.form-switch .form-check-input[data-v-6db32551]:after{background-color:#e99d7b}.form-check-input[data-v-6db32551]{background-image:none;border:none}.form-check-input[data-v-6db32551]:checked{background-color:#055452;box-shadow:none;border:none}.form-check-input[data-v-6db32551]:checked:focus{background-color:#055452;transition:none;border:none}.form-switch .form-check-input:checked[type=checkbox][data-v-6db32551]:after{background-color:#e99d7b;outline:0;box-shadow:0;border:none}.ProductBkg[data-v-6db32551]{background-color:#fff;border-radius:5px;box-shadow:1.5px 1.5px 10px 0 rgba(0,0,0,.06);border:.5px solid #caced5}.ProductImg[data-v-6db32551]{width:40%;height:155px}.product p[data-v-6db32551]{margin:0}.form-check[data-v-6db32551]{padding-left:0;margin:0}.form-switch[data-v-6db32551]{margin:0}.SortStatus[data-v-6db32551]{color:#828282;font-size:10pt}.sort[data-v-6db32551],.SortStatus[data-v-6db32551]{font-family:Open Sans;font-weight:400}.sort[data-v-6db32551]{color:#000;font-size:14pt!important;font-size:10pt}.AdminProd[data-v-6db32551]{background-color:#fff;min-height:70vh}.BtnStyleGroup[data-v-6db32551]{border:1px solid #055452;box-shadow:none;color:#055452;background-color:transparent;padding:8px;font-family:Source Sans Pro,sans-serif;border-radius:2px}.BtnStyleProd[data-v-6db32551]{box-shadow:none;background-color:#e99d7b;color:#fff;padding:8px 12px;border-radius:2px}hr[data-v-6db32551]{height:1px!important;color:#acaaaa!important;width:100%;margin:0 auto!important}.CategorieTxt[data-v-6db32551]:hover,.CatTxt[data-v-6db32551]:hover{cursor:pointer;color:#e99d7b;transition:.5s}button[data-v-6db32551]{color:#5a5a5a;border-radius:8px;padding:10px;background-color:#f0f0f0;box-shadow:none}.CategorieTxt[data-v-6db32551]{font-family:Open Sans;font-size:11pt}.CatImg[data-v-6db32551]{width:15px;height:15px}.CatSec[data-v-6db32551]{background-color:#f9f9f9;border-radius:5px}.CatTxt[data-v-6db32551]{font-family:Open Sans,sans-serif;font-size:13pt;color:#231942}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/products/index.vue?vue&type=template&id=6db32551&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "mt-lg-4 position-relative",
    class: _vm.productFromStatus ? '' : 'container-full'
  }, [_vm._ssrNode("<div class=\"row\" data-v-6db32551>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-12 mt-lg-3 py-2 bg-white bg-lg-transparent\" data-v-6db32551>", "</div>", [_vm._ssrNode("<div data-v-6db32551><div class=\"d-flex justify-content-between align-items-center pt-4 pt-lg-0\" data-v-6db32551><div class=\"d-flex ms-4 ms-lg-0\" data-v-6db32551><button type=\"button\" class=\"BtnStyleProd btn btn-sm\" data-v-6db32551>\n            Add New Products\n          </button></div></div> <div class=\"py-3 mt-2 d-lg-none d-flex justify-content-between align-items-items container\" data-v-6db32551><div class=\"d-flex align-items-center\" data-v-6db32551><i class=\"bi bi-chevron-left\" data-v-6db32551></i> <p class=\"mb-0\" data-v-6db32551>Back</p></div> <div class=\"d-flex align-items-center\" data-v-6db32551><p class=\"mb-0 me-2\" data-v-6db32551>Filter</p> <i class=\"bi bi-funnel-fill\" data-v-6db32551></i></div></div></div> <div class=\"AdminProd container-ful mt-2 px-4 mt-4\" data-v-6db32551><div class=\"d-none d-lg-flex align-items-center justify-content-between pt-4\" data-v-6db32551><div data-v-6db32551><p data-v-6db32551>" + _vm._ssrEscape("Showing " + _vm._s(_vm.Products.length) + " Results") + "</p></div></div> <div class=\"container-full\" data-v-6db32551><div class=\"row\" data-v-6db32551>" + _vm._ssrList(_vm.Products, function (product, index) {
    return "<div class=\"col-lg-6 col-md-6 p-0 mt-5 px-2\" data-v-6db32551><section class=\"ProductBkg\" data-v-6db32551><div class=\"d-flex product\" data-v-6db32551><img" + _vm._ssrAttr("src", product.acf.productimg) + " alt=\"product\" class=\"ProductImg\" data-v-6db32551> <div class=\"ps-2\" data-v-6db32551><p class=\"mt-1\" style=\"font-weight: 600;\" data-v-6db32551>" + _vm._ssrEscape(_vm._s(product.acf.productname)) + "</p> <p class=\"py-2\" style=\"opacity: .5;\" data-v-6db32551>" + _vm._ssrEscape(_vm._s(product.acf.ProductGrouping)) + "</p> <p class=\"pb-4\" style=\"opacity: .5;\" data-v-6db32551>" + _vm._ssrEscape(_vm._s(product.acf.productprice) + "$") + "</p></div></div></section></div>";
  }) + " " + (_vm.loadproduct ? "<div class=\"text-center mt-4\" data-v-6db32551><p class=\"text-success\" style=\"font-size: 12pt; font-weight: bold\" data-v-6db32551>\n            Loading...\n          </p></div>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"d-lg-none my-4 d-flex justify-content-center align-items-center\" data-v-6db32551>", "</div>", [_c('AdminPagination')], 1)], 2)]), _vm._ssrNode(" "), _c('Teleport', {
    attrs: {
      "to": "body"
    }
  }, [_vm.groupingStatus ? _c('div', {
    staticClass: "h-100 position-absolute top-0 d-flex flex-column justify-content-center align-items-center modal",
    staticStyle: {
      "backdrop-filter": "blur(4px)",
      "z-index": "1000"
    }
  }, [_c('NewGrouping', {
    on: {
      "close": function ($event) {
        return _vm.NewGroupingStatus(false);
      }
    }
  })], 1) : _vm._e()]), _vm._ssrNode(" "), _vm.productFromStatus ? _vm._ssrNode("<div class=\"w-100 h-100 position-absolute top-0 left-0 d-flex\" style=\"z-index: 999\" data-v-6db32551>", "</div>", [_c('NewProduct', {
    on: {
      "close": function ($event) {
        return _vm.productFrom(false);
      }
    }
  })], 1) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/products/index.vue?vue&type=template&id=6db32551&scoped=true&

// EXTERNAL MODULE: ./components/AdminPagination.vue + 4 modules
var AdminPagination = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/NewGrouping.vue?vue&type=template&id=5fdc8f18&scoped=true&
var NewGroupingvue_type_template_id_5fdc8f18_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "w-100 h-100 d-flex align-items-center justify-content-center"
  }, [_vm._ssrNode("<div class=\"d-none d-lg-flex flex-column bg-light py-4 px-4 w-25 border rounded-1\" data-v-5fdc8f18><div class=\"d-flex justify-content-between\" data-v-5fdc8f18><p class=\"PageTitle\" data-v-5fdc8f18>New Grouping</p> <button aria-label=\"Close\" class=\"btn-close\" data-v-5fdc8f18></button></div> <p class=\"Desc\" data-v-5fdc8f18>\n      Please fill in the following forms carefully to add a new admin to the\n      sub panel .\n    </p> <input type=\"text\" placeholder=\"Grouping Name\" class=\"w-100 border bg-transparent py-1 rounded-1 fs-6 place px-4\" data-v-5fdc8f18> <button class=\"w-100 btn mt-4 text-light\" style=\"background-color: #65a79f\" data-v-5fdc8f18>\n      Add group\n    </button></div> <div class=\"w-100 d-lg-none flex-column bg-light py-4 px-4 w-25 border rounded-1\" data-v-5fdc8f18><div class=\"d-flex justify-content-between\" data-v-5fdc8f18><p class=\"PageTitle\" data-v-5fdc8f18>New Grouping</p> <button aria-label=\"Close\" class=\"btn-close\" data-v-5fdc8f18></button></div> <p class=\"Desc\" data-v-5fdc8f18>\n      Please fill in the following forms carefully to add a new admin to the\n      sub panel .\n    </p> <input type=\"text\" placeholder=\"Grouping Name\" class=\"w-100 border bg-transparent py-1 rounded-1 fs-6 place px-4\" data-v-5fdc8f18> <button class=\"w-100 btn mt-4 text-light\" style=\"background-color: #65a79f\" data-v-5fdc8f18>\n      Add group\n    </button></div>")]);
};

var NewGroupingvue_type_template_id_5fdc8f18_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/admin/NewGrouping.vue?vue&type=template&id=5fdc8f18&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/admin/NewGrouping.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(247)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  NewGroupingvue_type_template_id_5fdc8f18_scoped_true_render,
  NewGroupingvue_type_template_id_5fdc8f18_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "5fdc8f18",
  "508f8316"
  
)

/* harmony default export */ var NewGrouping = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/NewProduct.vue?vue&type=template&id=6b3217f7&scoped=true&
var NewProductvue_type_template_id_6b3217f7_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "w-100 px-4 py-4 bg-light border rounded-1",
    staticStyle: {
      "overflow-y": "auto"
    }
  }, [_vm._ssrNode("<div class=\"d-flex justify-content-between\" data-v-6b3217f7><div data-v-6b3217f7><p class=\"PageTitle\" data-v-6b3217f7>Add New product</p> <p class=\"Desc\" data-v-6b3217f7>\n        Please fill in the form below carefully to create a new product .\n      </p></div> <div data-v-6b3217f7><button aria-label=\"Close\" class=\"btn-close\" data-v-6b3217f7></button></div></div> <div class=\"mt-4\" data-v-6b3217f7><div class=\"row row-cols-lg-4\" data-v-6b3217f7><div class=\"border rounded-1 d-flex flex-column align-items-center justify-content-center py-2 px-4 bg-white\" data-v-6b3217f7><div data-v-6b3217f7>" + (_vm.previewImage ? "<img" + _vm._ssrAttr("src", _vm.previewImage) + " alt class=\"w-100\" data-v-6b3217f7>" : "<!---->") + " " + (!_vm.previewImage ? "<img" + _vm._ssrAttr("src", __webpack_require__(132)) + " alt class=\"w-100\" data-v-6b3217f7>" : "<!---->") + "</div> <div class=\"d-flex justify-content-center mt-4\" data-v-6b3217f7><input type=\"file\" style=\"display: none\" data-v-6b3217f7></div></div></div> <div class=\"mt-4\" data-v-6b3217f7><div class=\"d-lg-flex flex-column flex-md-row\" data-v-6b3217f7><div class=\"w-50 position-relative d-none d-lg-block\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Name</label> <input type=\"text\" placeholder=\"Product Name\"" + _vm._ssrAttr("value", _vm.ProductName) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div> <div class=\"w-100 position-relative d-lg-none\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Name</label> <input type=\"text\" placeholder=\"Product Name\"" + _vm._ssrAttr("value", _vm.ProductName) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div> <div class=\"w-50 position-relative d-none d-md-block\" style=\"margin-left: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Grouping</label> <input type=\"text\" placeholder=\"Grouping Name\"" + _vm._ssrAttr("value", _vm.ProductGrouping) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div> <div class=\"w-100 position-relative d-md-none mt-4\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Grouping</label></div></div> <div class=\"mt-4\" data-v-6b3217f7><div class=\"w-50 position-relative d-none d-lg-block\" style=\"margin-right: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Price</label> <input type=\"text\" placeholder=\"Enter the price of Products\"" + _vm._ssrAttr("value", _vm.ProductPrice) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div> <div class=\"w-100 position-relative d-lg-none\" style=\"margin-right: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Price</label> <input type=\"text\" placeholder=\"Enter the price of Products\"" + _vm._ssrAttr("value", _vm.ProductPrice) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div></div></div> <div class=\"d-flex align-items-center justify-content-between mt-4\" data-v-6b3217f7><div class=\"d-flex flex-column\" data-v-6b3217f7><p class=\"PageTitle\" data-v-6b3217f7>Product Weight</p> <div class=\"d-flex\" data-v-6b3217f7>" + _vm._ssrList(_vm.unitWeightArray, function (unitweight, index) {
    return "<button class=\"bg-transparent border rounded-1 px-2 py-2\" data-v-6b3217f7>" + _vm._ssrEscape("\n            " + _vm._s(unitweight.weight) + " " + _vm._s(unitweight.unit) + "\n          ") + "</button>";
  }) + "</div></div> <div class=\"d-flex align-items-center border rounded-1 border-warning px-2 px-md-3 py-1\" data-v-6b3217f7><p class=\"mt-3\" data-v-6b3217f7>Add Weight</p> <button class=\"bi-plus-lg bg-warning border-0 rounded-circle ms-2\" data-v-6b3217f7></button></div></div> <div class=\"mt-4\" data-v-6b3217f7><p class=\"PageTitle\" data-v-6b3217f7>Product Discription</p> <div class=\"d-lg-flex\" data-v-6b3217f7><div class=\"w-50 position-relative d-none d-lg-block\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Discription</label> <textarea type=\"text\" placeholder=\"Product Description\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductDescription)) + "</textarea></div> <div class=\"w-100 position-relative d-lg-none\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Discription</label> <textarea type=\"text\" placeholder=\"Grouping Name\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductDescription)) + "</textarea></div> <div class=\"w-50 position-relative d-none d-lg-block\" style=\"margin-left: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>How to use</label> <textarea type=\"text\" placeholder=\"Enter the How to Use\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductUsage)) + "</textarea></div> <div class=\"w-100 position-relative d-lg-none mt-4\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>How to use</label> <textarea type=\"text\" placeholder=\"Enter the How to Use\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductUsage)) + "</textarea></div></div> <div class=\"w-100 mt-4\" data-v-6b3217f7><div class=\"w-100 position-relative\" style=\"margin-right: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Why it's cult</label> <textarea type=\"text\" placeholder=\"Enter the Why it's cult\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductWhy)) + "</textarea></div></div></div> <div class=\"mt-4\" data-v-6b3217f7><p class=\"PageTitle\" data-v-6b3217f7>Product Details</p> <div class=\"d-lg-flex\" data-v-6b3217f7><div class=\"w-50 position-relative d-none d-lg-block\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Ingrediebts</label> <textarea type=\"text\" placeholder=\"inter ingrediebts\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductIngrediebts)) + "</textarea></div> <div class=\"w-100 position-relative d-lg-none\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Ingrediebts</label> <textarea type=\"text\" placeholder=\"inter ingrediebts\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductIngrediebts)) + "</textarea></div> <div class=\"w-50 position-relative d-none d-lg-block\" style=\"margin-left: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Flavors</label> <textarea type=\"text\" placeholder=\"enter the flavors\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductFlavors)) + "</textarea></div> <div class=\"w-100 position-relative d-lg-none mt-4\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Flavors</label> <textarea type=\"text\" placeholder=\"enter the flavors\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductFlavors)) + "</textarea></div></div> <div class=\"w-100 mt-4\" data-v-6b3217f7><div class=\"w-100 position-relative\" style=\"margin-right: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Recommended Usege</label> <textarea type=\"text\" placeholder=\"Enter the Recommended Usege\" class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7>" + _vm._ssrEscape(_vm._s(_vm.ProductRecomendUsage)) + "</textarea></div></div></div> <div class=\"mt-4 d-flex justify-content-end\" data-v-6b3217f7><button class=\"bg-transparent border-warning border rounded-1 py-2 px-2\" data-v-6b3217f7>\n        Add a New Product\n      </button></div></div> " + (_vm.weightFormStatus ? "<section class=\"w-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center align-items-center modal\" style=\"backdrop-filter: blur(4px); z-index: 1000\" data-v-6b3217f7><div class=\"d-none d-lg-flex flex-column bg-light py-4 px-4 w-25 border rounded-1\" data-v-6b3217f7><div class=\"d-flex justify-content-between\" data-v-6b3217f7><p class=\"PageTitle\" data-v-6b3217f7>New Weight</p> <button aria-label=\"Close\" class=\"btn-close\" data-v-6b3217f7></button></div> <p class=\"Desc\" data-v-6b3217f7>\n        Please enter the numerical weight of the product along with its unit.\n      </p> <div class=\"w-100 position-relative\" style=\"margin-right: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Weight</label> <input type=\"text\" placeholder=\"Enter the weight of the product\"" + _vm._ssrAttr("value", _vm.weight) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div> <div class=\"w-100 position-relative mt-4\" style=\"margin-right: 25px\" data-v-6b3217f7><label class=\"bg-light\" style=\"position: absolute; top: -12px; left: 10px\" data-v-6b3217f7>Unit</label> <input type=\"text\" placeholder=\"Enter the product weight unit\"" + _vm._ssrAttr("value", _vm.unit) + " class=\"w-100 py-3 px-4 rounded-1 border bg-transparent\" data-v-6b3217f7></div> <div class=\"mt-4 d-flex\" data-v-6b3217f7><button class=\"w-100 btn mt-4 mx-2\" data-v-6b3217f7>Cancel</button> <button class=\"w-100 btn mt-4 text-light mx-2\" style=\"background-color: #65a79f\" data-v-6b3217f7>\n          Add\n        </button></div></div></section>" : "<!---->"))]);
};

var NewProductvue_type_template_id_6b3217f7_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/admin/NewProduct.vue?vue&type=template&id=6b3217f7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/admin/NewProduct.vue?vue&type=script&lang=js&
/* harmony default export */ var NewProductvue_type_script_lang_js_ = ({
  data() {
    return {
      weight: "",
      unit: "",
      unitWeightArray: [],
      weightFormStatus: false,
      selectedFile: null,
      previewImage: null,
      ProductName: "",
      ProductGrouping: "",
      ProductPrice: "",
      ProductWeight: "",
      ProductDescription: "",
      ProductUsage: "",
      ProductWhy: "",
      ProductIngrediebts: "",
      ProductFlavors: "",
      ProductRecomendUsage: "",
      ProductImg: ""
    };
  },

  methods: {
    AddUnit() {
      const weight = this.weight;
      const unit = this.unit;
      this.unitWeightArray.push({
        weight,
        unit
      });
      this.weightFormStatus = false;
    },

    DspModal() {
      this.weightFormStatus = !this.weightFormStatus;
    },

    NewProduct() {
      this.$parent.AddANewProduct(this.unitWeightArray, this.ProductName, this.ProductGrouping, this.ProductPrice, this.ProductWeight, this.ProductDescription, this.ProductUsage, this.ProductWhy, this.ProductIngrediebts, this.ProductFlavors, this.ProductRecomendUsage, this.ProductImg);
      /*close NewProductModal*/

      this.$emit('close');
      /* empty preview image */

      this.previewImage = null;
    },

    async onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      /*check if file selected*/

      if (this.selectedFile) {
        const fd = new FormData();
        fd.append("file", this.selectedFile, this.selectedFile.name);
        fd.append("title", "kandaka title");
        fd.append("caption", "kandaka caption");
        /* file reader for prview image */

        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);

        reader.onload = e => {
          this.previewImage = e.target.result;
        };
        /* set request header */


        const headers = {
          "Content-Disposition": `attachment; filename=${this.selectedFile.name}`,
          Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
          "content-type": "multipart/form-data"
        };
        await this.$axios.post("/wp-json/wp/v2/media", fd, {
          headers
        }).then(res => {
          this.ProductImg = res.data.source_url;
        }).catch(err => {
          console.log(err);
        });
      }
    },

    async onUpload() {
      /* triger the upload */
      this.$refs.fileInput.click();
    }

  }
});
// CONCATENATED MODULE: ./components/admin/NewProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_NewProductvue_type_script_lang_js_ = (NewProductvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/admin/NewProduct.vue



function NewProduct_injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NewProduct_component = Object(componentNormalizer["a" /* default */])(
  admin_NewProductvue_type_script_lang_js_,
  NewProductvue_type_template_id_6b3217f7_scoped_true_render,
  NewProductvue_type_template_id_6b3217f7_scoped_true_staticRenderFns,
  false,
  NewProduct_injectStyles,
  "6b3217f7",
  "f6585726"
  
)

/* harmony default export */ var NewProduct = (NewProduct_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/products/index.vue?vue&type=script&lang=js&



/* harmony default export */ var productsvue_type_script_lang_js_ = ({
  name: "admin",
  layout: "admin",
  components: {
    AdminPagination: AdminPagination["a" /* default */],
    NewGrouping: NewGrouping,
    NewProduct: NewProduct
  },

  data() {
    return {
      ProductDspStatus: true,
      loadproduct: false,
      Products: [],
      groupingStatus: false,
      productFromStatus: false
    };
  },

  beforeMount() {
    this.loadproduct = true;
  },

  methods: {
    async ProductDsp(id) {
      this.ProductDspStatus = !this.ProductDspStatus;
      /*change status of product*/

      /*post request to add new product*/

      const headers = {
        Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
        "Content-Type": "application/json"
      };

      if (!this.ProductDspStatus) {
        await this.$axios.put(`/wp-json/wp/v2/products/${id}`, {
          "acf": {
            "dspstatus": false
          }
        }, {
          headers
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }

      if (this.ProductDspStatus) {
        await this.$axios.put(`/wp-json/wp/v2/products/${id}`, {
          "acf": {
            "dspstatus": true
          }
        }, {
          headers
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }
    },

    NewGroupingStatus(status) {
      this.groupingStatus = status;
    },

    productFrom(status) {
      this.productFromStatus = status;
    },

    async AddANewProduct(ProductName, ProductGrouping, productprice, productweight, productdescription, productusage, productwhy, productingrediebts, productflavors, productrecomendusage, productimg) {
      /*post request to add new product*/
      const headers = {
        Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
        "Content-Type": "application/json"
      };
      const Data = JSON.stringify({
        "status": "publish",
        acf: {
          "productname": ProductName,
          "ProductGrouping": ProductGrouping,
          "productprice": productprice,
          "productweight": productweight,
          "productdescription": productdescription,
          "productusage": productusage,
          "productwhy": productwhy,
          "productingrediebts": productingrediebts,
          "productflavors": productflavors,
          "productrecomendusage": productrecomendusage,
          "productimg": productimg,
          "date": "2022/08/10"
        }
      });
      await this.$axios.post("/wp-json/wp/v2/products", Data, {
        headers
      }).then(res => {
        if (res.status == 201) {
          alert("Product Added Successfully");
        } else {
          alert("Something went wrong");
        }
      }).catch(err => {
        console.log(err);
      });
    },

    async UpdateProductsList() {
      /* Get All Products Request */
      const products = await this.$axios.get("/wp-json/wp/v2/products");
      this.Products = products.data;
      /* set loading to false */

      this.loadproduct = false;
    }

  },

  mounted() {
    /*load all products*/
    this.UpdateProductsList();
  }

});
// CONCATENATED MODULE: ./pages/admin/products/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/admin/products/index.vue



function products_injectStyles (context) {
  
  var style0 = __webpack_require__(251)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var products_component = Object(componentNormalizer["a" /* default */])(
  admin_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  products_injectStyles,
  "6db32551",
  "238f7a9d"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (products_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map