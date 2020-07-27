import { createStore, combineReducers, applyMiddleware } from "redux";
import workerReducer from "../reducers/workerReducer";
import companyReducer from "../reducers/companyReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  workers: workerReducer,
  works: companyReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;