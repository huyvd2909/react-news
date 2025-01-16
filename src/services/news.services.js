import axios from "../plugins/axios";
import NewsAPI from "../plugins/newsapi";

export default {
    getAll: (param) =>  axios.get('/everything', {params: param}),
    getHeadlines: (param) => NewsAPI.v2.topHeadlines(param)
}