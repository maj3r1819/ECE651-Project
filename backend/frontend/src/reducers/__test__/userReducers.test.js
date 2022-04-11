import { userLoginReducer, userRegisterReducer } from "../userReducers";
import * as actions from "../../constants/userConstants";
import { USER_DETAIL } from "../../mock/mockUserRes";
import expect from "expect";

describe("user reducers", () => {
  // userLoginReducer
  it("should return the initial state", () => {
    expect(userLoginReducer(undefined, {})).toEqual({});
  });

  it("should handle USER_LOGIN_REQUEST", () => {
    const requestAction = {
      type: actions.USER_LOGIN_REQUEST,
    };
    expect(userLoginReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle USER_LOGIN_SUCCESS", () => {
    const successAction = {
      type: actions.USER_LOGIN_SUCCESS,
      payload: USER_DETAIL,
    };
    expect(userLoginReducer({}, successAction)).toEqual({
      loading: false,
      userInfo: USER_DETAIL,
    });
  });

  it("should handle USER_LOGIN_FAIL", () => {
    const failAction = {
      type: actions.USER_LOGIN_FAIL,
      payload: { success: false },
    };
    expect(userLoginReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  it("should handle USER_LOGOUT", () => {
    const logoutAction = {
      type: actions.USER_LOGOUT,
    };
    expect(userLoginReducer({}, logoutAction)).toEqual({});
  });

  // userRegisterReducer
  it("should return the initial state", () => {
    expect(userRegisterReducer(undefined, {})).toEqual({ user: {} });
  });

  it("should handle USER_REGISTER_REQUEST", () => {
    const requestAction = {
      type: actions.USER_REGISTER_REQUEST,
    };
    expect(userRegisterReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle USER_REGISTER_SUCCESS", () => {
    const successAction = {
      type: actions.USER_REGISTER_SUCCESS,
      payload: [USER_DETAIL],
    };
    expect(userRegisterReducer({}, successAction)).toEqual({
      loading: false,
      user: [USER_DETAIL],
    });
  });

  it("should handle USER_REGISTER_FAIL", () => {
    const failAction = {
      type: actions.USER_REGISTER_FAIL,
      payload: { success: false },
    };
    expect(userRegisterReducer({}, failAction)).toEqual({
        loading: false,
        error: { success: false },
    });
  });
});
