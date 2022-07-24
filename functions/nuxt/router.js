import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6c2c4e3e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _b29e8988 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _98935f04 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _ff7617fc = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _0060512f = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _7bea2ff4 = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _2309979e = () => import('../pages/admin/auth/PostList.vue' /* webpackChunkName: "pages/admin/auth/PostList" */).then(m => m.default || m)
const _210e70ae = () => import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */).then(m => m.default || m)
const _b8bf8426 = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)



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
			component: _6c2c4e3e,
			name: "index"
		},
		{
			path: "/about",
			component: _b29e8988,
			name: "about"
		},
		{
			path: "/admin",
			component: _98935f04,
			name: "admin"
		},
		{
			path: "/posts",
			component: _ff7617fc,
			name: "posts"
		},
		{
			path: "/admin/auth",
			component: _0060512f,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _7bea2ff4,
			name: "admin-new-post"
		},
		{
			path: "/admin/auth/PostList",
			component: _2309979e,
			name: "admin-auth-PostList"
		},
		{
			path: "/admin/:postId",
			component: _210e70ae,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _b8bf8426,
			name: "posts-id"
		}
    ],
    
    
    fallback: false
  })
}
