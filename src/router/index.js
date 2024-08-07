import { createRouter, createWebHistory } from "vue-router";
import $i18n from "@/plugins/i18n";
const router = createRouter({
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:lang",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/HomePage.vue"),
        },
        {
          path: "committe",
          name: "committe",
          component: () => import("../views/CommitteePage.vue"),
        },
        {
          path: "olimpic-museum",
          name: "olimpic-museum",
          component: () => import("../views/OlimpicMuseum.vue"),
        },
        {
          path: "partners",
          name: "partners-page",
          component: () => import("../views/PartnersPage.vue"),
        },
        {
          path: "leader",
          name: "leader-page",
          component: () => import("../views/LeaderPage.vue"),
        },
        {
          path: "bos",
          name: "bos-page",
          component: () => import("../views/BosPage.vue"),
        },
        {
          path: "chief-secretary",
          name: "chief-secretary",
          component: () => import("../views/ChiefSecretary.vue"),
        },
        {
          path: "deputy",
          name: "deputy",
          component: () => import("../views/DeputyPage.vue"),
        },
        {
          path: "advisor",
          name: "advisor",
          component: () => import("../views/AdvisorPage.vue"),
        },
        {
          path: "executive",
          name: "executive",
          component: () => import("../views/ExecutiveCommittee.vue"),
        },
        {
          path: "department",
          name: "department",
          component: () => import("../views/DepartmentPage.vue"),
        },
        {
          path: "employees",
          name: "employees",
          component: () => import("../views/EmployPage.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  const locale = $i18n.global.locale.value;
  if (lang != locale) {
    const language = $i18n.global.locale.value || "oz";
    return next(`/${language}`);
  }
  next();
});
export default router;
