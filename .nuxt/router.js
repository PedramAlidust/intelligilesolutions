import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2d7ff469 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _0adbd527 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _ed14738c = () => import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */).then(m => m.default || m)
const _11c47e03 = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _46769483 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _62919b54 = () => import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */).then(m => m.default || m)
const _e2e673a8 = () => import('../pages/profile/edit/index.vue' /* webpackChunkName: "pages/profile/edit/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _2d7ff469,
			name: "index"
		},
		{
			path: "/about",
			component: _0adbd527,
			name: "about"
		},
		{
			path: "/contact",
			component: _ed14738c,
			name: "contact"
		},
		{
			path: "/login",
			component: _11c47e03,
			name: "login"
		},
		{
			path: "/profile",
			component: _46769483,
			name: "profile"
		},
		{
			path: "/signup",
			component: _62919b54,
			name: "signup"
		},
		{
			path: "/profile/edit",
			component: _e2e673a8,
			name: "profile-edit"
		}
    ],
    
    
    fallback: false
  })
}
