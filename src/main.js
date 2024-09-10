import "./assets/scss/main.scss";
import './assets/icons/style.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import $i18n from "@/plugins/i18n";
import Antd from "ant-design-vue";
import Vue3Marquee from 'vue3-marquee'
import "ant-design-vue/dist/reset.css";
import './assets/fonts/style.css'
// import axios from "@/plugins/axios";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(Antd);
app.use(Vue3Marquee);
app.use($i18n);
app.use(createPinia());
app.use(router);
app.mount("#app");
