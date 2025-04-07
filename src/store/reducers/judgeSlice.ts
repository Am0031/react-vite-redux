import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JudgeState {
  value: number;
}

const initialState: JudgeState = {
  value: 0,
};

export const judgeSlice = createSlice({
  name: "judge",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetScore: (state) => {
      state.value = 0;
    },
    doubleScore: (state) => {
      state.value *= 2;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  resetScore,
  doubleScore,
} = judgeSlice.actions;

export default judgeSlice.reducer;
