
exports.ids = [2];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("98d376da", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/TotalProd.5d3161a.svg";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Users.3bfb401.png";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Support.4509baf.png";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Bell.a4b1063.png";

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Shop.0d8f8a6.png";

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3023959e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3023959e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3023959e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3023959e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3023959e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(43);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "canvas[data-v-3023959e]{width:100%;height:100%}.TotalOrders[data-v-3023959e]{color:#e1da18}.OverviewNum[data-v-3023959e]{color:#f20000}.TicketNum[data-v-3023959e]{color:#4d77f9}.UserNum[data-v-3023959e]{color:#ed3b65}.ProdNum[data-v-3023959e]{color:#159282}.ProdCount[data-v-3023959e]{font-size:8pt;color:#8898aa}.TotalProd[data-v-3023959e]{width:40px}.StateTitle[data-v-3023959e]{font-family:Open Sans,sans-serif;font-size:10pt;color:#8898aa;padding:15px 15px 0}.DashState[data-v-3023959e]{background-color:#fff;border-radius:5px;min-height:10vh}.AdminUser[data-v-3023959e]{font-family:Source Sans Pro,sans-serif;color:#4d4f5c;font-size:10pt}.AdminImg[data-v-3023959e]{width:30px;height:30px}.RingIcon[data-v-3023959e]{width:55px}.CommentIcon[data-v-3023959e]{width:19px}.BarIcon[data-v-3023959e]{width:2px}.DashBoardIcon[data-v-3023959e]{width:12%}.SearchIcon[data-v-3023959e]{width:15px}[data-v-3023959e]::placeholder{color:#e0e0e5;font-size:10pt}.DashLogo[data-v-3023959e]{width:80%}.Inputstyle[data-v-3023959e]:focus{border-color:none;box-shadow:none}.form-control[data-v-3023959e]{border:none}.form-inline[data-v-3023959e]{width:20%}.AdminBkg[data-v-3023959e]{background-color:#f0f0f7}.NavBar[data-v-3023959e]{background-color:#fff;border-radius:10px;box-shadow:0 1.5px 3px 0 rgba(0,0,0,.05);padding:7px}.IconDist[data-v-3023959e]{margin-top:35px}.ItemsColor[data-v-3023959e]{color:#fff;font-family:Open Sans;font-size:11pt}.SideBkg[data-v-3023959e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:50%;background-size:cover;min-height:100vh;border-top-right-radius:30px;border-bottom-right-radius:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=3023959e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-full mt-4 px-4\" data-v-3023959e><div class=\"row\" data-v-3023959e><div class=\"col\" data-v-3023959e><div class=\"d-flex DashState align-items-center\" data-v-3023959e><div data-v-3023959e><p class=\"m-0 StateTitle\" data-v-3023959e>Total Products</p> <p class=\"pt-1 ps-3 m-0\" data-v-3023959e>123,456</p> <p class=\"pt-1 ps-3 ProdCount\" data-v-3023959e><span class=\"ProdNum\" data-v-3023959e>1000</span>\n                                    New Products\n                              </p></div> <img" + _vm._ssrAttr("src", __webpack_require__(176)) + " alt=\"TotalProd\" class=\"TotalProd\" data-v-3023959e></div></div> <div class=\"col\" data-v-3023959e><div class=\"d-flex DashState align-items-center\" data-v-3023959e><div data-v-3023959e><p class=\"m-0 StateTitle\" data-v-3023959e>Total Users</p> <p class=\"pt-1 ps-3 m-0\" data-v-3023959e>5800</p> <p class=\"pt-1 ps-3 ProdCount\" data-v-3023959e><span class=\"UserNum\" data-v-3023959e>1000</span>\n                                    New Users\n                              </p></div> <img" + _vm._ssrAttr("src", __webpack_require__(177)) + " alt=\"TotalProd\" class=\"TotalProd\" data-v-3023959e></div></div> <div class=\"col\" data-v-3023959e><div class=\"d-flex DashState align-items-center\" data-v-3023959e><div data-v-3023959e><p class=\"m-0 StateTitle\" data-v-3023959e>Total Tickets</p> <p class=\"pt-1 ps-3 m-0\" data-v-3023959e>20000</p> <p class=\"pt-1 ps-3 ProdCount\" data-v-3023959e><span class=\"TicketNum\" data-v-3023959e>180</span>\n                                    Current tickets\n                              </p></div> <img" + _vm._ssrAttr("src", __webpack_require__(178)) + " alt=\"TotalProd\" class=\"TotalProd\" data-v-3023959e></div></div> <div class=\"col\" data-v-3023959e><div class=\"d-flex DashState align-items-center\" data-v-3023959e><div data-v-3023959e><p class=\"m-0 StateTitle\" data-v-3023959e>Total Overview</p> <p class=\"pt-1 ps-3 m-0\" data-v-3023959e>250,000</p> <p class=\"pt-1 ps-3 ProdCount\" data-v-3023959e><span class=\"OverviewNum\" data-v-3023959e>2714</span>\n                                    Last day\n                              </p></div> <img" + _vm._ssrAttr("src", __webpack_require__(179)) + " alt=\"TotalProd\" class=\"TotalProd\" data-v-3023959e></div></div> <div class=\"col\" data-v-3023959e><div class=\"d-flex DashState align-items-center\" data-v-3023959e><div data-v-3023959e><p class=\"m-0 StateTitle\" data-v-3023959e>Total Orders</p> <p class=\"pt-1 ps-3 m-0\" data-v-3023959e>1400</p> <p class=\"pt-1 ps-3 ProdCount\" data-v-3023959e><span class=\"TotalOrders\" data-v-3023959e>125</span>\n                                    Last new Orders\n                              </p></div> <img" + _vm._ssrAttr("src", __webpack_require__(180)) + " alt=\"TotalProd\" class=\"TotalProd\" data-v-3023959e></div></div></div></div> <div class=\"container-full mt-4 px-4\" data-v-3023959e><canvas id=\"myChart\" data-v-3023959e></canvas></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=3023959e&scoped=true&

// EXTERNAL MODULE: external "chart.js/auto"
var auto_ = __webpack_require__(95);
var auto_default = /*#__PURE__*/__webpack_require__.n(auto_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
/* import chart.js */


/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  name: "admin",
  layout: 'admin',

  /*
          asyncData(context) {
          return  axios.post('https://api.intelligilesolutions.com/wp-json/jwt-auth/v1/token', {
              username: 'user',
              password: 'User@1400'
              })
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  context.error(error);
              });
       },
  */

  /* 
  asyncData(context) {
              var config = {
              method: 'post',
              url: 'https://api.intelligilesolutions.com/wp-json/wp/v2/users/me',
              headers: { 
                  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmludGVsbGlnaWxlc29sdXRpb25zLmNvbSIsImlhdCI6MTY1ODU1ODc0OCwibmJmIjoxNjU4NTU4NzQ4LCJleHAiOjE2NTkxNjM1NDgsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.jv942sWnAZZmeA3rO6-TC1ThmsxaLtIuJCH6w-xwSrE'
              }
              };
  
          return  axios(config)
              .then(function (response) {
              console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                context.error(error);
              });}
  */
  mounted() {
    /* chartjs config section */
    var ctx = document.getElementById('myChart');
    const plugin = {
      id: 'custom_canvas_background_color',
      beforeDraw: chart => {
        const ctx = chart.canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, chart.width, chart.height);
      },
      legend: {
        display: true,
        position: 'right',
        align: 'end'
      },
      title: {
        display: true,
        text: 'Sales',
        fontSize: 20,
        fontColor: '#000',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        padding: 10,
        position: 'top',
        align: 'left'
      }
    };
    new auto_default.a(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          lineTension: 0,
          label: 'Total Revenue',
          data: [6, 8, 5, 12, 16, 20, 18, 15, 12, 10, 8, 20],
          backgroundColor: '#fff',
          borderColor: '#2cd9c5',
          borderWidth: 2
        }, {
          lineTension: 0,
          label: 'Total Cost',
          data: [4, 6, 3, 10, 14, 18, 16, 13, 10, 8, 6, 18],
          backgroundColor: '#fff',
          borderColor: '#8c54ff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 50,
            top: 50,
            right: 50,
            bottom: 50
          }
        }
      },
      plugins: [plugin]
    });
  }

});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(181)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3023959e",
  "00d4daba"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map