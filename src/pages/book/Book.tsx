import React, { memo, useEffect } from 'react'

import { Card, Spin } from 'antd'
import parse from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'

import noImage from '../../assets/images/No-Image-Placeholder.svg.png'
import { BackTo } from '../../components/backTo/BackTo'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBookTC } from '../../store/reducers/booksReducer'

import s from './Book.module.scss'

import 'react-lazy-load-image-component/src/effects/blur.css'

export const Book = memo(() => {
  const dispatch = useAppDispatch()
  const { book, isLoading } = useAppSelector(state => state.books)

  const descriptionText =
    book?.volumeInfo.description && parse(book.volumeInfo.description)
  const { id } = useParams()

  useEffect(() => {
    id && dispatch(getBookTC(id))
  }, [id])

  if (isLoading) {
    return <Spin className={s.spin} size="large" />
  }

  return (
    <div className={s.container}>
      <div className={s.back}>
        <BackTo />
      </div>
      <div className={s.book}>
        <Card className={s.card}>
          <LazyLoadImage
            className={s.img}
            effect="blur"
            alt="example"
            src={
              book?.volumeInfo.imageLinks
                ? book?.volumeInfo.imageLinks.thumbnail
                : noImage
            }
          />
        </Card>
        <div className={s.info}>
          <div className={s.category}>{book?.volumeInfo.categories?.join(', ')}</div>
          <h2>{book?.volumeInfo.title}</h2>
          <div className={s.authors}>{book?.volumeInfo.authors?.join('/ ')}</div>
          <div className={s.description}>{descriptionText}</div>
        </div>
      </div>
    </div>
  )
})
