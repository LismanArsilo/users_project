import * as ActionType from "../constants/UserSetting";

export const GetUserSettingRequest = () => ({
  type: ActionType.GET_USER_SETING_REQUEST,
});
export const GetUserSettingSuccess = (payload) => ({
  type: ActionType.GET_USER_SETING_SUCCESS,
  payload,
});
export const GetUserSettingFailed = (payload) => ({
  type: ActionType.GET_USER_SETING_FAILED,
  payload,
});

export const GetOneUserSettingRequest = (payload) => ({
  type: ActionType.GETONE_USER_SETING_REQUEST,
  payload,
});
export const GetOneUserSettingSuccess = (payload) => ({
  type: ActionType.GETONE_USER_SETING_SUCCESS,
  payload,
});
export const GetOneUserSettingFailed = (payload) => ({
  type: ActionType.GETONE_USER_SETING_FAILED,
  payload,
});
