import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "./reducers/TodoReducer";

const reducer = combineReducers({
  Todo: TodoReducer
});

const initialStore = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
