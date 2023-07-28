import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setStatusFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(value) {
        return {
          type: 'filters/setValueFilter',
          payload: value,
        };
      },
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
