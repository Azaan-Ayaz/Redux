import { combineReducers, createStore } from "redux";
import numberReducer from "../reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ numbers: numberReducer })
);

export const store = createStore(persistedReducer);
export const persistManager = persistStore(store);
