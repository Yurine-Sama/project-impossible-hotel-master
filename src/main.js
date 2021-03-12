import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import firebase from "firebase/app";
import Vuetify from "vuetify";
import("./assets/Styles/styles.css");

Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(firebase);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
