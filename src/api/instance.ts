import axios from 'axios'

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  params:{
    key: 'AIzaSyAdONq-W5wH0GEfSPe0E8bEnHEwOovO9SY',
  }
})

