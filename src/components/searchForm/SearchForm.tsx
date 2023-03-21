import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react'

import {SearchOutlined} from '@ant-design/icons'
import {Button, Input} from 'antd'


import s from './SearchForm.module.scss'
import {useAppDispatch} from "../../hooks";
import {setSearch} from "../../store/reducers/booksReducer";

export const SearchForm = memo(() => {
    const dispatch = useAppDispatch()
    const [searchText, setSearchText] = useState('')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value)
    }
    const handleButtonClick = () => {
        dispatch(setSearch(searchText))
    }
    const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && searchText && handleButtonClick()
    }

    return (
        <div className={s.formContainer}>
            <Input
                placeholder="Enter task description..."
                size="large"
                onKeyPress={handleEnterPress}
                onChange={handleInputChange}
                value={searchText}
            />
            <Button
                className={s.button}
                size="large"
                disabled={!searchText.trim()}
                type="primary"
                icon={<SearchOutlined/>}
                onClick={handleButtonClick}
            />
        </div>
    )
})
