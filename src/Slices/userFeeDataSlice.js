import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feeData: null,
  loading: false,
};

const feeDataSlice = createSlice({
  name: "feeData",
  initialState: initialState,
  reducers: {
    setFeeData: (state, action) => {
      state.feeData = action.payload;
    },
    setFeeDataLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setFeeData, setFeeDataLoading } = feeDataSlice.actions;
export default feeDataSlice.reducer;