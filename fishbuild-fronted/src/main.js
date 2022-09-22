import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Fake3dImageEffect from "@luxdamore/vue-fake3d-image-effect";
import "@luxdamore/vue-fake3d-image-effect/dist/Fake3dImageEffect.css";
// main.js
import * as echarts from "echarts"
// import htmlToPdf from "../public/htmlToPdf"
import htmlToPdf from '@/components/utils/htmlToPdf'
// 适配rem
// import  '@/components/utils/rem.js'
import "lib-flexible-computer";
// import "@/components/utils/flexible";

Vue.use(htmlToPdf);


Vue.config.productionTip = false
Vue.use(Fake3dImageEffect);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
