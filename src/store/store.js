import { createStore, combineReducers } from "redux";
import workerReducer from "../reducers/workerReducer";
import companyReducer from "../reducers/companyReducer";

const rootReducers = combineReducers({
  workers: workerReducer,
  works: companyReducer
});

const store = createStore(rootReducers);

export default store;