import React, { memo } from 'react'

import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'

import 'react-lazy-load-image-component/src/effects/blur.css'
import { BookType } from '../../api/booksApi/types'
import noImage from '../../assets/images/No-Image-Placeholder.svg.png'
import { BOOK } from '../rotes/Rotes'

import s from './BookCard.module.scss'

type PropsType = {
  book: BookType
}
export const BookCard = memo(({ book }: PropsType) => {
  const navigate = useNavigate()
  const { authors, title, categories, imageLinks } = book.volumeInfo
  const categoriesText = categories ? categories[0] : ''
  const authorsText = authors ? authors.join(', ') : ''
  const handleCardClick = () => {
    navigate(`${BOOK}/${book.id}`)
  }

  return (
    <Card
      onClick={handleCardClick}
      className={s.card}
      key={book.etag}
      cover={
        <div className={s.cover}>
          <LazyLoadImage
            className={s.img}
            effect="blur"
            alt="example"
            src={imageLinks ? imageLinks.thumbnail : noImage}
          />
        </div>
      }
    >
      <div>
        <div className={s.category}>{categoriesText}</div>
        <Meta title={title} description={authorsText} />
      </div>
    </Card>
  )
})
