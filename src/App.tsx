import React, {useEffect} from 'react';
import './App.css';
import {booksApi} from "./api/booksApi/booksApi";
import {Button, Select} from "antd";
import {SearchForm} from "./components/searchForm/SearchForm";
import {ParamsSelect} from "./components/paramsSelect/ParamsSelect";
import {CATEGORIES, ORDER_BY} from "./constants/constants";
import {useAppDispatch, useAppSelector} from "./hooks";
import {
    getBooksTC,
    setCategory,
    setOrderBy,
    setStartIndex
} from "./store/reducers/booksReducer";

function App() {
    const dispatch=useAppDispatch()
    const {category,orderBy,searchText,books,startIndex, totalBooks, isLoadingMore}=useAppSelector(state => state.books)
    useEffect(() => {
        booksApi.getBook("iOJQAAAAMAAJ")
      searchText && dispatch(getBooksTC())
    }, [category,orderBy,searchText,startIndex])

  const handleCategorySelect=(category:string)=>{
      dispatch(setCategory(category))
  }
    const handleOrderSelect=(order:string)=>{
        dispatch(setOrderBy(order))
    }
    const handleLoadMoreClick=()=>{
dispatch(setStartIndex())
    }

    return (
        <div className="App">
            <SearchForm/>
            {!!totalBooks && <h1>{totalBooks}</h1>}
            <ParamsSelect title={"Categories"} value={category} options={CATEGORIES} onSelect={handleCategorySelect}/>
            <ParamsSelect title={"Sorting by"} value={orderBy} options={ORDER_BY} onSelect={handleOrderSelect}/>
                {books && books.map(book=>{
                    return(<div key={book.etag}>{book.volumeInfo.title}</div>)
                })}
            {isLoadingMore && <Button onClick={handleLoadMoreClick}>load more</Button>}
        </div>
    );
}

export default App;
