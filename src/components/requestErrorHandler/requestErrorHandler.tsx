import React, {useEffect} from 'react';
import {message} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setError} from "../../store/reducers/booksReducer";

export const RequestErrorHandler = () => {
    const dispatch=useAppDispatch()
    const error = useAppSelector(state => state.books.error)

    const [messageApi, contextHolder] = message.useMessage()

    useEffect(()=>{
        error && messageApi.open({
            type: 'error',
            content: error,
            onClose(){dispatch(setError(null))}
        })
    },[error])
    return (
        <div>
            {contextHolder}
        </div>
    );
};

