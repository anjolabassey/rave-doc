import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import InstantSearch from "vue-instantsearch";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Popover from "vue-js-popover";
import VueMeta from "vue-meta";
import vueScrollto from "vue-scrollto";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(InstantSearch);
Vue.use(Popover);
Vue.use(VueMeta);
Vue.use(vueScrollto);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
