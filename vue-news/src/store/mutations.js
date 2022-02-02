export default {

    SET_NEWS(state, news) { // state에 접근할 수 있도록 하는 매개변수
    state.news = news;
},
    SET_JOBS(state, jobs) {
    state.jobs = jobs;
},
    SET_ASK(state, ask) {
    state.ask = ask;
}

}