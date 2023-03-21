import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getBookTC} from "../../store/reducers/booksReducer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {BookType} from "../../api/booksApi/booksApi";

export const Book = () => {
    const dispatch=useAppDispatch()
    const book=useAppSelector(state => state.books.book) as BookType
    const {id}=useParams()
    useEffect(()=>{
        id && dispatch(getBookTC(id))
    },[id])
    return (
        <div>

        </div>
    );
};
