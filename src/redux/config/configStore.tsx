import { combineReducers, legacy_createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import reducer from "../modules/todo";
import persist from "../modules/presist";

const rootReducer = combineReducers({
  reducer,
  persist,
});

export const store = legacy_createStore(rootReducer);

export const persistor = persistStore(store);

export type RooteState = ReturnType<typeof rootReducer>;

export default store;
