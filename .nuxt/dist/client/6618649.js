!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black",Blue:"Blue",Bold:"Bold","Choose heading":"Choose heading","Dim grey":"Dim grey","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Editor toolbar":"Editor toolbar",Green:"Green",Grey:"Grey",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block",Italic:"Italic","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Next:"Next",Orange:"Orange",Paragraph:"Paragraph",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Select all":"Select all","Show more items":"Show more items",Strikethrough:"Strikethrough",Turquoise:"Turquoise",Underline:"Underline",Undo:"Undo",White:"White",Yellow:"Yellow"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1091:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"col-lg-6 col-md-6 LeftBkg text-center py-5"},[t("img",{staticClass:"w-100",attrs:{src:o(532),alt:"logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-row pb-4"},[e("p",{staticClass:"SignUpTxt"},[t._v("Need an account?")]),t._v(" "),e("a",{attrs:{href:"/signup"}},[e("p",{staticClass:"SignUpTxt pe-2 text-muted"},[t._v("Sign Up")])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center mt-5"},[t("a",{staticClass:"btn GoogleBtn",attrs:{role:"button"}},[t("img",{staticClass:"pe-2",attrs:{width:"40px",src:o(748)}}),this._v("\n                                      Continue with Google\n                                  ")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center py-2"},[t("img",{staticClass:"MobileLogo",attrs:{src:o(532),alt:"logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-row pb-4"},[e("p",{staticClass:"SignUpTxt"},[t._v("Need an account?")]),t._v(" "),e("a",{attrs:{href:"/signup"}},[e("p",{staticClass:"SignUpTxt pe-2 text-muted"},[t._v("Sign Up")])])])}],r=(o(119),o(14),o(67),o(6),o(165),o(50),o(169),o(68)),c=o(129);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{username:"",password:"",UsernameCheck:!1,PassCheck:!1}},methods:l(l({},Object(c.b)(["LoginUser"])),{},{FormSubmit:function(){this.username?this.UsernameCheck=!1:this.UsernameCheck=!0,this.password?this.PassCheck=!1:this.PassCheck=!0,this.username&&this.password&&this.LoginUser({username:this.username,password:this.password})}})},v=(o(987),o(89)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container-full background d-none d-md-block d-lg-block"},[e("div",{staticClass:"row gx-0"},[t._m(0),t._v(" "),e("div",{staticClass:"pt-5 col-lg-6 col-md-6 bg-white px-5"},[e("p",{staticClass:"LoginTitle text-center"},[t._v("Login")]),t._v(" "),e("p",{staticClass:"text-center text-muted"},[t._v("Please login to your account.")]),t._v(" "),e("form",{staticClass:"my-5",on:{submit:function(e){return e.preventDefault(),t.FormSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-outline mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Enter your username",type:"text",id:"input1"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t.UsernameCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty email Field")]):t._e()]),t._v(" "),e("div",{staticClass:"form-outline mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Password",type:"password",id:"input2"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.PassCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty Password Field")]):t._e()]),t._v(" "),e("p",{staticClass:"mb-4 text-muted"},[t._v("Forgot password?")]),t._v(" "),e("button",{staticClass:"btn BtnStyle btn-block mb-4 SubmitBtnStyle",attrs:{type:"submit"}},[t._v("\n                                      Continue\n                                  ")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"Devider"}),t._v(" "),e("p",{staticClass:"DeviderTxt text-muted text-center"},[t._v("\n                                      OR\n                                  ")]),t._v(" "),t._m(2)])])])]),t._v(" "),e("section",{staticClass:"d-md-none d-lg-none container MobileBkg pb-5"},[t._m(3),t._v(" "),e("div",{staticClass:"py-4 bg-white px-3 FormMobileBkgStyle"},[e("p",{staticClass:"mt-3 LoginTitle text-center"},[t._v("Login")]),t._v(" "),e("p",{staticClass:"text-center text-muted"},[t._v("Please login to your account.")]),t._v(" "),e("form",{staticClass:"my-4",on:{submit:function(e){return e.preventDefault(),t.FormSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-outline mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Enter your UserName",type:"text",id:"input1"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t.UsernameCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty email Field")]):t._e()]),t._v(" "),e("div",{staticClass:"form-outline mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Password",type:"password",id:"input2"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.PassCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty Password Field")]):t._e()]),t._v(" "),e("p",{staticClass:"mb-4 text-muted"},[t._v("Forgot password?")]),t._v(" "),e("button",{staticClass:"btn BtnStyle btn-block mb-4 SubmitBtnStyle",attrs:{type:"submit"}},[t._v("\n                                      Continue\n                                  ")]),t._v(" "),t._m(4)])])])])}),n,!1,null,"ddccc008",null);e.default=component.exports},748:function(t,e,o){t.exports=o.p+"img/GoogleIcon.6aa47a8.png"},750:function(t,e,o){t.exports=o.p+"img/LoginBkgPic.8184d67.jpeg"},942:function(t,e,o){var content=o(988);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("a3691d84",content,!0,{sourceMap:!1})},987:function(t,e,o){"use strict";o(942)},988:function(t,e,o){var n=o(36),r=o(295),c=o(750),d=n(!1),l=r(c);d.push([t.i,"body[data-v-ddccc008]{overflow-y:hidden!important}.FormMobileBkgStyle[data-v-ddccc008]{border-radius:15px}.MobileLogo[data-v-ddccc008]{width:70%}[data-v-ddccc008]::placeholder{color:#6e7689;opacity:1!important}.MobileBkg[data-v-ddccc008]{background-color:#055452;min-height:100vh}.GoogleBtn[data-v-ddccc008]{font-family:Open Sans;font-weight:600;font-size:12pt;text-transform:capitalize;box-shadow:none;border:1px solid #c9c6d1;padding:15px;width:100%}@media screen and (max-width:320px){.GoogleBtn[data-v-ddccc008]{font-size:8pt}}.Devider[data-v-ddccc008]{border-bottom:1px solid #e6e6e6}.DeviderTxt[data-v-ddccc008]{font-family:Open Sans;font-size:16px;background-color:#fff;width:50px;margin:-13px auto}.SignUpTxt[data-v-ddccc008]{color:#231942}.InputStyle[data-v-ddccc008],.SignUpTxt[data-v-ddccc008]{font-family:Open Sans;font-weight:600}.InputStyle[data-v-ddccc008]{padding:13px;font-size:14px;border:1.5px solid #c9c6d1;border-radius:10px;color:#6e7689}.background[data-v-ddccc008]{background-image:url("+l+");background-size:cover;background-position:50%;background-repeat:no-repeat;min-height:100vh;padding:4% 20%}.LeftBkg[data-v-ddccc008]{background-color:#055452}.LoginTitle[data-v-ddccc008]{font-family:Open Sans;font-weight:600;font-size:18pt}.BtnStyle[data-v-ddccc008]{background-color:#055452!important;color:#fff!important}.BtnStyle[data-v-ddccc008],.SubmitBtnStyle[data-v-ddccc008]{font-family:Open Sans;font-weight:600;font-size:12pt}.SubmitBtnStyle[data-v-ddccc008]{padding:18px;border-radius:8px;text-transform:capitalize}@media screen and (max-width:320px){.SubmitBtnStyle[data-v-ddccc008]{font-size:10pt;padding:15px}}",""]),t.exports=d}}]);