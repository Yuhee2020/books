import React, { memo } from 'react'

import { Button, Empty, Spin } from 'antd'

import noBooks from '../../assets/images/pngwing.com.png'
import { BookCard } from '../../components/bookCard/BookCard'
import { EMPTY_DESCRIPTION } from '../../constants/constants'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setStartIndex } from '../../store/reducers/booksReducer'

import s from './Books.module.scss'

export const Books = memo(() => {
  const dispatch = useAppDispatch()
  const { books, totalBooks, isLoadingMore, isLoading, searchText } = useAppSelector(
    state => state.books,
  )
  const handleLoadMoreClick = () => {
    dispatch(setStartIndex())
  }

  if (!searchText && !books.length) {
    return <Empty className={s.empty} image={noBooks} description={EMPTY_DESCRIPTION} />
  }

  return (
    <div className={s.container}>
      <Spin className={s.spin} size="large" spinning={isLoading}>
        {searchText && <h3 className={s.totalBooks}>Found {totalBooks} results</h3>}
        <div className={s.cards}>
          {books && books.map(book => <BookCard key={book.etag} book={book} />)}
        </div>
        <div className={s.loadingMore}>
          {isLoadingMore && (
            <Button onClick={handleLoadMoreClick} loading={isLoading}>
              load more
            </Button>
          )}
        </div>
      </Spin>
    </div>
  )
})
