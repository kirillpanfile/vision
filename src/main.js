//Imports
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/style.scss";
import components from "./components";

//Create app
const app = createApp(App);

//Mount components
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store);
app.mount("#app");
