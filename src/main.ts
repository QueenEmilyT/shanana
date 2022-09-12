/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";
/* Theme variables */
import "./theme/variables.css";

import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
import { createStore } from "vuex";

import { StatusBar } from "@capacitor/status-bar";
import { IonicVue } from "@ionic/vue";

import App from "./App.vue";
import router from "./router";

const store = createStore({
    state () {
      return {
        count: 0,
        login_state:'home',
        user:null,
        role:'service',
       register:null,
       screen:'login',
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });

StatusBar.setBackgroundColor({
    color: '#4A235A'
});












const app = createApp(App)
  .use(store)
.use(VueAxios, axios)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
