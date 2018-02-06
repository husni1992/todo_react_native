import { combineReducers } from "redux";

import auth from "./auth/auth.reducer";
import todo from "./todo/todo.reducer";

const rootReducer = combineReducers({
   auth,
   todo
});

export default rootReducer;
