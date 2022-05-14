//Imports
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/style.scss";
import components from "./components";
import server from "./server/server.js";
//Create app
const app = createApp(App);

//Mount components
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).use(server);
app.mount("#app");
