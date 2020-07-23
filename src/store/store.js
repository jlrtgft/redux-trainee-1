import { createStore, combineReducers } from "redux";
import workerReducer from "../reducers/workerReducer";
import workReducer from "../reducers/workReducer";


const rootReducers = combineReducers({
  workers: workerReducer,
  work: workReducer
});

const store = createStore(rootReducers);

export default store;