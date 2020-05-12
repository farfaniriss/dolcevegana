import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";

import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://localhost:3000";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.filter("formatNumber", function(value: number) {
  return value.toFixed(2);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
