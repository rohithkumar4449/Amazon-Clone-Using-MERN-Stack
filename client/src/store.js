import { applyMiddleware} from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootreducers from "./components/redux/reducers/main";
// import rootreducers from './components/redux/reducers/main';
// import rootreducers from "./components/redux/reducers/main";

const middleware=[thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;