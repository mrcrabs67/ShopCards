import React from 'react';
import ShopCard from './ShopCard';
import { useSelector } from 'react-redux';
import { productsSelector } from '../store/products/selectors';

type Props = {
    value: Array<string>;
};
export default function InputFilters({ value }: Props) {
    return (
        <label>
            Выберите поле для фильтра
            <select
                className="se"
                name="selectedFruit"
                onChange={(e) => console.log(e.target.value)}
            >
                {value.map((val) => (
                    <option key={val} value={val}>
                        {val}
                    </option>
                ))}
            </select>
        </label>
    );
}
