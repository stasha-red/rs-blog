import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/registration',
      component: () => import('../views/RegistrationView.vue'),
    },
    {
      path: '/post',
      component: () => import('../views/NewArticleView.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('../views/ArticleView.vue'),
    },
  ],
})

export default router
