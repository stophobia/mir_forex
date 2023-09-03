import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/client/HomeView.vue')
    },
    {
      path: '/home',
      name: 'home2',
      component: () => import('../views/client/HomeView.vue')
    },
    {
      path: '/privacy_policy',
      name: 'Privacy Policy',
      component: () => import('../views/client/PoliticaView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/client/LoginView.vue')
    },
    {
      path: '/courses',
      name: 'Сourses',
      component: () => import('../views/client/СoursesView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/client/AboutView.vue')
    },

    {
      path: '/admin',
      name: 'Dashboard',
      // component: () => import('../views/admin/DashboardView.vue')
      redirect: to => {
        return { path: '/admin/request' }
      },
    },
    {
      path: '/admin/settings',
      name: 'Settings',
      component: () => import('../views/admin/Settings.vue')
    },
    {
      path: '/admin/request',
      name: 'RequestList',
      component: () => import('../views/admin/RequestListView.vue')
    },
    {
      path: '/admin/request/:number',
      name: 'Request',
      component: () => import('../views/admin/RequestView.vue')
    },
    {
      path: '/admin/feedback',
      name: 'CommentsList',
      component: () => import('../views/admin/CommentsListView.vue')
    },
    {
      path: '/admin/feedback/:number',
      name: 'Comment',
      component: () => import('../views/admin/CommentsView.vue')
    },
  ]
})

router.beforeEach(async (to) => {
  const adminPage = [
    'Dashboard', 'Settings', 'RequestList', 'Request', 'Comment', 'CommentsList'
  ];
  const authRequired = adminPage.includes(to.name);

  if ( authRequired ) {
    const response = await fetch("/api.php", {
      body: JSON.stringify({
          "action" : "checkMe"
      }),
      headers: {
          "Content-Type": "application/json"
      },
      method: "post"
    })

    try {
        const data = await response.json()
        if (data.type != 'success') {
          return '/login';
        }
    } catch(e) {
      return '/login';
    }
  }
});

export default router
