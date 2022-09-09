import { createSlice } from '@reduxjs/toolkit'

export const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    seconds : 0,
},
  reducers: {

    setSeconds: (state, action) => {
        state.seconds = action.payload;
    },  
    }
})

// Action creators are generated for each case reducer function
export const {setSeconds} = clockSlice.actions

export default (clockSlice.reducer)