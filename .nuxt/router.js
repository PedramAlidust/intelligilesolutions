import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _531c959c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _3eccf7cc = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _32f8f726 = () => import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */).then(m => m.default || m)
const _30fba614 = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _4489cac1 = () => import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */).then(m => m.default || m)



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
			component: _531c959c,
			name: "index"
		},
		{
			path: "/about",
			component: _3eccf7cc,
			name: "about"
		},
		{
			path: "/contact",
			component: _32f8f726,
			name: "contact"
		},
		{
			path: "/login",
			component: _30fba614,
			name: "login"
		},
		{
			path: "/signup",
			component: _4489cac1,
			name: "signup"
		}
    ],
    
    
    fallback: false
  })
}
