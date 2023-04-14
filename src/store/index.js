import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slic";
import cartSlice from "./cart-clice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    },
});

export default store;