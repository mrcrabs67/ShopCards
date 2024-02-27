import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        value: [],
    },
    reducers: {
        updatePagination: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

export const { updatePagination } = paginationSlice.actions;
export const paginationState = (state) => state.pagination.value;

export default paginationSlice.reducer;
