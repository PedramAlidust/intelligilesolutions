
exports.ids = [5];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6cd8b96c", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPagination_vue_vue_type_style_index_0_id_71559e4e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-link[data-v-71559e4e]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-71559e4e]:focus{background-color:#055452;color:#fff;box-shadow:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminPagination.vue?vue&type=template&id=71559e4e&scoped=true&
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
  
  var style0 = __webpack_require__(102)
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

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("689cf8b4", content, true, context)
};

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dd2489d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dd2489d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dd2489d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dd2489d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dd2489d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-switch[data-v-dd2489d0]{padding-right:15;padding-left:0}.InputStyle[data-v-dd2489d0]:before,.InputStyle[data-v-dd2489d0]:focus{box-shadow:none!important;background-image:none!important}.form-switch .form-check-input[data-v-dd2489d0]:after{background-color:#e99d7b}.form-check-input[data-v-dd2489d0]{background-image:none;border:none}.form-check-input[data-v-dd2489d0]:checked{background-color:#055452;box-shadow:none;border:none}.form-check-input[data-v-dd2489d0]:checked:focus{background-color:#055452;transition:none;border:none}.form-switch .form-check-input:checked[type=checkbox][data-v-dd2489d0]:after{background-color:#e99d7b;outline:0;box-shadow:0;border:none}.BtnStyleProd[data-v-dd2489d0]{box-shadow:none;background-color:#e99d7b;color:#fff;padding:8px 12px;border-radius:2px}th[data-v-dd2489d0]{background-color:#f5f6fa;font-size:10pt;color:#212529;padding:10px 15px;border-bottom:0}td[data-v-dd2489d0],th[data-v-dd2489d0]{font-family:Source Sans Pro,sans-serif;font-weight:400}td[data-v-dd2489d0]{color:#000}p[data-v-dd2489d0]{margin-bottom:0}.DetailBtn[data-v-dd2489d0]{background-color:#e99d7b;color:#231942;font-family:Source Sans Pro,sans-serif;font-size:10pt;padding:5px 25px;text-transform:capitalize}.DetailBtn[data-v-dd2489d0]:focus{box-shadow:none}.page-link[data-v-dd2489d0]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-dd2489d0]:focus{background-color:#055452;color:#fff;box-shadow:none}.SortStatus[data-v-dd2489d0]{color:#828282;font-size:10pt}.sort[data-v-dd2489d0],.SortStatus[data-v-dd2489d0]{font-family:Open Sans;font-weight:400}.sort[data-v-dd2489d0]{color:#000;font-size:14pt!important;font-size:10pt}.TableBkg[data-v-dd2489d0]{min-height:80vh}.nav-link[data-v-dd2489d0],.TableBkg[data-v-dd2489d0]{background-color:#fff}.nav-link[data-v-dd2489d0]{font-family:Source Sans Pro,sans-serif;color:#9296ad;font-size:10pt}.nav-link.active[data-v-dd2489d0]{background-color:#055452;color:#fff!important;border-radius:8px;font-weight:600}.nav-tabs[data-v-dd2489d0]{border-bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/subadmin/index.vue?vue&type=template&id=dd2489d0&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-full mt-4 px-4\" data-v-dd2489d0></div> "), _vm._ssrNode("<div class=\"container-full mt-4 px-4 TableBkg\" data-v-dd2489d0>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between pt-5 px-3\" data-v-dd2489d0>", "</div>", [_c('AdminPagination'), _vm._ssrNode(" <div class=\"d-flex align-items-center\" data-v-dd2489d0><button type=\"button\" class=\"BtnStyleProd btn btn-sm\" data-v-dd2489d0>Add New Admin</button></div>")], 2), _vm._ssrNode(" <div class=\"container-full px-3\" data-v-dd2489d0><table class=\"table align-middle mb-0 bg-white\" data-v-dd2489d0><thead class=\"bg-light\" data-v-dd2489d0><tr data-v-dd2489d0><th data-v-dd2489d0>#</th> <th data-v-dd2489d0>Name</th> <th data-v-dd2489d0>Gmail</th> <th data-v-dd2489d0>Phone Num</th> <th data-v-dd2489d0>User name</th> <th data-v-dd2489d0>Password</th> <th data-v-dd2489d0></th> <th data-v-dd2489d0></th> <th data-v-dd2489d0></th></tr></thead> <tbody data-v-dd2489d0><tr data-v-dd2489d0><td data-v-dd2489d0><p data-v-dd2489d0>1</p></td> <td data-v-dd2489d0><p data-v-dd2489d0>jack Dorsi</p></td> <td data-v-dd2489d0><p data-v-dd2489d0>Dorsi.jack220@gmail.com</p></td> <td data-v-dd2489d0><p data-v-dd2489d0>+00131521455</p></td> <td data-v-dd2489d0><p data-v-dd2489d0>Dorsi_jack220</p></td> <td data-v-dd2489d0><p data-v-dd2489d0>Dorsi1234</p></td> <td data-v-dd2489d0><i class=\"bi bi-eye\" data-v-dd2489d0></i></td> <td data-v-dd2489d0><div class=\"d-flex justify-content-between\" data-v-dd2489d0><p data-v-dd2489d0>inactive</p> <div class=\"form-check form-switch\" data-v-dd2489d0><input type=\"checkbox\" role=\"switch\" id=\"flexSwitchCheckChecked\" checked=\"checked\" class=\"InputStyle form-check-input\" data-v-dd2489d0></div> <p data-v-dd2489d0>Active</p></div></td> <td data-v-dd2489d0><i class=\"bi bi-three-dots-vertical\" data-v-dd2489d0></i></td></tr></tbody></table></div>")], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/subadmin/index.vue?vue&type=template&id=dd2489d0&scoped=true&

// EXTERNAL MODULE: ./components/AdminPagination.vue + 4 modules
var AdminPagination = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/subadmin/index.vue?vue&type=script&lang=js&

/* harmony default export */ var subadminvue_type_script_lang_js_ = ({
  name: "admin",
  layout: 'admin',
  components: {
    AdminPagination: AdminPagination["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/admin/subadmin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_subadminvue_type_script_lang_js_ = (subadminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/subadmin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(217)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_subadminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dd2489d0",
  "4c16ef1a"
  
)

/* harmony default export */ var subadmin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map