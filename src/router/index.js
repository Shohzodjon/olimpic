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
        // qo'mita
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
        // rahbariyat
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
        // medical
        {
          path: "medical-center",
          name: "medical-center",
          component: () => import("../views/MedicalCenter.vue"),
        },
        {
          path: "rstiam-activity",
          name: "rstiam-activity",
          component: () => import("../views/RSTIAM.vue"),
        },
        {
          path: "federation-doctors",
          name: "federation-doctors",
          component: () => import("../views/FederationDoctors.vue"),
        },
        // news
        {
          path: "news",
          name: "news",
          component: () => import("../views/NewsPage.vue"),
        },
        {
          path: "sport-news",
          name: "sport-news",
          component: () => import("../views/SportNews.vue"),
        },
        {
          path: "interview",
          name: "interview",
          component: () => import("../views/InterviewPage.vue"),
        },
        {
          path: "open-data",
          name: "open-data",
          component: () => import("../views/OpenData.vue"),
        },
        {
          path: "state-execution",
          name: "state-execution",
          component: () => import("../views/StateExecution.vue"),
        },
        {
          path: "social-roller",
          name: "social-roller",
          component: () => import("../views/SocialRoller.vue"),
        },
        {
          path: "parij-olimpy",
          name: "parij-olimpy",
          component: () => import("../views/ParijOlimpy.vue"),
        },
        {
          path: "news-slug/:id",
          name: "news-slug",
          component: () => import("../views/NewsSlug.vue"),
        },
        // federation
        {
          path: "local-federation",
          name: "local-federation",
          component: () => import("../views/LocalFederation.vue"),
        },
        {
          path: "global-federation",
          name: "global-federation",
          component: () => import("../views/GlobalFederation.vue"),
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
