!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black",Blue:"Blue",Bold:"Bold","Choose heading":"Choose heading","Dim grey":"Dim grey","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Editor toolbar":"Editor toolbar",Green:"Green",Grey:"Grey",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block",Italic:"Italic","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Next:"Next",Orange:"Orange",Paragraph:"Paragraph",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Select all":"Select all","Show more items":"Show more items",Strikethrough:"Strikethrough",Turquoise:"Turquoise",Underline:"Underline",Undo:"Undo",White:"White",Yellow:"Yellow"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{674:function(t,e,o){var content=o(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("4d69cffb",content,!0,{sourceMap:!1})},676:function(t,e,o){"use strict";o(674)},677:function(t,e,o){var n=o(38)(!1);n.push([t.i,"nav a[data-v-2b653379]{color:#055452!important;font-family:Playfair Display!important;font-weight:700;font-size:18px}nav a[data-v-2b653379]:hover{color:#e99d7b!important}.logo[data-v-2b653379]{border-radius:50%;width:97px}@media screen and (max-width:320px){.logo[data-v-2b653379]{display:none}}@media (max-width:994px){.logo[data-v-2b653379]{border-radius:50%;width:70px}.SearchIcon[data-v-2b653379]{border-radius:50%}.SearchIcon[data-v-2b653379],.ShopIcon[data-v-2b653379]{width:40px;background-color:#e99d7b;padding:9px}.ShopIcon[data-v-2b653379]{border-radius:40%}}[data-v-2b653379]::placeholder{font-family:Open Sans,sans-serif;font-size:14px;opacity:1!important}input[data-v-2b653379]:focus{width:120%;border:1px solid #e99d7b!important}input[data-v-2b653379]:focus::placeholder{color:#e99d7b;transition:.3s}.MobileMenuBack[data-v-2b653379]{box-shadow:0 1.5px 3px 0 rgba(0,0,0,.09)}.MobileMenuIcon[data-v-2b653379]{margin-top:30px;cursor:pointer}.searchbtn[data-v-2b653379]{margin-left:-36px!important;transition:.5}.FocusedBtn[data-v-2b653379],.searchbtn[data-v-2b653379]{background-color:#e99d7b!important;margin-top:0;height:37px;width:37px;z-index:1;box-shadow:none}.FocusedBtn[data-v-2b653379]{margin-left:5px!important;animation-name:move;animation-duration:.5s}.searchicon[data-v-2b653379]{color:#055452;position:relative;right:2px}.searchicon[data-v-2b653379]:hover{color:#fff;transition:.3s}.shopicon[data-v-2b653379]{color:#055452;position:relative;right:1px}.shopicon[data-v-2b653379]:hover{color:#fff;transition:.3s}.inputstyle[data-v-2b653379]{border:.5px solid #707070!important;border-radius:30px!important}.loginbtn[data-v-2b653379]{background-color:#e99d7b!important;height:45px;border-radius:30px!important;box-shadow:none;margin-top:-4px}.loginicon[data-v-2b653379]{color:#055452;font-size:15pt}.loginicon[data-v-2b653379]:hover{color:#fff;transition:.3s}.signintext[data-v-2b653379]{font-weight:600;font-size:16px;color:#055452;font-family:Open Sans;font-style:normal;padding:8px}.signintext[data-v-2b653379]:hover{color:#fff;transition:.3s}.shopbtn[data-v-2b653379]{background-color:#e99d7b!important;border-radius:50%!important;margin-right:10px;height:40px;width:40px;box-shadow:none}@media (max-width:1200px){.SearchForm[data-v-2b653379]{display:none}}.SubPageMenuBkg[data-v-2b653379]{box-shadow:0 1.5px 3px 0 rgba(0,0,0,.09)}",""]),t.exports=n},687:function(t,e,o){"use strict";var n=[function(){var t=this._self._c;return t("div",{staticClass:"col-lg-1"},[t("img",{staticClass:"logo",attrs:{src:o(393),alt:"logo"}})])},function(){var t=this._self._c;return t("button",{staticClass:"btn shopbtn",attrs:{type:"button"}},[t("i",{staticClass:"bi bi-bag shopicon"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex flex-row align-items-center mt-3"},[e("img",{staticClass:"SearchIcon",attrs:{src:o(513),alt:"search"}}),t._v(" "),e("div",{staticClass:"px-1"}),t._v(" "),e("img",{staticClass:"ShopIcon",attrs:{src:o(514),alt:"search"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"col-4 text-center"},[t("img",{staticClass:"logo",attrs:{src:o(393),alt:"logo"}})])}],r=o(397),c={name:"TheHeader",components:{TheNavMenu:o(396).a,TheMobileMenuModal:r.a},props:["menu_data"],data:function(){return{Focused:!1,MobileMenu:!1}},methods:{OnFocus:function(){this.Focused=!0},OnBlur:function(){this.Focused=!1},EnableMobileMenu:function(){this.MobileMenu=!0},DisableMobileMenu:function(){this.MobileMenu=!1}},computed:{OnFocusCss:function(){return this.Focused?"FocusedBtn":"searchbtn"}}},l=(o(676),o(102)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"SubPageMenuBkg position-relative mb-4"},[e("div",{staticClass:"container py-4 d-none d-lg-block"},[e("div",{staticClass:"row justify-content-between"},[t._m(0),t._v(" "),e("div",{staticClass:"col-auto col-lg-5 text-start pe-5"},[e("nav",{staticClass:"navbar shadow-0 navbar-expand-lg py-4 pe-2"},[e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navmenu"}},[e("ul",{staticClass:"navbar-nav"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n                Home\n              ")]),t._v(" "),e("li",{staticClass:"nav-item px-3"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("\n                  About\n                ")])],1),t._v(" "),e("li",{staticClass:"nav-item px-3"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("\n                Products\n              ")])],1),t._v(" "),e("li",{staticClass:"nav-item px-3"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("\n                  Contact\n                ")])],1)],1)])])]),t._v(" "),e("div",{staticClass:"col-lg-3 text-end py-4 SearchForm"},[e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"form-outline"},[e("input",{staticClass:"form-control inputstyle",attrs:{placeholder:"Search...",type:"search",id:"form1"},on:{blur:t.OnBlur,focus:t.OnFocus}})]),t._v(" "),e("button",{staticClass:"btn searchbtn rounded-circle",class:t.OnFocusCss,attrs:{type:"button"}},[e("i",{staticClass:"bi bi-search searchicon"})])])]),t._v(" "),e("div",{staticClass:"col-lg-3 text-start py-4 d-flex flex-row flex-row-reverse"},[e("TheNavMenu"),t._v(" "),t._m(1)],1)])]),t._v(" "),e("div",{staticClass:"container-full d-lg-none pt-3 px-4"},[e("div",{staticClass:"row g-0 border-bottom pb-3"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"col-4 text-start"},[e("img",{staticClass:"MobileMenuIcon",attrs:{src:o(512),alt:"menu"},on:{click:t.EnableMobileMenu}})])])]),t._v(" "),t.MobileMenu?e("TheMobileMenuModal",{attrs:{menu_status:t.MobileMenu},on:{SendModalStatus:t.DisableMobileMenu}}):t._e(),t._v(" "),t._t("default")],2)}),n,!1,null,"2b653379",null);e.a=component.exports},691:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9Ikdyb3VwIDExNjI3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOS41NTkiIGhlaWdodD0iMzkuNTU5IiB2aWV3Qm94PSIwIDAgMzkuNTU5IDM5LjU1OSI+CiAgICA8ZyBkYXRhLW5hbWU9IkNpcmNsZSBCRyIgc3R5bGU9ImZpbGw6I2U0ZTRlNDtzdHJva2U6I2U0ZTRlNDtzdHJva2UtbGluZWpvaW46cm91bmQiPgogICAgICAgIDxjaXJjbGUgY3g9IjE5Ljc3OSIgY3k9IjE5Ljc3OSIgcj0iMTkuNzc5IiBzdHlsZT0ic3Ryb2tlOm5vbmUiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxOS43NzkiIGN5PSIxOS43NzkiIHI9IjE5LjI3OSIgc3R5bGU9ImZpbGw6bm9uZSIvPgogICAgPC9nPgogICAgPHBhdGggZD0iTTYuNTc5IDE3LjI4NGgxMy4wNzJhMS4xNjkgMS4xNjkgMCAwIDAgLjgxOC0yTDEzLjk0NSA4Ljc2YTEuMTY5IDEuMTY5IDAgMCAwLTEuNjYgMEw1Ljc2IDE1LjI4NWExLjE2OSAxLjE2OSAwIDAgMCAuODE4IDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjY2NCA1LjkzNikiIHN0eWxlPSJmaWxsOiMzYTNhM2EiLz4KPC9zdmc+Cg=="},728:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5Ij4KICAgIDxnIGRhdGEtbmFtZT0iRWxsaXBzZSAxNzkiIHN0eWxlPSJzdHJva2U6I2ZmNjU2NTtzdHJva2Utd2lkdGg6MnB4O2ZpbGw6bm9uZSI+CiAgICAgICAgPGNpcmNsZSBjeD0iOS41IiBjeT0iOS41IiByPSI5LjUiIHN0eWxlPSJzdHJva2U6bm9uZSIvPgogICAgICAgIDxjaXJjbGUgY3g9IjkuNSIgY3k9IjkuNSIgcj0iOC41IiBzdHlsZT0iZmlsbDpub25lIi8+CiAgICA8L2c+Cjwvc3ZnPgo="},729:function(t,e,o){var content=o(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("3d099b67",content,!0,{sourceMap:!1})},755:function(t,e,o){t.exports=o.p+"img/ProductThree.cbf6bb5.jpg"},756:function(t,e,o){t.exports=o.p+"img/ProductOne.3cad331.jpg"},757:function(t,e,o){t.exports=o.p+"img/ProductTwo.ad4a802.jpg"},758:function(t,e,o){"use strict";o(729)},759:function(t,e,o){var n=o(38),r=o(356),c=o(691),l=o(515),d=n(!1),v=r(c),f=r(l);d.push([t.i,"button[data-v-d28244c2]{color:#5a5a5a;border-radius:8px;padding:10px;background-color:#f0f0f0;box-shadow:none}.CategorieTxt[data-v-d28244c2]{font-family:Open Sans;font-size:11pt}.CatImg[data-v-d28244c2]{width:15px;height:15px}.CatSec[data-v-d28244c2]{background-color:#f9f9f9;border-radius:5px}.CatTxt[data-v-d28244c2]{font-family:Open Sans,sans-serif;font-size:13pt;color:#231942}[data-v-d28244c2]::placeholder{padding-left:10px}.search[data-v-d28244c2]{border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.ProductsForm[data-v-d28244c2],.search[data-v-d28244c2]{background-color:#f9f9f9;border:1px solid #ebebeb}.ProductsForm[data-v-d28244c2]{min-height:50px}.ProductTitle[data-v-d28244c2]{color:#055452;font-family:Open Sans;font-weight:600;font-size:12pt;line-height:1.23}.starbi[data-v-d28244c2]{color:#ff6565}.ResultsTxt[data-v-d28244c2]{font-family:Open Sans;font-size:12pt;color:#231942}.KandakaMail[data-v-d28244c2]{color:#055452}.accordion-button[data-v-d28244c2]{color:#000;font-family:Open Sans;font-weight:600;font-size:12pt;text-align:left}.accordion-body[data-v-d28244c2]{font-family:Open Sans;font-size:10pt;color:#000}.accordion-button[data-v-d28244c2]:not(.collapsed){background-color:#e99d7b;color:#055452;font-family:Open Sans;font-weight:600;font-size:12pt}.accordion-button[data-v-d28244c2]:after{margin-right:0!important;background-image:url("+v+")}.FaqDesc[data-v-d28244c2]{font-size:10pt;line-height:1.5}.faq[data-v-d28244c2],.FaqDesc[data-v-d28244c2]{font-family:Open Sans;color:#000}.faq[data-v-d28244c2]{font-size:22pt;font-weight:700;font-size:16pt}.DescTitle[data-v-d28244c2]{color:#055452;font-size:14pt;font-weight:600}.Desc[data-v-d28244c2],.DescTitle[data-v-d28244c2]{font-family:Open Sans}.Desc[data-v-d28244c2]{font-size:11pt;color:#707070}.PageBkg[data-v-d28244c2]{background-image:url("+f+");background-size:cover;background-position:top;background-repeat:no-repeat}.PageTitle[data-v-d28244c2]{font-family:Open Sans;font-size:18pt;font-weight:600;color:#231942}.BroadHome[data-v-d28244c2],.BroadSub[data-v-d28244c2]{color:#055452;font-family:Open Sans;font-weight:600;line-height:1.25;font-size:12pt}",""]),t.exports=d},794:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"PageBkg"},[e("div",{staticClass:"container px-4 px-md-4 px-lg-4 pt-4"},[e("div",{staticClass:"d-flex flex-row"},[e("p",{staticClass:"BroadHome"},[t._v("Home")]),t._v(" "),e("p",{staticClass:"px-2"},[t._v("/")]),t._v(" "),e("p",{staticClass:"BroadSub"},[t._v("Products")])])]),t._v(" "),e("div",{staticClass:"container px-4 px-md-4 px-lg-4 pb-3"},[e("div",{staticClass:"d-flex flex-row justify-content-between"},[e("p",{staticClass:"PageTitle"},[t._v("Products")]),t._v(" "),e("p",{staticClass:"ResultsTxt"},[t._v("Showing 09 Results")])])]),t._v(" "),e("div",{staticClass:"container px-4 px-md-4 px-lg-4"},[e("div",{staticClass:"row gx-5"},[e("div",{staticClass:"col-lg-4 div col-md-4 pb-4 py-md-0 py-lg-0"},[e("div",{staticClass:"input-group rounded"},[e("input",{staticClass:"ProductsForm form-control rounded",attrs:{type:"search",placeholder:"Search Here","aria-label":"Search","aria-describedby":"search-addon"}}),t._v(" "),e("span",{staticClass:"input-group-text search",attrs:{id:"search-addon"}},[e("i",{staticClass:"bi bi-search"})])]),t._v(" "),e("section",{staticClass:"CatSec mt-4 py-2 px-4"},[e("div",{staticClass:"d-flex flex-row align-items-center py-3"},[e("img",{staticClass:"CatImg",attrs:{src:o(728),alt:"categorie"}}),t._v(" "),e("p",{staticClass:"px-2 CatTxt m-0"},[t._v(" Categories")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("p",{staticClass:"CategorieTxt"},[t._v("Accesories")]),t._v(" "),e("p",[t._v("(5)")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"pt-3 d-flex align-items-center justify-content-between"},[e("p",{staticClass:"CategorieTxt"},[t._v("Face care")]),t._v(" "),e("p",[t._v("(5)")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"pt-3 d-flex align-items-center justify-content-between"},[e("p",{staticClass:"CategorieTxt"},[t._v("Lip care")]),t._v(" "),e("p",[t._v("(5)")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"pt-3 d-flex align-items-center justify-content-between"},[e("p",{staticClass:"CategorieTxt"},[t._v("Skin care")]),t._v(" "),e("p",[t._v("(5)")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"pt-3 d-flex align-items-center justify-content-between"},[e("p",{staticClass:"CategorieTxt"},[t._v("Nail care")]),t._v(" "),e("p",[t._v("(5)")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"pt-3 d-flex align-items-center justify-content-between"},[e("p",{staticClass:"CategorieTxt"},[t._v("Blusher")]),t._v(" "),e("p",[t._v("(5)")])])]),t._v(" "),e("section",{staticClass:"CatSec mt-4 py-2 px-4"},[e("div",{staticClass:"d-flex flex-row align-items-center py-3"},[e("img",{staticClass:"CatImg",attrs:{src:o(728),alt:"categorie"}}),t._v(" "),e("p",{staticClass:"px-2 CatTxt m-0"},[t._v("Popular Tags")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center"},[e("button",{staticClass:"mt-3 mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("Beauty")]),t._v(" "),e("button",{staticClass:"mt-3 mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("MakeupArtist")])]),t._v(" "),e("div",{staticClass:"py-3 d-flex align-items-center justify-content-center"},[e("button",{staticClass:"mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("Makeup")]),t._v(" "),e("button",{staticClass:"mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("Hair")]),t._v(" "),e("button",{staticClass:"mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("Nails")])]),t._v(" "),e("div",{staticClass:"pb-3 d-flex align-items-center justify-content-center"},[e("button",{staticClass:"mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("Hairstyle")]),t._v(" "),e("button",{staticClass:"mx-2 btn btn-sm btn-light btn-rounded",attrs:{type:"button"}},[t._v("Skincare")])])])]),t._v(" "),e("div",{staticClass:"col-lg-8 div col-md-8"},[e("div",{staticClass:"container px-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-lg-4 col-md-4"},[e("img",{staticClass:"pb-2 w-100",attrs:{src:o(755),alt:"ProductThree"}}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star starbi"}),t._v(" "),e("p",{staticClass:"pt-2 ProductTitle"},[t._v("Sella body butter")]),t._v(" "),e("p",{staticClass:"ProductTitle"},[t._v("$350.00")])]),t._v(" "),e("div",{staticClass:"col-6 col-lg-4 col-md-4"},[e("img",{staticClass:"pb-2 w-100",attrs:{src:o(756),alt:"ProductOne"}}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star starbi"}),t._v(" "),e("p",{staticClass:"pt-2 ProductTitle"},[t._v("Sella body butter")]),t._v(" "),e("p",{staticClass:"ProductTitle"},[t._v("$350.00")])]),t._v(" "),e("div",{staticClass:"col-6 col-lg-4 col-md-4"},[e("img",{staticClass:"pb-2 w-100",attrs:{src:o(757),alt:"ProductTwo"}}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star starbi"}),t._v(" "),e("i",{staticClass:"bi bi-star starbi"}),t._v(" "),e("p",{staticClass:"pt-2 ProductTitle"},[t._v("Sella body butter")]),t._v(" "),e("p",{staticClass:"ProductTitle"},[t._v("$350.00")])])])])])])])])}],r=o(687),c=o(394),l={components:{TheHeader:r.a,TheFooter:c.a}},d=(o(758),o(102)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("TheHeader"),t._v(" "),t._m(0),t._v(" "),e("TheFooter")],1)}),n,!1,null,"d28244c2",null);e.default=component.exports}}]);