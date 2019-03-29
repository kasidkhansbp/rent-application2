import axios from 'axios';

function getSearchResult(searchText: string) {
    return axios.get(`http://localhost:3001/api/search?searchText=${searchText}`);
}

/**
 * TODO: requries login crendetials
 * @param ad ad to be saved
 */
function postAd(ad: any) {
    return axios.post('http://localhost:3001/api/post', ad);
}

export default {
    getSearchResult,
    postAd
}