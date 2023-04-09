import { createApp } from "vue";

import Root from "./Root.vue";
import router from "./routes.js";

import "./assets/app.css";

createApp(Root).use(router).mount("#app");
