import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./AuthSlice";
import { combineReducers } from "@reduxjs/toolkit";
import listingSlice from "../Redux/ListingSlice";
import adminSlice from "./AdminSlice"
const rootReducers = combineReducers({
  auth: authSlice,
  listing: listingSlice,
  adminData: adminSlice
});

const persistConfigure = {
  key: "root",
  storage,
  whitelist: ["auth", "listing","adminData"],
};

const allPersistReducer = persistReducer(persistConfigure, rootReducers);
const store = configureStore({
  reducer: allPersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
