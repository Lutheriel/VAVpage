import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = true;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = process.env.VUE_APP_API;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
