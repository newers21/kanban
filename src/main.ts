import { createApp } from "vue";
import "./style.css";
import { router } from "./router/router";

import App from "./app/ui/App.vue";

createApp(App).use(router).mount("#app");
