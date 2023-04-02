import { createApp } from "vue";
import Root from "./Root.vue";
import router from "./routes.js";

// import "./assets/main.css";

createApp(Root).use(router).mount("#app");
