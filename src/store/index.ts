import persistStore from "redux-persist/es/persistStore";
import { store } from "./storeConfig";

export * from "./storeConfig";
export * from "./api";

export const persistor = persistStore(store);
