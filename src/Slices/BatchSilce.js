import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step: 1,
  Batch: null,
  editBatch: false,
  paymentLoading: false,
  LectureContent:null,
  allBatches:null
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
    setLectureContent:(state,action)=>{
      state.LectureContent=action.payload
    },
    setEditBatch: (state, action) => {
      state.editBatch = action.payload;
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload;
    },
    setAllBatches:(state,action)=>{
      state.allBatches=action.payload;
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
    setAllBatches,
    setPaymentLoading,
    setLectureContent,
    resetbatchState
    } = batchSlice.actions;


export default batchSlice.reducer