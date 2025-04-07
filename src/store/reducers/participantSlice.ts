import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ParticipantState {
  value: number;
}

const initialState: ParticipantState = {
  value: 0,
};

export const participantSlice = createSlice({
  name: "participant",
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
    reset: (state) => {
      state.value = 0;
    },
    incrementByFive: (state) => {
      state.value += 5;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  reset,
  incrementByFive,
} = participantSlice.actions;

export default participantSlice.reducer;
