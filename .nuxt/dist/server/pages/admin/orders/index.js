
exports.ids = [6];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1c0deb70", content, true, context)
};

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38fc7572_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38fc7572_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38fc7572_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38fc7572_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38fc7572_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "th[data-v-38fc7572]{background-color:#f5f6fa;font-size:10pt;color:#212529;padding:10px 15px;border-bottom:0}td[data-v-38fc7572],th[data-v-38fc7572]{font-family:Source Sans Pro,sans-serif;font-weight:400}td[data-v-38fc7572]{color:#000}p[data-v-38fc7572]{margin-bottom:0}.DetailBtn[data-v-38fc7572]{background-color:#e99d7b;color:#231942;font-family:Source Sans Pro,sans-serif;font-size:10pt;padding:5px 25px;text-transform:capitalize}.DetailBtn[data-v-38fc7572]:focus{box-shadow:none}.page-link[data-v-38fc7572]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-38fc7572]:focus{background-color:#055452;color:#fff;box-shadow:none}.SortStatus[data-v-38fc7572]{color:#828282;font-size:10pt}.sort[data-v-38fc7572],.SortStatus[data-v-38fc7572]{font-family:Open Sans;font-weight:400}.sort[data-v-38fc7572]{color:#000;font-size:14pt!important;font-size:10pt}.TableBkg[data-v-38fc7572]{min-height:80vh}.nav-link[data-v-38fc7572],.TableBkg[data-v-38fc7572]{background-color:#fff}.nav-link[data-v-38fc7572]{font-family:Source Sans Pro,sans-serif;color:#9296ad;font-size:10pt}.nav-link.active[data-v-38fc7572]{background-color:#055452;color:#fff!important;border-radius:8px;font-weight:600}.nav-tabs[data-v-38fc7572]{border-bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/orders/index.vue?vue&type=template&id=38fc7572&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-full mt-4 px-4\" data-v-38fc7572><ul id=\"ex1\" role=\"tablist\" class=\"justify-content-center nav nav-tabs mb-3\" data-v-38fc7572><li role=\"presentation\" class=\"nav-item\" data-v-38fc7572><a id=\"ex1-tab-1\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-1\" role=\"tab\" aria-controls=\"ex1-tabs-1\" aria-selected=\"true\" class=\"nav-link active\" data-v-38fc7572>New Orders</a></li> <li role=\"presentation\" class=\"nav-item\" data-v-38fc7572><a id=\"ex1-tab-2\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-2\" role=\"tab\" aria-controls=\"ex1-tabs-2\" aria-selected=\"false\" class=\"nav-link\" data-v-38fc7572>Current Orders</a></li> <li role=\"presentation\" class=\"nav-item\" data-v-38fc7572><a id=\"ex1-tab-3\" data-mdb-toggle=\"tab\" href=\"#ex1-tabs-3\" role=\"tab\" aria-controls=\"ex1-tabs-3\" aria-selected=\"false\" class=\"nav-link\" data-v-38fc7572>History</a></li></ul></div> "), _vm._ssrNode("<div class=\"container-full mt-4 px-4 TableBkg\" data-v-38fc7572>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between pt-5 px-3\" data-v-38fc7572>", "</div>", [_c('AdminPagination'), _vm._ssrNode(" <div class=\"d-flex align-items-center\" data-v-38fc7572><p class=\"sort\" data-v-38fc7572>Sort</p> <p class=\"SortStatus px-2\" data-v-38fc7572>Last Opened</p></div>")], 2), _vm._ssrNode(" <div class=\"container-full px-3\" data-v-38fc7572><table class=\"table align-middle mb-0 bg-white\" data-v-38fc7572><thead class=\"bg-light\" data-v-38fc7572><tr data-v-38fc7572><th data-v-38fc7572>#</th> <th data-v-38fc7572>Name</th> <th data-v-38fc7572>Order id</th> <th data-v-38fc7572>Date</th> <th data-v-38fc7572>Price</th> <th data-v-38fc7572>Delivery Status</th> <th data-v-38fc7572>Order Status</th> <th data-v-38fc7572></th> <th data-v-38fc7572></th></tr></thead> <tbody data-v-38fc7572><tr data-v-38fc7572><td data-v-38fc7572><p data-v-38fc7572>1</p></td> <td data-v-38fc7572><p data-v-38fc7572>Jack Dorsi</p></td> <td data-v-38fc7572><p data-v-38fc7572>#14522322</p></td> <td data-v-38fc7572><p data-v-38fc7572>#14522322</p></td> <td data-v-38fc7572><p data-v-38fc7572>$1000</p></td> <td data-v-38fc7572><p data-v-38fc7572>Unknown</p></td> <td data-v-38fc7572><p data-v-38fc7572>Deliverd</p></td> <td data-v-38fc7572><button type=\"button\" class=\"DetailBtn btn btn-sm\" data-v-38fc7572>Details</button></td> <td data-v-38fc7572><i class=\"bi bi-three-dots-vertical\" data-v-38fc7572></i></td></tr></tbody></table></div>")], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/orders/index.vue?vue&type=template&id=38fc7572&scoped=true&

// EXTERNAL MODULE: ./components/AdminPagination.vue + 4 modules
var AdminPagination = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/orders/index.vue?vue&type=script&lang=js&

/* harmony default export */ var ordersvue_type_script_lang_js_ = ({
  name: "admin",
  layout: 'admin',
  components: {
    AdminPagination: AdminPagination["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/admin/orders/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_ordersvue_type_script_lang_js_ = (ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/orders/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38fc7572",
  "5720fd70"
  
)

/* harmony default export */ var orders = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6cd8b96c", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-link[data-v-71559e4e]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-71559e4e]:focus{background-color:#055452;color:#fff;box-shadow:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
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
  
  var style0 = __webpack_require__(97)
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