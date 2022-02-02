import Vue from 'vue';
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);
// vuex는 상태관리 도구. 상태: 여러 컴포넌트간에 공유되는 데이터 속성

export const store = new Vuex.Store({
    state :{
      news: [],
      jobs : [],
      ask : [],
    },
    getters : {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    actions,
    mutations,
});

