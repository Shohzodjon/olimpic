import "./assets/scss/main.scss";
import './assets/icons/style.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import $i18n from "@/plugins/i18n";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
// import axios from "@/plugins/axios";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(Antd);
app.use($i18n);
app.use(createPinia());
app.use(router);
app.mount("#app");
