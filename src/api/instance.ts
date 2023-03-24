import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params:{
    key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
  }
})

