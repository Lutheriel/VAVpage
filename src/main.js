import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";
import router from './router'

Vue.config.productionTip = true;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = process.env.VUE_APP_API + '/api';

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
