import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeUserSetting from "../constants/UserSetting";

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import {
  handleGetOneUserSetting,
  handleGetUserSetting,
  handleDelUserEmailSetting,
  handleDelUserPhoneSetting,
} from "./UserSettingMiddle";

export default function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(
      ActionTypeUserSetting.GET_USER_SETING_REQUEST,
      handleGetUserSetting
    ),
    takeEvery(
      ActionTypeUserSetting.GETONE_USER_SETING_REQUEST,
      handleGetOneUserSetting
    ),
    takeEvery(
      ActionTypeUserSetting.DEL_EMAIL_SETING_REQUEST,
      handleDelUserEmailSetting
    ),
    takeEvery(
      ActionTypeUserSetting.DEL_PHONE_SETING_REQUEST,
      handleDelUserPhoneSetting
    ),
  ]);
}
