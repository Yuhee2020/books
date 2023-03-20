import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {setAppError, setLoading} from './appReducer'
import {BookType} from "../../api/booksApi/booksApi";


export const getBooksTC = createAsyncThunk(
    'books/getBooks',
    async (params, {dispatch,getState}) => {
        dispatch(setLoading(true))
        try {
            // const res = await authApi.login(params)
            //
            // localStorage.setItem('token', res.data.loggedUser.accessToken)
            // dispatch(setIsLogin(true))
            //
            // return res.data.loggedUser
        } catch (err: any) {
            dispatch(setAppError(err.response.data.message))
        } finally {
            dispatch(setLoading(false))
        }
    },
)


export const slice = createSlice({
    name: 'books',
    initialState: {
        books: [] as BookType[],
        totalBooks: null,
        selectedBook:null,
        maxResults:30,
        startIndex: 0,
        orderBy: "relevance",
        printType: "books",
        search:"",
    },
    reducers: {
        setBooks(state, action: PayloadAction<boolean>) {

        },
        setBook(state, action: PayloadAction<string>) {

        },

    },
    extraReducers: builder => {

    }
})

export const booksReducer = slice.reducer
export const {setBooks,setBook} = slice.actions
