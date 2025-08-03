import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/users',
      component: () => import('../views/UsersView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      component: () => import('../views/RegistrationView.vue'),
    },
    {
      path: '/post',
      component: () => import('../views/NewArticleView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/post/:id',
      component: () => import('../views/ArticleView.vue'),
      props: true,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const userStore = useUserStore()

    if (userStore.isAuthorized) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
