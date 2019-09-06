import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './module1.js'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        module1:module1,
      
    }
  });