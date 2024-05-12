import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Preloader from './Preloader';
import Pagination from 'react-js-pagination';
import ShopCard from './ShopCard';
import Main from '@components/Main';

import { useSelector, useDispatch } from 'react-redux';
import {
    currentPageNumberSelector,
    loadingSelector,
    maxPageNumberSelector,
    productsIdsSelector,
    productsSelector,
    siblingCountSelector,
} from '@store/products/selectors';
import { fetchProductsByIds } from '@store/products/thunks';
import {
    DEFAULT_ITEMS_PER_PAGE,
    setCurrentPageNumber,
    setLoading,
} from '@store/products/reducer';
import Table from '@components/TableComp';
import TableComp from '@components/TableComp';
import { Input } from 'postcss';
import InputFilters from '@components/InputFilters';

const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

export default function ShopList() {
    const dispatch = useDispatch();

    const currentPageNumber = useSelector(currentPageNumberSelector);
    const productsIds = useSelector(productsIdsSelector);
    const maxPageNumber = useSelector(maxPageNumberSelector);
    const products = useSelector(productsSelector);
    const loading = useSelector(loadingSelector);

    useEffect(() => {
        const lastItemIndex = DEFAULT_ITEMS_PER_PAGE * currentPageNumber;
        const fistItemIndex =
            currentPageNumber == 1
                ? 0
                : DEFAULT_ITEMS_PER_PAGE * (currentPageNumber - 1) + 1;
        const foundedIds = productsIds?.slice(fistItemIndex, lastItemIndex + 1);

        dispatch(fetchProductsByIds(foundedIds));
    }, [dispatch, productsIds, currentPageNumber]);

    const pageNumbers = useMemo(() => {
        return arrayRange(1, maxPageNumber, 1);
    }, [maxPageNumber]);

    const changeCurrentPageNumberHandler = useCallback(
        (number) => {
            console.log('setCurrentPageNumber', number);
            if (currentPageNumber !== number) {
                dispatch(setCurrentPageNumber(number));
                dispatch(setLoading(false));
            }
        },
        [dispatch, currentPageNumber]
    );

    return (
        <div className="main">
            {!loading ? <Preloader /> : <Main />}
            <div className="items">
                <Pagination
                    activePage={currentPageNumber}
                    // itemsCountPerPage={10}
                    totalItemsCount={maxPageNumber}
                    pageRangeDisplayed={5}
                    onChange={changeCurrentPageNumberHandler}
                    activeClass={'activePage'}
                />
            </div>
        </div>
    );
}
