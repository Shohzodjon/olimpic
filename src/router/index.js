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
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  const locale=$i18n.global.locale.value;
  if (lang!=locale) {
    const language = $i18n.global.locale.value || 'oz'; 
    return next(`/${language}`);
  }
  next();
});
export default router;
