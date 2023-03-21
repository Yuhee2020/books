import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {BookType} from "../../api/booksApi/booksApi";
import s from "./BookCard.module.scss"
import noImage from "../../assets/images/No-Image-Placeholder.svg.png"
import {useNavigate} from "react-router-dom";
import {BOOK} from "../rotes/Rotes";

type PropsType = {
    book: BookType
}
export const BookCard = ({book}: PropsType) => {
    const navigate = useNavigate()
    const {authors, title, categories, imageLinks} = book.volumeInfo
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
                    <img
                        className={s.img}
                        alt="example"
                        src={imageLinks ? imageLinks.thumbnail : noImage}
                    />
                </div>
            }
        >
            <div>
                <div className={s.category}>{categories}</div>
                <Meta
                    title={title}
                    description={authors}
                />
            </div>
        </Card>
    );
};

