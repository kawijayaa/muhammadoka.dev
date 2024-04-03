import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaRust, FaPython, CoGo } from "oh-vue-icons/icons";

addIcons(FaRust, FaPython, CoGo);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
