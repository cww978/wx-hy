import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  // 拦截跳转
  if (store.getters['user/signin']) {
    next()
  } else if (to.path == '/signin') {
    if (to.query.meetingId) {
      next({ query: { meetingId: to.query.meetingId } })
    } else {
      next('/error')
    }
  } else {
    if (to.path === '/error') {
      next()
    } else {
      next('/error')
    }
  }
})
