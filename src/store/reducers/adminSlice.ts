import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../index";

interface AdminState {
  value: number;
}

const initialState: AdminState = {
  value: 0,
};

export const adminSlice = createSlice({
  name: "admin",
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
  },
});

export const { increment, decrement, incrementByAmount } = adminSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.admin.value;

export default adminSlice.reducer;
