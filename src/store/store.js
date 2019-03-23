import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import beverages from './reducers/beverages';
import dashboard from './reducers/dashboard';

const rootReducer = combineReducers({
	beverages,
	dashboard,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
