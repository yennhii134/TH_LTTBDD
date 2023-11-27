import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice'

const store = configureStore({
    reducer : reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
})
export default store;