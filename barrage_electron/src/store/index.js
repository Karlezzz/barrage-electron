import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import barrage_chat from './Barrage/barrage_chat'
export default new Vuex.Store({
    modules:{
        barrage_chat
    }
})