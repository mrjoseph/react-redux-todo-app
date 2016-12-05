import { createStore, combineReducers } from 'redux';
import reducer from './todo-app/reducer';
import counterReducer from './counter/reducer';
const rootReducer = combineReducers({reducer,counterReducer});
const store = createStore(rootReducer); 
export default store