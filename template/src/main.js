{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import http from './api.js'
import router from './router'
import axios from 'axios'
{{#vuex}}
import Vuex from 'vuex';
import store from './store/store'
{{/vuex}}
{{#echarts}}
import echarts from 'echarts'
{{/echarts}}
{{#if_eq UIcomponent "element"||UIcomponent "bothUI"}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';{{/if_eq}}
{{#if_eq UIcomponent "iview"|| UIcomponent "bothUI"}}
import iView from 'iview';
import 'iview/dist/styles/iview.css';{{/if_eq}}
{{#animate}} 
import animated from 'animate.css'
Vue.use(animated){{/animate}} 
{{#vuex}}Vue.use(Vuex){{/vuex}}
{{#if_eq UIcomponent "iview"|| UIcomponent "bothUI"}}Vue.use(iView);{{/if_eq}}
{{#if_eq UIcomponent "element"|| UIcomponent "bothUI"}}Vue.use(ElementUI); {{/if_eq}}
{{#echarts}}Vue.prototype.$echarts = echarts{{/echarts}}
Vue.prototype.$http = http
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,
  {{#vuex}} store,{{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
