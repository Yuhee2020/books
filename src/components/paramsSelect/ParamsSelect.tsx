import React from 'react';
import {Select} from "antd";

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
        <div>
            {title} <Select onChange={handleSelectChange}
                            style={{width: "150px"}}
                            options={options.map(el => ({value: el, label: el}))}
                            value={value}
        />
        </div>
    );
};

