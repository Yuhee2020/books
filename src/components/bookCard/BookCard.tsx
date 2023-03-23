import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import s from "./BookCard.module.scss"
import noImage from "../../assets/images/No-Image-Placeholder.svg.png"
import {useNavigate} from "react-router-dom";
import {BOOK} from "../rotes/Rotes";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {BookType} from "../../api/booksApi/types";

type PropsType = {
    book: BookType
}
export const BookCard = ({book}: PropsType) => {
    const navigate = useNavigate()
    const {authors, title, categories, imageLinks} = book.volumeInfo
    const categoriesText=categories ? categories[0] : ""
    const authorsText=authors ? authors.join(", ") : ""
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
                    <LazyLoadImage className={s.img}
                                   effect="blur"
                                   alt="example"
                                   src={imageLinks ? imageLinks.thumbnail : noImage}/>
                </div>
            }
        >
            <div>
                <div className={s.category}>{categoriesText}</div>
                <Meta
                    title={title}
                    description={authorsText}
                />
            </div>
        </Card>
    );
};

