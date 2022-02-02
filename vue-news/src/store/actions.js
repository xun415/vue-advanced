import {fetchAskList, fetchJobsList, fetchNewsList} from "../api";

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
            .then(({data}) => {
                commit('SET_ASK', data)
            })
            .catch(err => {
                console.log(err);
            })
    }
}