import axios from 'axios';

function getSearchResult(searchText: string) {
    return axios.get(`http://localhost:3001/api/search?searchText=${searchText}`);
}

export default {
    getSearchResult
}