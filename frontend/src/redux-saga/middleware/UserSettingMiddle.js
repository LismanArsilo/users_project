import { call, put } from "redux-saga/effects";
import apiUserSetting from "../../api/api-user-setting";
import {
  GetUserSettingSuccess,
  GetUserSettingFailed,
  GetOneUserSettingSuccess,
  GetOneUserSettingFailed,
  DelUserEmailSettingSuccess,
  DelUserEmailSettingFailed,
  DelUserPhoneSettingSuccess,
  DelUserPhoneSettingFailed,
} from "../actions/UserSetting";

function* handleGetUserSetting() {
  try {
    const result = yield call(apiUserSetting.findAllUser);
    yield put(GetUserSettingSuccess(result));
  } catch (error) {
    yield put(GetUserSettingFailed(error));
  }
}

function* handleGetOneUserSetting(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUserSetting.findOneUser, payload);
    yield put(GetOneUserSettingSuccess(result));
  } catch (error) {
    yield put(GetOneUserSettingFailed(error));
  }
}

function* handleDelUserEmailSetting(action) {
  const { payload } = action;
  const { email } = action;
  try {
    yield call(apiUserSetting.deletedEmail, payload, email);
    yield put(DelUserEmailSettingSuccess(payload, email));
  } catch (error) {
    yield put(DelUserEmailSettingFailed(error));
  }
}

function* handleDelUserPhoneSetting(action) {
  const { payload } = action;
  const { phone } = action;
  try {
    yield call(apiUserSetting.deletedPhone, payload, phone);
    yield put(DelUserPhoneSettingSuccess(payload, phone));
  } catch (error) {
    yield put(DelUserPhoneSettingFailed(error));
  }
}

export {
  handleGetUserSetting,
  handleGetOneUserSetting,
  handleDelUserEmailSetting,
  handleDelUserPhoneSetting,
};
