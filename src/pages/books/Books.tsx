import React, {useEffect} from 'react';
import {Avatar, Button, Card} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getBooksTC, setStartIndex} from "../../store/reducers/booksReducer";
import {booksApi} from "../../api/booksApi/booksApi";
import Meta from "antd/es/card/Meta";
import s from "./Books.module.scss"
import {BookCard} from "../../components/bookCard/BookCard";


export const Books = () => {
    const dispatch = useAppDispatch()
    const {
        category,
        orderBy,
        searchText,
        books,
        startIndex,
        totalBooks,
        isLoadingMore
    } = useAppSelector(state => state.books)
    const handleLoadMoreClick = () => {
        dispatch(setStartIndex())
    }
    useEffect(() => {
        booksApi.getBook("iOJQAAAAMAAJ")
        searchText && dispatch(getBooksTC())
    }, [category, orderBy, searchText, startIndex])

    return (
        <div className={s.container}>
            {!!totalBooks && <h1>{totalBooks}</h1>}
            <div className={s.cards}>
                {books && books.map(book =><BookCard key={book.etag} book={book}/>)}
            </div>
            {isLoadingMore && <Button onClick={handleLoadMoreClick}>load more</Button>}
        </div>
    );
};

