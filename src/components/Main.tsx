import React from 'react';
import ShopCard from './ShopCard';
import { useSelector } from 'react-redux';
import { productsSelector } from '../store/products/selectors';
import TableComp from './TableComp';
import InputFilters from './InputFilters';

export default function Main() {
    const filters = ['brand', 'id', 'price', 'product'];
    return (
        <div className="box_tbl_list">
            <div className="filters">
                <InputFilters value={filters} />
            </div>
            <TableComp />
        </div>
    );
}
