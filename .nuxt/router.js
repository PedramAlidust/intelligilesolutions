import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4fdae560 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _6bbfa04e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _51039557 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _0b7b50fa = () => interopDefault(import('..\\pages\\comments\\index.vue' /* webpackChunkName: "pages/comments/index" */))
const _0a15ca1d = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _3362af2c = () => interopDefault(import('..\\pages\\f&q\\index.vue' /* webpackChunkName: "pages/f&q/index" */))
const _a3820018 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _12b13d9c = () => interopDefault(import('..\\pages\\orders\\index.vue' /* webpackChunkName: "pages/orders/index" */))
const _1fa89d03 = () => interopDefault(import('..\\pages\\privacypolicy\\index.vue' /* webpackChunkName: "pages/privacypolicy/index" */))
const _5600de13 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _25a27618 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _243e8216 = () => interopDefault(import('..\\pages\\saved\\index.vue' /* webpackChunkName: "pages/saved/index" */))
const _03fef5c2 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _111040f3 = () => interopDefault(import('..\\pages\\supports\\index.vue' /* webpackChunkName: "pages/supports/index" */))
const _6969195a = () => interopDefault(import('..\\pages\\admin\\comments\\index.vue' /* webpackChunkName: "pages/admin/comments/index" */))
const _2eb3f166 = () => interopDefault(import('..\\pages\\admin\\contact\\index.vue' /* webpackChunkName: "pages/admin/contact/index" */))
const _5d02f9d8 = () => interopDefault(import('..\\pages\\admin\\contact\\index\\_slug.vue' /* webpackChunkName: "pages/admin/contact/index/_slug" */))
const _5f9a4026 = () => interopDefault(import('..\\pages\\admin\\discount\\index.vue' /* webpackChunkName: "pages/admin/discount/index" */))
const _6b72acc9 = () => interopDefault(import('..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _75b0c02c = () => interopDefault(import('..\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _3384db5f = () => interopDefault(import('..\\pages\\admin\\subadmin\\index.vue' /* webpackChunkName: "pages/admin/subadmin/index" */))
const _56332782 = () => interopDefault(import('..\\pages\\admin\\tickets\\index.vue' /* webpackChunkName: "pages/admin/tickets/index" */))
const _210e61aa = () => interopDefault(import('..\\pages\\profile\\edit\\index.vue' /* webpackChunkName: "pages/profile/edit/index" */))
const _7fa3f402 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _22cca7f2 = () => interopDefault(import('..\\pages\\supports\\_id\\index.vue' /* webpackChunkName: "pages/supports/_id/index" */))
const _81406492 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4fdae560,
    name: "about"
  }, {
    path: "/admin",
    component: _6bbfa04e,
    name: "admin"
  }, {
    path: "/cart",
    component: _51039557,
    name: "cart"
  }, {
    path: "/comments",
    component: _0b7b50fa,
    name: "comments"
  }, {
    path: "/contact",
    component: _0a15ca1d,
    name: "contact"
  }, {
    path: "/f%26q",
    component: _3362af2c,
    name: "f&q"
  }, {
    path: "/login",
    component: _a3820018,
    name: "login"
  }, {
    path: "/orders",
    component: _12b13d9c,
    name: "orders"
  }, {
    path: "/privacypolicy",
    component: _1fa89d03,
    name: "privacypolicy"
  }, {
    path: "/products",
    component: _5600de13,
    name: "products"
  }, {
    path: "/profile",
    component: _25a27618,
    name: "profile"
  }, {
    path: "/saved",
    component: _243e8216,
    name: "saved"
  }, {
    path: "/signup",
    component: _03fef5c2,
    name: "signup"
  }, {
    path: "/supports",
    component: _111040f3,
    name: "supports"
  }, {
    path: "/admin/comments",
    component: _6969195a,
    name: "admin-comments"
  }, {
    path: "/admin/contact",
    component: _2eb3f166,
    name: "admin-contact",
    children: [{
      path: ":slug?",
      component: _5d02f9d8,
      name: "admin-contact-index-slug"
    }]
  }, {
    path: "/admin/discount",
    component: _5f9a4026,
    name: "admin-discount"
  }, {
    path: "/admin/orders",
    component: _6b72acc9,
    name: "admin-orders"
  }, {
    path: "/admin/products",
    component: _75b0c02c,
    name: "admin-products"
  }, {
    path: "/admin/subadmin",
    component: _3384db5f,
    name: "admin-subadmin"
  }, {
    path: "/admin/tickets",
    component: _56332782,
    name: "admin-tickets"
  }, {
    path: "/profile/edit",
    component: _210e61aa,
    name: "profile-edit"
  }, {
    path: "/products/:product",
    component: _7fa3f402,
    name: "products-product"
  }, {
    path: "/supports/:id",
    component: _22cca7f2,
    name: "supports-id"
  }, {
    path: "/",
    component: _81406492,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
