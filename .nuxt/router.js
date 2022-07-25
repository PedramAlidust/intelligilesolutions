import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3eccf7cc = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _24c1cd48 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0f22b649 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _66a4e91d = () => interopDefault(import('../pages/comments/index.vue' /* webpackChunkName: "pages/comments/index" */))
const _32f8f726 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _30fba614 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _f344bf64 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _66995ee6 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _b8f75a94 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _0c58de94 = () => interopDefault(import('../pages/saved/index.vue' /* webpackChunkName: "pages/saved/index" */))
const _4489cac1 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _5a87dca6 = () => interopDefault(import('../pages/supports/index.vue' /* webpackChunkName: "pages/supports/index" */))
const _cf1936e4 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _9f2df666 = () => interopDefault(import('../pages/admin/products/index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _fb27f290 = () => interopDefault(import('../pages/admin/subadmin/index.vue' /* webpackChunkName: "pages/admin/subadmin/index" */))
const _03bc8e34 = () => interopDefault(import('../pages/admin/tickets/index.vue' /* webpackChunkName: "pages/admin/tickets/index" */))
const _3d26204e = () => interopDefault(import('../pages/profile/edit/index.vue' /* webpackChunkName: "pages/profile/edit/index" */))
const _f6aae3d0 = () => interopDefault(import('../pages/supports/_id/index.vue' /* webpackChunkName: "pages/supports/_id/index" */))
const _531c959c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3eccf7cc,
    name: "about"
  }, {
    path: "/admin",
    component: _24c1cd48,
    name: "admin"
  }, {
    path: "/cart",
    component: _0f22b649,
    name: "cart"
  }, {
    path: "/comments",
    component: _66a4e91d,
    name: "comments"
  }, {
    path: "/contact",
    component: _32f8f726,
    name: "contact"
  }, {
    path: "/login",
    component: _30fba614,
    name: "login"
  }, {
    path: "/orders",
    component: _f344bf64,
    name: "orders"
  }, {
    path: "/products",
    component: _66995ee6,
    name: "products"
  }, {
    path: "/profile",
    component: _b8f75a94,
    name: "profile"
  }, {
    path: "/saved",
    component: _0c58de94,
    name: "saved"
  }, {
    path: "/signup",
    component: _4489cac1,
    name: "signup"
  }, {
    path: "/supports",
    component: _5a87dca6,
    name: "supports"
  }, {
    path: "/admin/orders",
    component: _cf1936e4,
    name: "admin-orders"
  }, {
    path: "/admin/products",
    component: _9f2df666,
    name: "admin-products"
  }, {
    path: "/admin/subadmin",
    component: _fb27f290,
    name: "admin-subadmin"
  }, {
    path: "/admin/tickets",
    component: _03bc8e34,
    name: "admin-tickets"
  }, {
    path: "/profile/edit",
    component: _3d26204e,
    name: "profile-edit"
  }, {
    path: "/supports/:id",
    component: _f6aae3d0,
    name: "supports-id"
  }, {
    path: "/",
    component: _531c959c,
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
