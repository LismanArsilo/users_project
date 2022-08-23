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

export const DelUserEmailSettingRequest = (payload, email) => ({
  type: ActionType.DEL_EMAIL_SETING_REQUEST,
  payload,
  email,
});
export const DelUserEmailSettingSuccess = (payload, email) => ({
  type: ActionType.DEL_EMAIL_SETING_SUCCESS,
  payload,
  email,
});
export const DelUserEmailSettingFailed = (payload, email) => ({
  type: ActionType.DEL_EMAIL_SETING_FAILED,
  payload,
  email,
});

export const DelUserPhoneSettingRequest = (payload, phone) => ({
  type: ActionType.DEL_PHONE_SETING_REQUEST,
  payload,
  phone,
});
export const DelUserPhoneSettingSuccess = (payload, phone) => ({
  type: ActionType.DEL_PHONE_SETING_SUCCESS,
  payload,
  phone,
});
export const DelUserPhoneSettingFailed = (payload, phone) => ({
  type: ActionType.DEL_PHONE_SETING_FAILED,
  payload,
  phone,
});
