import { createI18n } from "vue-i18n";
import ru from "@/locale/ru";
import en from "@/locale/en";
import oz from "@/locale/oz";
import uz from "@/locale/uz";
const lang = localStorage.getItem("locale");
const i18n = createI18n({
  locale: lang || "oz",
  legacy: false,
  globalInjection: true,
  silentFallbackWarn: true,
  compositionOnly: false,
  messages: {
    en,
    ru,
    uz,
    oz,
  },
});
export default i18n;
