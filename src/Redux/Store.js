// 2 - Create Store
// 3 - Link React With Redux(store) >> index.js >> Provider



import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postssSlice";

//  الى عايز اشغلهمreducers كل ال configureStoreبكتب جوه 
// reducer : {} دى بكتب جواها كل اسماء الرديوسر

// posts >> refer to slice name in postSlice & named the reducer with same name
export const Store = configureStore({
    reducer: {
        posts: postsSlice  // Correctly reference the reducer
    },
});

// reducer is a function takes 2 params (action , state) 
// to update or change state value
// and state changes according to action 


// reducer : is a pure function that takes the current state and 
// an action as input and returns a new state. It's the 
// heart of state management in Redux applications.