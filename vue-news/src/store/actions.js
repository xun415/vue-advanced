import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem } from "../api";

export default {
    FETCH_NEWS({ commit }) { // mutation에 접근할 수 있도록 하는 매개변수
        fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data)
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then( ({data}) => {
                commit('SET_ASK', data)
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
            .then( ({data}) => {
             commit('SET_USER', data)
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ITEM({commit}, id) {
        fetchCommentItem(id)
            .then(({data})=> {
              commit('SET_ITEM', data)
            })
            .catch(err => {
                console.log(err);
            })
    },
}