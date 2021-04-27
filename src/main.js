import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SearchForm from "./components/forms/SearchForm.vue";
import BaseCard from "./components/layout/BaseCard.vue";
import BaseButton from "./components/layout/BaseButton.vue";
createApp(App).use(store).use(router).component('search-form', SearchForm).component('base-card', BaseCard).component('base-button', BaseButton).mount("#app");
