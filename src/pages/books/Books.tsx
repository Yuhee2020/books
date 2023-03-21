import React, {useEffect} from 'react';
import {Avatar, Button, Card} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getBooksTC, setStartIndex} from "../../store/reducers/booksReducer";
import {booksApi} from "../../api/booksApi/booksApi";
import Meta from "antd/es/card/Meta";

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
        <div>
            {!!totalBooks && <h1>{totalBooks}</h1>}
            {books && books.map(book => {

                return (<div key={book.etag}>{book.volumeInfo.title}
                    <Card
                        key={book.etag}
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={book.volumeInfo.imageLinks.thumbnail}
                            />
                        }
                    >
                        <Meta
                            title={book.volumeInfo.title}
                            description={book.volumeInfo.authors}
                        />
                    </Card>
                </div>)
            })}
            {isLoadingMore && <Button onClick={handleLoadMoreClick}>load more</Button>}
        </div>
    );
};

