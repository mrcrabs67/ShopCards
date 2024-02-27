import {
    createSlice,
    // createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

// import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

// количество элементов, кол-во на странице = 50, количество страниц (расчитываем), текущая страница

export const DEFAULT_ITEMS_PER_PAGE = 50;

export type ProductsState = {
    productsIds: string[];
    products: object[];
    currentPageNumber: number;
    maxPageNumber: number;
    errorCode: string | null;
};

export const initialProductsState: ProductsState = {
    productsIds: [],
    products: [],
    currentPageNumber: 1,
    maxPageNumber: 1,
    errorCode: null,
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

    },
});

const { reducer } = slice;

export const { setProductsIds, setProducts, setCurrentPageNumber, setMaxPageNumber, setErrorCode } = slice.actions;

export default reducer;
