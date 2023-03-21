import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {setAppError, setLoading} from './appReducer'
import {booksApi, BookType, GetBooksParamsType} from "../../api/booksApi/booksApi";
import {StateType} from "../../hooks";
import {INITIAL_START_INDEX} from "../../constants/constants";


export const getBooksTC = createAsyncThunk(
    'books/getBooks',
    async (params, {dispatch, getState}) => {
        const state = getState() as StateType
        const {
            category,
            orderBy,
            searchText,
            maxResults,
            printType,
            startIndex
        } = state.books
        dispatch(setLoading(true))
        try {
            const params = {
                q: `${searchText}${category === "all" ? "" : ` subject:${category}`}`,
                orderBy,
                maxResults,
                printType,
                startIndex
            } as GetBooksParamsType
            const res = await booksApi.getBooks(params)
            return res.data
        } catch (err: any) {
            dispatch(setAppError(err.response.data.message))
            return err
        } finally {
            dispatch(setLoading(false))
        }
    },
)
export const getBookTC = createAsyncThunk(
    'books/getBook',
    async (params: string, {dispatch}) => {
        dispatch(setLoading(true))
        try {
            const res = booksApi.getBook(params)
            return res
        } catch (err: any) {
            dispatch(setAppError(err.response.data.message))
            return err
        } finally {
            dispatch(setLoading(false))
        }
    },
)


export const slice = createSlice({
    name: 'books',
    initialState: {
        books: [] as BookType[],
        book:null as null | BookType,
        totalBooks: 0,
        selectedBook: null,
        maxResults: 30,
        startIndex: 0,
        orderBy: "relevance",
        printType: "books",
        searchText: "",
        category: "all",
        isLoadingMore: false
    },
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.searchText = action.payload
            state.startIndex = INITIAL_START_INDEX
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
            state.startIndex = INITIAL_START_INDEX
        },
        setOrderBy(state, action: PayloadAction<string>) {
            state.orderBy = action.payload
            state.startIndex = INITIAL_START_INDEX
        },
        setStartIndex(state) {
            state.startIndex += state.maxResults
        },

    },
    extraReducers: builder => {
        builder.addCase(getBooksTC.fulfilled, (state, action) => {
            if (state.startIndex > 0) {
                state.books = [...state.books, ...action.payload.items]
            } else {
                state.books = action.payload.items
                state.totalBooks = action.payload.totalItems
            }
            state.isLoadingMore = !!state.books.length && state.books.length <= state.totalBooks;
        })
            .addCase(getBookTC.fulfilled,(state,action)=>{
                state.book=action.payload
            })
    }
})

export const booksReducer = slice.reducer
export const {setSearch, setCategory, setOrderBy, setStartIndex} = slice.actions
