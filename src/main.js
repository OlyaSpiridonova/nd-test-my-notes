import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "./components/ui/BaseButton";
import BaseDialog from "./components/ui/BaseDialog";

Vue.config.productionTip = false;

Vue.component("base-button", BaseButton);
Vue.component("base-dialog", BaseDialog);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
