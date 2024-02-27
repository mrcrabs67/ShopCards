import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './Map/paginationSlice';

export default configureStore({
    reducer: {
        history: historyReducer,
    }
})