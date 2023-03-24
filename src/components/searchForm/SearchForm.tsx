import React, { ChangeEvent, KeyboardEvent, memo, useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { setSearch } from '../../store/reducers/booksReducer'

import s from './SearchForm.module.scss'

export const SearchForm = memo(() => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.books.isLoading)
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
        placeholder="Books search"
        size="large"
        onKeyPress={handleEnterPress}
        onChange={handleInputChange}
        value={searchText}
      />
      <Button
        className={s.button}
        size="large"
        type="default"
        icon={<SearchOutlined />}
        onClick={handleButtonClick}
        loading={isLoading}
      />
    </div>
  )
})
