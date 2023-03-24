import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Book } from '../../pages/book/Book'
import { Books } from '../../pages/books/Books'
import { Error404 } from '../../pages/error404/Error404'

export const ROOT = '/'
export const BOOK = '/book'
export const BOOK_PAGE = '/book/:id'
export const ERROR_404 = '/404'

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Books />} />
      <Route path={BOOK_PAGE} element={<Book />} />
      <Route path={ERROR_404} element={<Error404 />} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  )
}
