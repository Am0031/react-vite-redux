import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  role: string | null;
}

const initialState: UserState = {
  role: null, // Default is no user logged in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    logout(state) {
      state.role = null;
    },
  },
});

export const { setUserRole, logout } = userSlice.actions;
export default userSlice.reducer;
