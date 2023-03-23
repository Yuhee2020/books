import React, {useEffect} from 'react';
import {SearchForm} from "../searchForm/SearchForm";
import {ParamsSelect} from "../paramsSelect/ParamsSelect";
import {CATEGORIES, ORDER_BY} from "../../constants/constants";
import {getBooksTC, setCategory, setOrderBy} from "../../store/reducers/booksReducer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import s from "./AppHeader.module.scss"
import {useNavigate} from "react-router-dom";
import {ROOT} from "../rotes/Rotes";

export const AppHeader = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        category,
        orderBy,
        searchText,
        startIndex
    } = useAppSelector(state => state.books)
    const handleCategorySelect = (category: string) => {
        dispatch(setCategory(category))
    }
    const handleOrderSelect = (order: string) => {
        dispatch(setOrderBy(order))
    }
    useEffect(() => {
        searchText && dispatch(getBooksTC())
        navigate(ROOT)
    }, [category, orderBy, searchText, startIndex])

    return (
        <header className={s.appHeader}>
            <div className={s.container}>
                <h1>Search for books</h1>
                <div className={s.search}><SearchForm/>
                </div>
                <div className={s.selects}><ParamsSelect title={"Categories"}
                                                         value={category}
                                                         options={CATEGORIES}
                                                         onSelect={handleCategorySelect}/>
                    <ParamsSelect title={"Sorting by"} value={orderBy} options={ORDER_BY}
                                  onSelect={handleOrderSelect}/></div>
            </div>
        </header>
    );
};

