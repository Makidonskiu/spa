import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'spa',
    initialState: {
        spa: []
    },
    reducers: {
        inputText (state, action) {
            state.spa.push({
                text: action.payload.text
            })
        }
    }
})

export const { inputText } = searchSlice.actions;
export default searchSlice.reducer;