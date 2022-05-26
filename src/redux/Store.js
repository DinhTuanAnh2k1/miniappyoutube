import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const Store = createStore(
	combineReducers(reducers),
)

export default Store;
