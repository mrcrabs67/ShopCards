import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './Map/paginationSlice';

export default configureStore({
    reducer: {
        pagination: paginationReducer,
    }
})