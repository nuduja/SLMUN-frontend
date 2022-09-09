import { configureStore, compose } from '@reduxjs/toolkit'
import clockSlice from '../reducers/clockSlice'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore({
  reducer: {
    clock: clockSlice
  },
  enhancers: composeEnhancers
})