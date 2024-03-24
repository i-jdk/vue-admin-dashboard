import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

// Initialize Netlify Identity
netlifyIdentityWidget.init();

// Intialize GoTure JS for Netlify
export const auth = new GoTrue({
    APIUrl: "https://i-jdk-vue-admin-dashboard.netlify.app/identity",
    setCookie: true
})

createApp(App).use(store).use(router).mount("#app");
