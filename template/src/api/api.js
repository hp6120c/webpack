import 'babel-polyfill'
// import Vue from "vue/types";
import Vue from "vue"
import axios from 'axios/index'
import Router from "vue-router"
import RouterConfig from '@/router/index';
Vue.use(Router);

const router = new Router(RouterConfig);
var baseUrl = '';   // 开发环境用config下proxyTable的代理地址
var isPro = process.env.NODE_ENV === 'production'
if(isPro){
    baseUrl= ''  //生产环境下的地址
}



axios.defaults.timeout = 60000;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
console.log(window.location.href.indexOf('acceptInvitation'));
if(localStorage.token && localStorage.token!='undefined' && window.location.href.indexOf('acceptInvitation') == -1) {
   axios.defaults.headers.common['token'] = JSON.parse(localStorage.token);
}else {
  axios.defaults.headers.common['token'] = '7d1e52d3cf0142e19b5901eb1ef91372';
}
//创建一个axios实例
const instance = axios.create();
axios.interceptors.request.use = instance.interceptors.request.use;
//respone拦截器
instance.interceptors.response.use(
    response => {
      switch (response.data.status) {
     
        default:
     
          return response;
      }
    },
    error => { //默认除了0之外的都是错误的
     
      console.log(error);
      return Promise.reject(error);
    }
  );
  export default {
  //example get
  // getReportOverview(param) {
  //   return instance.get('/api/v2/cmcc/report/basic-resource/overview', {params: param})
  // },
  // example post
//   doorControModify(param) {
//     return instance.post('/guild/api/v2/access/control/modify', param)
//   },
  }