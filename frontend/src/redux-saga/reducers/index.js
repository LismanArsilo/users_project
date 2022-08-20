import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import userSettingReducer from "./UserSettingReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  userSettingState: userSettingReducer,
});

export default rootReducer;
