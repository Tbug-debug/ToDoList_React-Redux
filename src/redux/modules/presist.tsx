import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todo from "./todo";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};

export const rootReducer = combineReducers({
  todo,
});

export default persistReducer(persistConfig, rootReducer);
