import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/client/HomeView.vue";
import EconomicCalenderView from "@/views/client/EconomicCalenderView.vue";
import PoliticaView from "@/views/client/PoliticaView.vue";
import LoginView from "@/views/client/LoginView.vue";
import CoursesView from "@/views/client/СoursesView.vue";
import AboutView from "@/views/client/AboutView.vue";
import Application from "@/views/client/Application.vue";
import Settings from "@/views/admin/Settings.vue";
import RequestListView from "@/views/admin/RequestListView.vue";
import RequestView from "@/views/admin/RequestView.vue";
import CommentsListView from "@/views/admin/CommentsListView.vue";
import CommentsView from "@/views/admin/CommentsView.vue";
import { computed, ref } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home2",
      component: HomeView,
    },
    {
      path: "/economic-calendar",
      name: "economic-calendar",
      component: EconomicCalenderView,
    },
    {
      path: "/privacy_policy",
      name: "Privacy Policy",
      component: PoliticaView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/courses",
      name: "Сourses",
      component: CoursesView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/application",
      name: "Application",
      component: Application,
    },

    {
      path: "/admin",
      name: "Dashboard",
      // component: () => import('../views/admin/DashboardView.vue')
      redirect: (to) => {
        return { path: "/admin/request" };
      },
    },
    {
      path: "/admin/settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/admin/request",
      name: "RequestList",
      component: RequestListView,
    },
    {
      path: "/admin/request/:number",
      name: "Request",
      component: RequestView,
    },
    {
      path: "/admin/feedback",
      name: "CommentsList",
      component: CommentsListView,
    },
    {
      path: "/admin/feedback/:number",
      name: "Comment",
      component: CommentsView,
    },
  ],
});

router.beforeEach(async (to) => {
  const adminPage = [
    "Dashboard",
    "Settings",
    "RequestList",
    "Request",
    "Comment",
    "CommentsList",
  ];
  const authRequired = adminPage.includes(to.name);

  if (authRequired) {
    const response = await fetch("/api.php", {
      body: JSON.stringify({
        action: "checkMe",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    });

    try {
      const data = await response.json();
      if (data.type != "success") {
        return "/login";
      }
    } catch (e) {
      return "/login";
    }
  }
});

export default router;
