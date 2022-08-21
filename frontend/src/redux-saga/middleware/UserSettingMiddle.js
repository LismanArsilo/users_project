import { call, put } from "redux-saga/effects";
import apiUserSetting from "../../api/api-user-setting";
import {
  GetUserSettingSuccess,
  GetUserSettingFailed,
  GetOneUserSettingSuccess,
  GetOneUserSettingFailed,
  DelUserSettingSuccess,
  DelUserSettingFailed,
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

function* handleDelUserSetting(action) {
  const { payload } = action;
  const { email } = action;
  try {
    yield call(apiUserSetting.deletedEmail, payload, email);
    yield put(DelUserSettingSuccess(payload, email));
  } catch (error) {
    yield put(DelUserSettingFailed(error));
  }
}

export { handleGetUserSetting, handleGetOneUserSetting, handleDelUserSetting };
