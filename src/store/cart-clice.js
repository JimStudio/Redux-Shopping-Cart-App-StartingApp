import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice[{
    name:'cart',
    initialState: {
        itemsList:[],
        totalQuantity:0,
        showCart: false,
    },
    reducers:{
        addToCart(state, action) {
            const newItem = action.payload;
            const existingitem = state.itemsList.find((item) => item.id ===newItem.id);
            if(existingitem){
                existingitem.quantity++;
                existingitem.price += newItem.price;
            }else{
                state.itemsList.push({
                    
                })
            }
        },
        removeFromCart(){},
        setShowCart(state){
            state.showCart = true;
        }
    }
}]