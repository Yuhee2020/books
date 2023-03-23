import React from 'react';
import {Select} from "antd";
import s from "./ParamsSelect.module.scss"

type PropsType = {
    title: string
    options: string[]
    onSelect: (value: string) => void
    value: string
}

export const ParamsSelect = ({title, options, onSelect, value}: PropsType) => {
    const handleSelectChange = (e: string) => {
        onSelect(e)
    }
    return (
        <div className={s.selectContainer}>
            {title} <Select onChange={handleSelectChange}
                            className={s.select}
                            options={options.map(el => ({value: el, label: el}))}
                            value={value}
        />
        </div>
    );
};

