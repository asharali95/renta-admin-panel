import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import carReducer from "./cars/carReducer";
import orderReducer from "./orders/orderReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "car", "order"],
};
const rootReducer = combineReducers({
  car: carReducer,
  auth: authReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
