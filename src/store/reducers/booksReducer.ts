import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { booksApi } from '../../api/booksApi/booksApi'
import { BookType, ErrorType, GetBooksParamsType } from '../../api/booksApi/types'
import { INITIAL_START_INDEX, MAX_SEARCH_RESULTS } from '../../constants/constants'
import { StateType } from '../../hooks'

export const getBooksTC = createAsyncThunk(
  'books/getBooks',
  async (params, { getState, rejectWithValue }) => {
    const state = getState() as StateType
    const { category, orderBy, searchText, maxResults, printType, startIndex } =
      state.books

    try {
      const params = {
        q: `${searchText}${category === 'all' ? '' : ` subject:${category}`}`,
        orderBy,
        maxResults,
        printType,
        startIndex,
      } as GetBooksParamsType
      const res = await booksApi.getBooks(params)

      return res.data
    } catch (err: any) {
      const error = err as AxiosError<ErrorType>

      return rejectWithValue(error.response?.data.error.message)
    }
  },
)
export const getBookTC = createAsyncThunk(
  'books/getBook',
  async (params: string, { rejectWithValue }) => {
    try {
      const res = await booksApi.getBook(params)

      return res.data
    } catch (err: any) {
      const error = err as AxiosError<ErrorType>

      return rejectWithValue(error.response?.data.error.message)
    }
  },
)

export const slice = createSlice({
  name: 'books',
  initialState: {
    books: [] as BookType[],
    book: null as null | BookType,
    isLoading: false,
    totalBooks: 0,
    selectedBook: null,
    maxResults: MAX_SEARCH_RESULTS,
    startIndex: 0,
    orderBy: 'relevance',
    printType: 'books',
    searchText: '',
    category: 'all',
    isLoadingMore: false,
    error: null as null | string,
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
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBooksTC.pending, state => {
        state.isLoading = true
      })
      .addCase(getBooksTC.fulfilled, (state, action) => {
        state.isLoading = false
        if (state.startIndex > 0) {
          state.books = [...state.books, ...action.payload.items]
        } else {
          state.books = action.payload.items
        }
        state.totalBooks = action.payload.totalItems
        state.isLoadingMore = !!state.books && state.books.length < state.totalBooks
      })
      .addCase(getBooksTC.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(getBookTC.pending, state => {
        state.isLoading = true
      })
      .addCase(getBookTC.fulfilled, (state, action) => {
        state.book = action.payload
        state.isLoading = false
      })
      .addCase(getBookTC.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const booksReducer = slice.reducer
export const { setSearch, setCategory, setOrderBy, setStartIndex, setError } =
  slice.actions
