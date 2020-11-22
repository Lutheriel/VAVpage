import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// axios.defaults.baseURL = 'process.env.HEROKU_APP_NAME';

new Vue({
  render: (h) => h(App),
}).$mount("#app");
