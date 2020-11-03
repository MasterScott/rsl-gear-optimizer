/* eslint-disable no-param-reassign */
import { Results, ResultsState, ResultsStatus } from "models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ResultsState = {
  data: [],
  status: ResultsStatus.Ready,
};

type ResultsGenerateAction = PayloadAction<Results[]>;

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    resultsInitialize: () => {
      return initialState;
    },
    resultsStartGeneration: (state) => {
      state.status = ResultsStatus.Processing;
    },
    resultsDoneGeneration: (state, action: ResultsGenerateAction) => {
      state.data = action.payload;
      state.status = ResultsStatus.Done;
    },
  },
});

export const {
  resultsDoneGeneration,
  resultsInitialize,
  resultsStartGeneration,
} = resultsSlice.actions;

export default resultsSlice.reducer;
