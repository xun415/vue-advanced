import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem, fetchList } from "../api";

export default {
    // promise
    // FETCH_NEWS({ commit }) { // mutation에 접근할 수 있도록 하는 매개변수
    //     return fetchNewsList()
    //         .then((response) => {
    //             commit('SET_NEWS',response.data);
    //             return response;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // },
    // async
     async FETCH_NEWS({ commit }) { // mutation에 접근할 수 있도록 하는 매개변수
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);

        return response;
    },
    async FETCH_JOBS({ commit }) {
         try {
             const response = await fetchJobsList();
             commit('SET_JOBS', response.data);
             return response;
         } catch (err) {
             console.log(err);
         }

    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data)
        return response;

    },
    async FETCH_USER({commit}, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data);
        return response;

    },
    async FETCH_ITEM({commit}, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST( {commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },
}