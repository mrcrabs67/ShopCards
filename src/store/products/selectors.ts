import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const currentPageNumberSelector = createSelector(
    (state: RootState) => state.products.currentPageNumber,
    (currentPageNumber) => currentPageNumber
);

export const maxPageNumberSelector = createSelector(
    (state: RootState) => state.products.maxPageNumber,
    (maxPageNumber) => maxPageNumber
);

export const productsIdsSelector = createSelector(
    (state: RootState) => state.products.productsIds,
    (productsIds) => productsIds
);

export const productsSelector = createSelector(
    (state: RootState) => state.products.products,
    (products) => products
);
export const siblingCountSelector = createSelector(
    (state: RootState) => state.products.siblingCount,
    (siblingCount) => siblingCount
);
