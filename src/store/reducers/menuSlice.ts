import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeItem: string;
  drawerOpen: boolean;
  error: any;
}

const initialState: MenuState = {
  activeItem: "dashboard",
  drawerOpen: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    activeItem(state, action) {
      state.activeItem = action.payload.openItem;
    },
    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    },
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen;
    },
    hasError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { activeItem, openDrawer, toggleDrawer, hasError } =
  menuSlice.actions;

export default menuSlice.reducer;
