import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { useAppDispatch, useAppSelector } from "./hooks";

const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { store, dispatch, useSelector, useDispatch };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
