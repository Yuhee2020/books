import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./reducers/appReducer";
import {booksReducer} from "./reducers/booksReducer";



export const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})