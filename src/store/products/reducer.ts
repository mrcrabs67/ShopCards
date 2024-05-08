import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

// количество элементов, кол-во на странице = 50, количество страниц (расчитываем), текущая страница

export const DEFAULT_ITEMS_PER_PAGE = 15; //represents the maximum data that is visible in a single page.
/*
totalCount: represents the total count of data available from the source.
onPageChange: callback function invoked with the updated page value when the page is changed.
* */

export type ProductsState = {
    productsIds: string[];
    products: object[];
    currentPageNumber: number; //represents the current active page. We'll use a 1-based index instead of a traditional 0-based index for our value.currentPage
    maxPageNumber: number;
    siblingCount: number; //(optional): represents the min number of page buttons to be shown on each side of the current page button. Defaults to 1.
    errorCode: string | null;
    loading: boolean;
};

export const initialProductsState: ProductsState = {
    productsIds: [],
    products: [],
    currentPageNumber: 1,
    maxPageNumber: 1,
    siblingCount: 1,
    errorCode: null,
    loading: false,
};

const slice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        setProductsIds: (state, action: PayloadAction<string[]>) => {
            state.productsIds = action.payload;
        },
        setProducts: (state, action: PayloadAction<object[]>) => {
            state.products = action.payload;
        },
        setCurrentPageNumber: (state, action: PayloadAction<number>) => {
            state.currentPageNumber = action.payload;
        },
        setMaxPageNumber: (state, action: PayloadAction<number>) => {
            state.maxPageNumber = action.payload;
        },
        setErrorCode: (state, action: PayloadAction<string | null>) => {
            state.errorCode = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

const { reducer } = slice;

export const {
    setProductsIds,
    setProducts,
    setCurrentPageNumber,
    setMaxPageNumber,
    setErrorCode,
    setLoading,
} = slice.actions;

export default reducer;
