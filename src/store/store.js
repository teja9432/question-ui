import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@/reducer/appReducer";
import logger from "redux-logger";
const appStore=configureStore({
    reducer:{
        appReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)    
})
export default appStore;