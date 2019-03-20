import { Action, ReduxAction } from "../types/ReduxAction";

const initialState = {
    searchResult: []
}

function rootReducer(state: any = initialState, action: Action): any {
    console.log('rootReducer', state, action);
    switch(action.type) {
        case ReduxAction.SEARCH_PROPERTY: 
        return {
            searchResult: action.searchResult.posts
        };        
    }
    return state; 
}

export {
    rootReducer
}