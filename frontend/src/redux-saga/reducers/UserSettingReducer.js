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
    case ActionType.DEL_EMAIL_SETING_REQUEST:
      return { ...state };
    case ActionType.DEL_EMAIL_SETING_SUCCESS:
      return DelUserEmailSettingSuccedd(state, action);
    case ActionType.DEL_PHONE_SETING_REQUEST:
      return { ...state };
    case ActionType.DEL_PHONE_SETING_SUCCESS:
      return DelUserPhoneSettingSuccedd(state, action);
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
const DelUserEmailSettingSuccedd = (state, action) => {
  const { email } = action;
  const { users_emails } = state.user;
  const filterUserEmail = users_emails.filter((el) => el.pmail_id !== email);
  const allUser = state.user;
  allUser.users_emails = [...filterUserEmail];

  return {
    ...state,
    // user: [(allUser.users_emails = [...filterUserEmail])],
  };
};
const DelUserPhoneSettingSuccedd = (state, action) => {
  const { phone } = action;
  const { users_phones } = state.user;
  const filterUserPhone = users_phones.filter((el) => el.uspo_number !== phone);
  const allUser = state.user;
  console.info(filterUserPhone);
  allUser.users_phones = [...filterUserPhone];

  return {
    ...state,
    // user: [(allUser.users_emails = [...filterUserEmail])],
  };
};

export default userSettingReducer;
