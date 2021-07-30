import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rickAndMortyReducer from './reducers/rickAndMortyReducer';

const reducers = combineReducers({
  rickAndMortyStore: rickAndMortyReducer,
});

const Store = createStore(reducers, composeWithDevTools());

export default Store;
