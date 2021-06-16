import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    invoiceListReducer
} from './reducers/invoiceReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
    invoiceList: invoiceListReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
