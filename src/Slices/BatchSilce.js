import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step: 1,
  Batch: null,
  editBatch: false,
  paymentLoading: false,
};

const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setBatch: (state, action) => {
      state.Batch = action.payload;
    },
    setEditBatch: (state, action) => {
      state.editBatch = action.payload;
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload;
    },
    resetbatchState: (state) => {
      state.step = 1;
      state.Batch = null;
      state.editBatch = false;
    },
  },
});

export const{
    setStep,
    setBatch,
    setEditBatch,
    setPaymentLoading,
    resetbatchState
    } = batchSlice.actions;


export default batchSlice.reducer