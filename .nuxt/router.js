import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _097f9d43 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _16853285 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _6e47f756 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _1068461f = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _3d7d3ac4 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _2b48c59f = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _3866d6b8 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _4385fbe4 = () => interopDefault(import('../pages/supports/index.vue' /* webpackChunkName: "pages/supports/index" */))
const _1003c254 = () => interopDefault(import('../pages/admin/comments/index.vue' /* webpackChunkName: "pages/admin/comments/index" */))
const _67d92856 = () => interopDefault(import('../pages/admin/contact/index.vue' /* webpackChunkName: "pages/admin/contact/index" */))
const _31c8f511 = () => interopDefault(import('../pages/admin/contact/index/_slug.vue' /* webpackChunkName: "pages/admin/contact/index/_slug" */))
const _766d5d61 = () => interopDefault(import('../pages/admin/discount/index.vue' /* webpackChunkName: "pages/admin/discount/index" */))
const _22dc91c2 = () => interopDefault(import('../pages/admin/login/index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _613f5b45 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _761229c4 = () => interopDefault(import('../pages/admin/products/index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _48152baf = () => interopDefault(import('../pages/admin/subadmin/index.vue' /* webpackChunkName: "pages/admin/subadmin/index" */))
const _546f6e5d = () => interopDefault(import('../pages/admin/tickets/index.vue' /* webpackChunkName: "pages/admin/tickets/index" */))
const _40b00a0b = () => interopDefault(import('../pages/profile/billing/index.vue' /* webpackChunkName: "pages/profile/billing/index" */))
const _60331026 = () => interopDefault(import('../pages/profile/cart/index.vue' /* webpackChunkName: "pages/profile/cart/index" */))
const _bbe9e70c = () => interopDefault(import('../pages/profile/comments/index.vue' /* webpackChunkName: "pages/profile/comments/index" */))
const _ab8e32e0 = () => interopDefault(import('../pages/profile/edit/index.vue' /* webpackChunkName: "pages/profile/edit/index" */))
const _5682122a = () => interopDefault(import('../pages/profile/orders/index.vue' /* webpackChunkName: "pages/profile/orders/index" */))
const _45587f52 = () => interopDefault(import('../pages/profile/saved/index.vue' /* webpackChunkName: "pages/profile/saved/index" */))
const _2ceaf735 = () => interopDefault(import('../pages/products/_products.vue' /* webpackChunkName: "pages/products/_products" */))
const _4d7684cf = () => interopDefault(import('../pages/supports/_id/index.vue' /* webpackChunkName: "pages/supports/_id/index" */))
const _7799fcf6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _097f9d43,
    name: "about"
  }, {
    path: "/admin",
    component: _16853285,
    name: "admin"
  }, {
    path: "/contact",
    component: _6e47f756,
    name: "contact"
  }, {
    path: "/login",
    component: _1068461f,
    name: "login"
  }, {
    path: "/products",
    component: _3d7d3ac4,
    name: "products"
  }, {
    path: "/profile",
    component: _2b48c59f,
    name: "profile"
  }, {
    path: "/signup",
    component: _3866d6b8,
    name: "signup"
  }, {
    path: "/supports",
    component: _4385fbe4,
    name: "supports"
  }, {
    path: "/admin/comments",
    component: _1003c254,
    name: "admin-comments"
  }, {
    path: "/admin/contact",
    component: _67d92856,
    name: "admin-contact",
    children: [{
      path: ":slug?",
      component: _31c8f511,
      name: "admin-contact-index-slug"
    }]
  }, {
    path: "/admin/discount",
    component: _766d5d61,
    name: "admin-discount"
  }, {
    path: "/admin/login",
    component: _22dc91c2,
    name: "admin-login"
  }, {
    path: "/admin/orders",
    component: _613f5b45,
    name: "admin-orders"
  }, {
    path: "/admin/products",
    component: _761229c4,
    name: "admin-products"
  }, {
    path: "/admin/subadmin",
    component: _48152baf,
    name: "admin-subadmin"
  }, {
    path: "/admin/tickets",
    component: _546f6e5d,
    name: "admin-tickets"
  }, {
    path: "/profile/billing",
    component: _40b00a0b,
    name: "profile-billing"
  }, {
    path: "/profile/cart",
    component: _60331026,
    name: "profile-cart"
  }, {
    path: "/profile/comments",
    component: _bbe9e70c,
    name: "profile-comments"
  }, {
    path: "/profile/edit",
    component: _ab8e32e0,
    name: "profile-edit"
  }, {
    path: "/profile/orders",
    component: _5682122a,
    name: "profile-orders"
  }, {
    path: "/profile/saved",
    component: _45587f52,
    name: "profile-saved"
  }, {
    path: "/products/:products",
    component: _2ceaf735,
    name: "products-products"
  }, {
    path: "/supports/:id",
    component: _4d7684cf,
    name: "supports-id"
  }, {
    path: "/",
    component: _7799fcf6,
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
