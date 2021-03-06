import axios from "axios";

// HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정의
function fetchNewsList() {
    // return axios.get(config.baseUrl+'/news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}
async function fetchAskList() {
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch (err) {
        console.log(err);
    }
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(name) {
    return axios.get(`https://api.hnpwa.com/v0/user/${name}.json`);
}

function fetchCommentItem(id) {
    return axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
}