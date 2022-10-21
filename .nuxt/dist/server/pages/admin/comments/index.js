
exports.ids = [2];
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d7548498", content, true, context)
};

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6a69e296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6a69e296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6a69e296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6a69e296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6a69e296_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-6a69e296]{font-size:18px}.PageTitle[data-v-6a69e296]{font-family:open sans,sans-serif;font-size:16pt;color:#43425d;font-weight:600}.starbi[data-v-6a69e296]{color:#ed8a19}.CheckIcon[data-v-6a69e296]{color:#fff;font-size:16pt}.CancelIcon[data-v-6a69e296]{color:#000;font-size:16pt}.DetailBtn[data-v-6a69e296]{width:40px;padding:3px 2px!important;border-radius:8px;box-shadow:none}.DetailBtn[data-v-6a69e296]:last-child{background-color:transparent;border:1px solid #000}th[data-v-6a69e296]{background-color:#f5f6fa;font-size:10pt;color:#212529;padding:10px 15px;border-bottom:0}td[data-v-6a69e296],th[data-v-6a69e296]{font-family:Source Sans Pro,sans-serif;font-weight:400}td[data-v-6a69e296]{color:#000;vertical-align:top}p[data-v-6a69e296]{margin-bottom:0}.DetailBtn[data-v-6a69e296]{background-color:#e99d7b;color:#231942;font-family:Source Sans Pro,sans-serif;font-size:10pt;padding:5px 25px;text-transform:capitalize}.DetailBtn[data-v-6a69e296]:focus{box-shadow:none}.page-link[data-v-6a69e296]{color:#4d4f5c;padding:8px 15px}.page-link[data-v-6a69e296]:focus{background-color:#055452;color:#fff;box-shadow:none}.SortStatus[data-v-6a69e296]{color:#828282;font-size:10pt}.sort[data-v-6a69e296],.SortStatus[data-v-6a69e296]{font-family:Open Sans;font-weight:400}.sort[data-v-6a69e296]{color:#000;font-size:14pt!important;font-size:10pt}.TableBkg[data-v-6a69e296]{min-height:80vh}.nav-link[data-v-6a69e296],.TableBkg[data-v-6a69e296]{background-color:#fff}.nav-link[data-v-6a69e296]{font-family:Source Sans Pro,sans-serif;color:#9296ad;font-size:10pt}.nav-link.active[data-v-6a69e296]{background-color:#055452;color:#fff!important;border-radius:8px;font-weight:600}.nav-tabs[data-v-6a69e296]{border-bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/comments/index.vue?vue&type=template&id=6a69e296&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<section class=\"d-none d-lg-block\" data-v-6a69e296>", "</section>", [_vm._ssrNode("<div class=\"container-full py-4\" data-v-6a69e296><p class=\"PageTitle\" data-v-6a69e296>Comments</p></div> "), _vm._ssrNode("<div class=\"container-full mt-4 px-4 TableBkg\" data-v-6a69e296>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between pt-5 px-3\" data-v-6a69e296>", "</div>", [_c('AdminPagination'), _vm._ssrNode(" <div class=\"d-flex align-items-center\" data-v-6a69e296><p class=\"sort\" data-v-6a69e296>Sort</p> <p class=\"SortStatus px-2\" data-v-6a69e296>Last Opened</p></div>")], 2), _vm._ssrNode(" <div class=\"container-full px-3\" data-v-6a69e296><table class=\"table align-middle mb-0 bg-white\" data-v-6a69e296><thead class=\"bg-light\" data-v-6a69e296><tr data-v-6a69e296><th data-v-6a69e296>#</th> <th data-v-6a69e296>Customer</th> <th data-v-6a69e296>Product</th> <th data-v-6a69e296>Date</th> <th data-v-6a69e296>Time</th> <th data-v-6a69e296>Score</th> <th data-v-6a69e296>Comments</th> <th data-v-6a69e296></th></tr></thead> " + (!_vm.loading ? "<tbody data-v-6a69e296>" + _vm._ssrList(_vm.comments, function (comment, index) {
    return "<tr data-v-6a69e296><td data-v-6a69e296><p data-v-6a69e296>1</p></td> <td data-v-6a69e296><p data-v-6a69e296>" + _vm._ssrEscape(_vm._s(comment.acf.author)) + "</p></td> <td data-v-6a69e296><p style=\"color: #055452\" data-v-6a69e296>Sella body butter</p></td> <td data-v-6a69e296><p data-v-6a69e296>" + _vm._ssrEscape(_vm._s(comment.acf.date) + " ") + "</p></td> <td data-v-6a69e296><p data-v-6a69e296>" + _vm._ssrEscape(_vm._s(comment.acf.time)) + "</p></td> <td style=\"color: #ed8a19\" data-v-6a69e296>" + _vm._ssrList(Number(comment.acf.score), function (star, indextwo) {
      return "<i class=\"bi bi-star-fill starbi\" data-v-6a69e296></i>";
    }) + " <span style=\"color: #000\" data-v-6a69e296>" + _vm._ssrEscape(_vm._s(comment.acf.score)) + "</span></td> <td style=\"width: 30%\" data-v-6a69e296><p data-v-6a69e296>" + _vm._ssrEscape("\n                " + _vm._s(comment.acf.commenttxt) + "\n              ") + "</p></td> <td class=\"d-flex flex-column gap-2\" data-v-6a69e296><button type=\"button\" class=\"DetailBtn btn btn-sm\" data-v-6a69e296><i class=\"CheckIcon bi bi-check2\" data-v-6a69e296></i></button> <button type=\"button\" class=\"DetailBtn btn btn-sm\" data-v-6a69e296><i class=\"CancelIcon bi bi-x-lg\" data-v-6a69e296></i></button></td></tr>";
  }) + "</tbody>" : "<!---->") + "</table> " + (_vm.loading ? "<div class=\"text-center mt-4\" data-v-6a69e296><p class=\"text-success\" style=\"font-size: 12pt; font-weight: bold\" data-v-6a69e296>\n          Loading...\n        </p></div>" : "<!---->") + "</div>")], 2)], 2), _vm._ssrNode(" <section class=\"d-md-none d-lg-none py-4 px-3\" data-v-6a69e296><div class=\"w-100 d-flex justify-content-between\" data-v-6a69e296><div data-v-6a69e296><h1 data-v-6a69e296>Comments</h1></div> <div class=\"d-flex align-items-center\" data-v-6a69e296><i class=\"bi bi-funnel-fill me-2\" data-v-6a69e296></i> <h3 data-v-6a69e296>Sort</h3></div></div> <div class=\"mt-4\" data-v-6a69e296><div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>#</p> <p class=\"RightItemColor\" data-v-6a69e296>1</p></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>Coustmer</p> <p class=\"RightItemColor\" data-v-6a69e296>Jack Dorsi</p></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>Product</p> <p style=\"color: #055452; border-bottom: 1px solid #055452\" data-v-6a69e296>\n          Sella body butter\n        </p></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>Date</p> <p class=\"RightItemColor\" data-v-6a69e296>September30,2022 at 10:56 am</p></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>Time</p> <p class=\"RightItemColor\" data-v-6a69e296>at 10:56 am</p></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>Score</p> <div style=\"color: #ed8a19\" data-v-6a69e296><i class=\"bi bi-star-fill\" data-v-6a69e296></i> <i class=\"bi bi-star-fill\" data-v-6a69e296></i> <i class=\"bi bi-star-fill\" data-v-6a69e296></i> <i class=\"bi bi-star-fill\" data-v-6a69e296></i> <i class=\"bi bi-star-fill\" data-v-6a69e296></i></div></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-between\" data-v-6a69e296><p class=\"LeftItemColor\" data-v-6a69e296>Comments</p> <p class=\"RightItemColor w-50\" data-v-6a69e296>\n          I really had to prep my face to make it super hydrated. I found the\n          coverage better with a Overall, it has good coverage\n        </p></div> <div class=\"devider\" data-v-6a69e296></div> <div class=\"py-3 px-4 bg-white d-flex align-items-center justify-content-center\" data-v-6a69e296><button type=\"button\" class=\"mx-2 DetailBtn btn btn-sm px-2 py-1\" data-v-6a69e296><i class=\"CheckIcon bi bi-check2\" data-v-6a69e296></i></button> <button type=\"button\" class=\"DetailBtn btn btn-sm px-2 py-1\" data-v-6a69e296><i class=\"CancelIcon bi bi-x-lg\" data-v-6a69e296></i></button></div></div></section>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/comments/index.vue?vue&type=template&id=6a69e296&scoped=true&

// EXTERNAL MODULE: ./components/AdminPagination.vue + 4 modules
var AdminPagination = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/comments/index.vue?vue&type=script&lang=js&

/* harmony default export */ var commentsvue_type_script_lang_js_ = ({
  name: "admin",
  layout: "admin",

  data() {
    return {
      loading: null,
      comments: []
    };
  },

  components: {
    AdminPagination: AdminPagination["a" /* default */]
  },
  methods: {
    DeleteComment(id) {
      /* set request header */
      const headers = {
        Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
        "Content-Type": "application/json"
      };
      /* axios delete comment */

      this.$axios.delete(`/wp-json/wp/v2/commentv2/${id}`, {
        headers
      }).then(res => {
        if (res.status == 201) {
          alert('Comment deleted successfully');
        }
      }).catch(err => {
        console.log(err);
      });
    }

  },

  beforeMount() {
    this.loading = true;
  },

  async mounted() {
    /* set request header */
    const headers = {
      Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
      "Content-Type": "application/json"
    };
    /* get orders */

    const comments = await this.$axios.get("/wp-json/wp/v2/commentv2", {
      headers
    });
    this.comments = comments.data;
    /*set loading to false*/

    this.loading = false;
  }

});
// CONCATENATED MODULE: ./pages/admin/comments/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_commentsvue_type_script_lang_js_ = (commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/comments/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6a69e296",
  "84fdd9a6"
  
)

/* harmony default export */ var comments = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map