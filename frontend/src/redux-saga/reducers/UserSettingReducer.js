import * as ActionType from "../constants/UserSetting";

const INIT_STATE = {
  users: [],
  user: [],
};
const userSettingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_USER_SETING_REQUEST:
      return { ...state };
    case ActionType.GET_USER_SETING_SUCCESS:
      return GetUserSettingSuccedd(state, action);
    case ActionType.GETONE_USER_SETING_REQUEST:
      return { ...state };
    case ActionType.GETONE_USER_SETING_SUCCESS:
      return GetOneUserSettingSuccedd(state, action);
    default:
      return GetUserSettingSuccedd(state, action);
  }
};

const GetUserSettingSuccedd = (state, action) => {
  return {
    ...state,
    users: action.payload,
  };
};
const GetOneUserSettingSuccedd = (state, action) => {
  return {
    ...state,
    user: action.payload,
  };
};
export default userSettingReducer;