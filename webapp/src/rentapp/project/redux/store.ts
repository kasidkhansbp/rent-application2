import {createStore} from 'redux';
import { rootReducer } from './reducers';

const AppStore = createStore(rootReducer);

export {
    AppStore
}