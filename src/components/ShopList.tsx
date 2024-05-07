import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Preloader from './Preloader';
import Pagination from 'react-js-pagination';
import ShopCard from './ShopCard';

import { useSelector, useDispatch } from 'react-redux';
import {
    currentPageNumberSelector,
    maxPageNumberSelector,
    productsIdsSelector,
    productsSelector,
    siblingCountSelector,
} from '@store/products/selectors';
import { fetchProductsByIds } from '@store/products/thunks';
import {
    DEFAULT_ITEMS_PER_PAGE,
    setCurrentPageNumber,
} from '@store/products/reducer';

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
    const siblingCount = useSelector(siblingCountSelector);

    useEffect(() => {
        const lastItemIndex = DEFAULT_ITEMS_PER_PAGE * currentPageNumber;
        const foundedIds = productsIds?.slice(
            lastItemIndex - (DEFAULT_ITEMS_PER_PAGE - 1),
            lastItemIndex
        );

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
            }
        },
        [dispatch, currentPageNumber]
    );

    return (
        <div className="box_tbl_list">
            <table>
                <thead>
                    <tr>
                        <th className="text-center">Номер</th>
                        <th className="text-center">Название</th>
                        <th className="text-center">Цена</th>
                        <th className="text-center">Бренд</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any) => (
                        <ShopCard key={product.id} {...product} />
                    ))}
                </tbody>
            </table>
            <div className="items">
                <Pagination
                    activePage={currentPageNumber}
                    // itemsCountPerPage={10}
                    totalItemsCount={maxPageNumber}
                    pageRangeDisplayed={5}
                    onChange={changeCurrentPageNumberHandler}
                    activeClass={'activePage'}
                />

                {/*<div className="pages">*/}
                {/*    {pageNumbers.map((pageNumber) => (*/}
                {/*        <span*/}
                {/*            onClick={() =>*/}
                {/*                changeCurrentPageNumberHandler(pageNumber)*/}
                {/*            }*/}
                {/*            // disabled={ currentPageNumber === pageNumber }*/}
                {/*            key={pageNumber}*/}
                {/*            className={*/}
                {/*                currentPageNumber === pageNumber*/}
                {/*                    ? 'curent-page'*/}
                {/*                    : 'page'*/}
                {/*            }*/}
                {/*        >*/}
                {/*            {pageNumber}*/}
                {/*        </span>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
