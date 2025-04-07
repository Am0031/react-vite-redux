import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminSlice";
import menuReducer from "./menuSlice";
import userReducer from "./userSlice";
import judgeReducer from "./judgeSlice";
import participantReducer from "./participantSlice";

const reducers = combineReducers({
  menu: menuReducer,
  user: userReducer,
  admin: adminReducer,
  judge: judgeReducer,
  participant: participantReducer,
});

export default reducers;
