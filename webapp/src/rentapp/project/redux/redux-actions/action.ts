import { Action, ReduxAction } from "../../types/ReduxAction";

function addSearchResult(searchResult: Array<any>): Action {
    return {
        type: ReduxAction.SEARCH_PROPERTY,
        searchResult
    }
}

export {
    addSearchResult
}