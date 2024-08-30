import { createRouter, createWebHistory } from "vue-router";
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
        // {
        //   path: "olimpic-museum",
        //   name: "olimpic-museum",
        //   component: () => import("../views/OlimpicMuseum.vue"),
        // },
        {
          path: "partner",
          name: "partner",
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
          path: "interview-detail/:id",
          name: "interview-detail",
          component: () => import("../views/InterviewSlug.vue"),
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
          path: "licensees",
          name: "licensees",
          component: () => import("../views/ParijOlimpy.vue"),
        },
        {
          path: "licensees-slug/:id",
          name: "licensees-slug",
          component: () => import("../views/ParijOlimpicSlug.vue"),
        },
        {
          path: "news-slug/:id",
          name: "news-slug",
          component: () => import("../views/NewsSlug.vue"),
        },
        {
          path: "social-slug/:id",
          name: "social-slug",
          component: () => import("../views/SocialSlug.vue"),
        },
        // federation
        {
          path: "local-federation",
          name: "local-federation",
          component: () => import("../views/LocalFederation.vue"),
        },
        {
          path: "international",
          name: "international",
          component: () => import("../views/GlobalFederation.vue"),
        },
        //  games
        //  olimpic
        {
          path: "olimpic-game",
          name: "olimpic-game",
          component: () => import("../views/OlimpicGames.vue"),
        },
        {
          path: "static-page",
          name: "static-page",
          component: () => import("../views/OlimpicHistory.vue"),
        },

        {
          path: "olimpic-summer",
          name: "olimpic-summer",
          component: () => import("../views/OlimpicSummer.vue"),
        },
        {
          path: "olimpic-winter",
          name: "olimpic-winter",
          component: () => import("../views/OlimpicWinter.vue"),
        },
        {
          path: "olimpic-generation",
          name: "olimpic-generation",
          component: () => import("../views/OlimpicGeneration.vue"),
        },

        // asia

        {
          path: "asia-summer",
          name: "asia-summer",
          component: () => import("../views/AsiaSummer.vue"),
        },
        {
          path: "asia-winter",
          name: "asia-winter",
          component: () => import("../views/AsiaWinter.vue"),
        },
        {
          path: "olimpic-game-slug/:id",
          name: "olimpic-game-slug",
          component: () => import("../views/OlimpicGameSlug.vue"),
        },

        //   Jahon arenasi
        // xalqaro olimpiya qomitasi
        {
          path: "international-olimpic",
          name: "international-olimpic",
          component: () => import("../views/InternationalOlympicCommittee.vue"),
        },
        {
          path: "international-structure",
          name: "international-structure",
          component: () => import("../views/InterOlimpicStructure.vue"),
        },

        // gallery
        {
          path: "gallery",
          name: "gallery-page",
          component: () => import("../views/MediaGallery.vue"),
        },
        {
          path: "gallery-slug/:id",
          name: "gallery-slug",
          component: () => import("../views/GallerySlug.vue"),
        },
        {
          path: "video",
          name: "video-page",
          component: () => import("../views/VideoPage.vue"),
        },
        {
          path: "video-slug/:id",
          name: "video-slug",
          component: () => import("../views/VideoSlug.vue"),
        },
        {
          path: "announce",
          name: "announce-page",
          component: () => import("../views/Announcement.vue"),
        },
        {
          path: "announce-slug/:id",
          name: "announce-slug",
          component: () => import("../views/AnnounceSlug.vue"),
        },
        {
          path: "search",
          name: "search",
          component: () => import("../views/SearchPage.vue"),
        },
        {
          path: "uz-olimpic/:id",
          name: "uzolimpic-games",
          component: () => import("../views/UzOlimpicGames.vue"),
        },

        //
        {
          path: "global-great",
          name: "global-great",
          component: () => import("../views/GlobalGreat.vue"),
        },
        {
          path: "greetings-slug/:id",
          name: "great-slug",
          component: () => import("../views/GlobalSlug.vue"),
        },
        {
          path: "global-matirial",
          name: "global-matirial",
          component: () => import("../views/GlobalMatirials.vue"),
        },
        {
          path: "materials-slug/:id",
          name: "matirial-slug",
          component: () => import("../views/GlobalMatirialSlug.vue"),
        },
        {
          path: "global-regulation",
          name: "global-regulation",
          component: () => import("../views/GlobalRegulation.vue"),
        },
        {
          path: "regulations-slug/:id",
          name: "regulation-slug",
          component: () => import("../views/GlobalRegulationSlug.vue"),
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  const storedLocale = localStorage.getItem("locale");

  if (storedLocale && lang !== storedLocale) {
    return next({
      path: `/${storedLocale}${to.path.slice(3)}`,
      query: to.query, 
    });
  }
  if (!lang) {
    return next({
      path: `/${storedLocale || "oz"}`,
      query: to.query, 
    });
  }
  next();
});

export default router;
