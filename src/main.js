import Vue from "vue";
import { store } from "./store";
import App from "./containers/App.vue";

Vue.config.productionTip = false;

new Vue({
  store: store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
