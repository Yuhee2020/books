import React, {useEffect} from 'react';
import './App.css';
import {booksApi} from "./api/booksApi/booksApi";
import Search from "antd/es/input/Search";
import {Button, Input, Select} from "antd";

function App() {
    useEffect(() => {
        booksApi.getBooks()
        booksApi.getBook("cECJzQEACAAJ")
    }, [])

    const handleSearchClick=(text:string)=>{
        console.log(text)
    }
    return (
        <div className="App">

            <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
            <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </div>
    );
}

export default App;
