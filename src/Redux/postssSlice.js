// 4 - Create Slice .. contain actions & redux & initial state in 1 place

import { createSlice } from "@reduxjs/toolkit";

export const postsSlice  = createSlice({
    // slice name
    name: 'posts',

    initialState: {
        items: []
    },
    
    reducers: {

        // 5 - 1 : go to Post > Create 1st Hook
        // 5 - 2 : after fill inputs and click add post
        // Create Action Creator ... Will Recieve action object data
        // هتتبعت مع الاكشن هناadd post البيانات الى العميل هيكتبها ويدوس 
        // then Update State

        // 1st Action Creator
        // state عشان يغير قيمة(Title , Body)من فوق هنا والاكشن هيتبعت فى صورة state بياخد 
        // add payload to state > items:[] ... payload contain [title-body-id]
        addPost : function (state, action) {
            state.items.push(action.payload)
        },


        // element here refers to the post in every loop
        //  array اللى هى عبارة عن state هبعتله الاكشن عشان يغير ال 
        // العنصر اللى تم الضغط عليهid ويقارن 
        // بالعناصر كلها واحدج واحد لغاية ما يلاقى تطابق
        // وبالتالى ده العنصر المراد مسحه
        // لان على اساسه هيمسح البوستid الاكشن هنا عبارة عن 
        // فى الفيلتر لو الحالة ترو بضيف الايتم فى الاراى الجديدة
        //   Array بيشيل الايتم ده من ال false فى حالة الكوندشن 
        deletePost : function (state, action) {
            // filter:give a new array, so the old items array will be = the new array
            // when press [delete post] 
            state.items = state.items.filter((element) => element.id !== action.payload.id)
        },


        updatepost : function (state, action) {
            // for (let i = 0; i < state.items.length; i++) {
            //     if (state.items[i].id === action.payload.id) {
            //       state.items[i].title = action.payload.title;
            //       state.items[i].body = action.payload.body;
            //       break; // Exit the loop once the item is found
            //     }
            //   }
            
            // Consider returning a new state object for immutability (optional)
            // return { ...state, items: state.items.slice() };

            // or ------------- 

            const updatedItem = state.items.find(item => item.id === action.payload.id);
            if (updatedItem) {
                updatedItem.Title = action.payload.Title;
                updatedItem.Body = action.payload.Body;
            }

// find(item => ...): This method efficiently searches for the first item in state.items
//  where the id matches the payload's ID.

// if (updatedItem) ...: If a matching item is found (updatedItem is not undefined), 
// its Title and Body are updated.

// Immutability (Optional): You might want to create a new state object to
// maintain immutability. This ensures that the original state isn't directly modified.

//  You can achieve this by spreading the existing state and creating a copy of the 
// items array using slice().

              // Consider returning a new state object for immutability (optional)
              // return { ...state, items: state.items.slic
        }
    },
})

// Link reducer with postSlice 
export default postsSlice.reducer;

// Export addPost, ..., ... from postsSlice.actions
export const { addPost , deletePost , updatepost} = postsSlice.actions;













