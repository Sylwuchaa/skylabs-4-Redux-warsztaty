import { combineReducers } from "redux";

import {commentsReducer} from "./commentsReducer";
import { usersReducer } from "./userReducer";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  users: usersReducer
});

