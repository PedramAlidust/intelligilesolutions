
exports.ids = [13];
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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1c138f1d", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50d79f74_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50d79f74_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50d79f74_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50d79f74_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50d79f74_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "th[data-v-50d79f74]{background-color:#f5f6fa;font-size:10pt;color:#212529;padding:10px 15px;border-bottom:0}td[data-v-50d79f74],th[data-v-50d79f74]{font-family:Source Sans Pro,sans-serif;font-weight:400}td[data-v-50d79f74]{color:#000}p[data-v-50d79f74]{margin-bottom:0}.DetailBtn[data-v-50d79f74]{background-color:#e99d7b;color:#231942;font-family:Source Sans Pro,sans-serif;font-size:10pt;padding:5px 25px;text-transform:capitalize}.DetailBtn[data-v-50d79f74]:focus{box-shadow:none}.page-link[data-v-50d79f74]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-50d79f74]:focus{background-color:#055452;color:#fff;box-shadow:none}.SortStatus[data-v-50d79f74]{color:#828282;font-size:10pt}.sort[data-v-50d79f74],.SortStatus[data-v-50d79f74]{font-family:Open Sans;font-weight:400}.sort[data-v-50d79f74]{color:#000;font-size:14pt!important;font-size:10pt}.TableBkg[data-v-50d79f74]{min-height:80vh}.nav-link[data-v-50d79f74],.TableBkg[data-v-50d79f74]{background-color:#fff}.nav-link[data-v-50d79f74]{font-family:Source Sans Pro,sans-serif;color:#9296ad;font-size:10pt}.nav-link.active[data-v-50d79f74]{background-color:#055452;color:#fff!important;border-radius:8px;font-weight:600}.nav-tabs[data-v-50d79f74]{border-bottom:0;display:flex;justify-content:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/tickets/index.vue?vue&type=template&id=50d79f74&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-full mt-4 px-4\" data-v-50d79f74><ul id=\"ex1\" role=\"tablist\" class=\"nav nav-tabs mb-3\" data-v-50d79f74><li role=\"presentation\" class=\"nav-item\" data-v-50d79f74><a id=\"ex1-tab-1\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-1\" role=\"tab\" aria-controls=\"ex1-tabs-1\" aria-selected=\"true\" class=\"nav-link active px-3\" data-v-50d79f74>New Ticket</a></li> <li role=\"presentation\" class=\"nav-item\" data-v-50d79f74><a id=\"ex1-tab-2\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-2\" role=\"tab\" aria-controls=\"ex1-tabs-2\" aria-selected=\"false\" class=\"nav-link px-3\" data-v-50d79f74>Current Ticket</a></li> <li role=\"presentation\" class=\"nav-item\" data-v-50d79f74><a id=\"ex1-tab-3\" data-mdb-toggle=\"tab\" href=\"/admin/tickets/newticket/\" role=\"tab\" aria-controls=\"ex1-tabs-3\" aria-selected=\"false\" class=\"nav-link px-3\" data-v-50d79f74>History</a></li></ul></div> <div class=\"px-3 d-flex d-lg-none align-items-center justify-content-end\" style=\"text-align: right\" data-v-50d79f74><i class=\"bi bi-funnel-fill\" data-v-50d79f74></i> <p class=\"fs-5\" data-v-50d79f74>Sort By</p></div> "), _vm._ssrNode("<div class=\"container-full mt-4 px-4 TableBkg d-none d-md-block d-lg-block\" data-v-50d79f74>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between pt-5 px-3\" data-v-50d79f74>", "</div>", [_c('AdminPagination'), _vm._ssrNode(" <div class=\"d-flex align-items-center\" data-v-50d79f74><p class=\"sort\" data-v-50d79f74>Sort</p> <p class=\"SortStatus px-2\" data-v-50d79f74>Last Opened</p></div>")], 2), _vm._ssrNode(" <div class=\"container-full px-3\" data-v-50d79f74><table class=\"table align-middle mb-0 bg-white\" data-v-50d79f74><thead class=\"bg-light\" data-v-50d79f74><tr data-v-50d79f74><th data-v-50d79f74>#</th> <th data-v-50d79f74>Name</th> <th data-v-50d79f74>Data</th> <th data-v-50d79f74>Hour</th> <th data-v-50d79f74>priority</th> <th data-v-50d79f74>department</th> <th data-v-50d79f74>Status</th> <th data-v-50d79f74>Subject</th> <th data-v-50d79f74></th></tr></thead> <tbody data-v-50d79f74><tr data-v-50d79f74><td data-v-50d79f74><p data-v-50d79f74>1</p></td> <td data-v-50d79f74><p data-v-50d79f74>Jack Dorsi</p></td> <td data-v-50d79f74><p data-v-50d79f74>#14522322</p></td> <td data-v-50d79f74><p data-v-50d79f74>#14522322</p></td> <td data-v-50d79f74><div data-v-50d79f74><p class=\"px-3 rounded-1 py-1\" style=\"background-color: #c7cbd5; width: fit-content\" data-v-50d79f74>\n                  low\n                </p></div></td> <td data-v-50d79f74><p data-v-50d79f74>Unknown</p></td> <td data-v-50d79f74><p data-v-50d79f74>Deliverd</p></td> <td data-v-50d79f74>awd</td> <td data-bs-toggle=\"collapse\" data-bs-target=\"#CollapseState1\" role=\"button\" data-v-50d79f74><i class=\"bi bi-three-dots-vertical\" data-v-50d79f74></i> <div id=\"CollapseState1\" aria-expanded=\"false\" class=\"ChangeState bg-white collapse position-absolute\" data-v-50d79f74><p role=\"button\" class=\"StatusDevider py-2 text-danger text-center\" data-v-50d79f74>\n                  Check\n                </p> <p role=\"button\" class=\"StatusDevider py-2 text-warning text-center\" data-v-50d79f74>\n                  Send\n                </p> <p role=\"button\" class=\"StatusDevider py-2 text-success text-center\" data-v-50d79f74>\n                  Delivered\n                </p> <p role=\"button\" class=\"py-2 text-primary text-center\" data-v-50d79f74>\n                  Preparation\n                </p></div></td></tr></tbody></table></div>")], 2), _vm._ssrNode(" <div class=\"mt-4 px-3 d-lg-none d-md-none\" data-v-50d79f74><div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>#</p> <p class=\"RightItemColor\" data-v-50d79f74>1</p></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>Name</p> <p class=\"RightItemColor\" data-v-50d79f74>jack Dorsi</p></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>Data</p> <p class=\"RightItemColor\" data-v-50d79f74>#14522322</p></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>Hour</p> <p class=\"RightItemColor\" data-v-50d79f74>September30,2022 at 10:56 am</p></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>priority</p> <div data-v-50d79f74><p class=\"px-3 rounded-1 py-1\" style=\"background-color: #c7cbd5; width: fit-content\" data-v-50d79f74>\n          low\n        </p></div></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>department</p> <p class=\"RightItemColor\" data-v-50d79f74>Unknown</p></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-50d79f74><p class=\"LeftItemColor\" data-v-50d79f74>Status</p> <p class=\"RightItemColor\" data-v-50d79f74>Check</p></div> <div class=\"devider\" data-v-50d79f74></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-end\" data-v-50d79f74><div data-v-50d79f74><div id=\"CollapseState2\" aria-expanded=\"false\" class=\"ChangeState bg-white collapse\" data-v-50d79f74><p role=\"button\" class=\"StatusDevider py-2 text-danger text-center\" data-v-50d79f74>\n            Check\n          </p> <p role=\"button\" class=\"StatusDevider py-2 text-warning text-center\" data-v-50d79f74>\n            Send\n          </p> <p role=\"button\" class=\"StatusDevider py-2 text-success text-center\" data-v-50d79f74>\n            Delivered\n          </p> <p role=\"button\" class=\"py-2 text-primary text-center\" data-v-50d79f74>\n            Preparation\n          </p></div> <i data-bs-toggle=\"collapse\" data-bs-target=\"#CollapseState2\" class=\"bi bi-three-dots-vertical\" data-v-50d79f74></i></div></div></div> "), _vm._ssrNode("<div class=\"container my-4 px-5 d-lg-none d-md-none\" data-v-50d79f74>", "</div>", [_c('AdminPagination')], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/tickets/index.vue?vue&type=template&id=50d79f74&scoped=true&

// EXTERNAL MODULE: ./components/AdminPagination.vue + 4 modules
var AdminPagination = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/tickets/index.vue?vue&type=script&lang=js&

/* harmony default export */ var ticketsvue_type_script_lang_js_ = ({
  name: "admin",
  layout: "admin",
  components: {
    AdminPagination: AdminPagination["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/admin/tickets/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_ticketsvue_type_script_lang_js_ = (ticketsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/tickets/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_ticketsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50d79f74",
  "5a081e64"
  
)

/* harmony default export */ var tickets = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map