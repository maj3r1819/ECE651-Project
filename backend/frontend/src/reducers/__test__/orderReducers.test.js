import {
  orderAddReducer,
  orderDetialsReducer,
  orderListMyReducer,
} from "../orderReducers";
import * as actions from "../../constants/orderConstants";
import { ORDER_DETAIL } from "../../mock/mockOrderRes";
import expect from "expect";

describe("order reducers", () => {
  // orderAddReducer
  it("should return the initial state", () => {
    expect(orderAddReducer(undefined, {})).toEqual({});
  });

  it("should handle ORDER_ADD_REQUEST", () => {
    const requestAction = {
      type: actions.ORDER_ADD_REQUEST,
    };
    expect(orderAddReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle ORDER_ADD_SUCCESS", () => {
    const successAction = {
      type: actions.ORDER_ADD_SUCCESS,
      payload: ORDER_DETAIL,
    };
    expect(orderAddReducer({}, successAction)).toEqual({
      loading: false,
      success: true,
      order: ORDER_DETAIL,
    });
  });

  it("should handle ORDER_ADD_FAIL", () => {
    const failAction = {
      type: actions.ORDER_ADD_FAIL,
      payload: { success: false },
    };
    expect(orderAddReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  it("should handle ORDER_ADD_RESET", () => {
    const resetAction = {
      type: actions.ORDER_ADD_RESET,
    };
    expect(orderAddReducer({}, resetAction)).toEqual({});
  });

  // orderDetialsReducer
  it("should return the initial state", () => {
    expect(orderDetialsReducer(undefined, {})).toEqual({
      loading: true,
      order: { cartItems: [] },
    });
  });

  it("should handle ORDER_DETAILS_REQUEST", () => {
    const requestAction = {
      type: actions.ORDER_DETAILS_REQUEST,
    };
    expect(orderDetialsReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle ORDER_DETAILS_SUCCESS", () => {
    const successAction = {
      type: actions.ORDER_DETAILS_SUCCESS,
      payload: ORDER_DETAIL,
    };
    expect(orderDetialsReducer({}, successAction)).toEqual({
      loading: false,
      order: ORDER_DETAIL,
    });
  });

  it("should handle ORDER_DETAILS_FAIL", () => {
    const failAction = {
      type: actions.ORDER_DETAILS_FAIL,
      payload: { success: false },
    };
    expect(orderDetialsReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  // orderListMyReducer
  it("should return the initial state", () => {
    expect(orderListMyReducer(undefined, {})).toEqual({
      orders: [],
    });
  });

  it("should handle ORDER_LIST_MY_REQUEST", () => {
    const requestAction = {
      type: actions.ORDER_LIST_MY_REQUEST,
    };
    expect(orderListMyReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle ORDER_LIST_MY_SUCCESS", () => {
    const successAction = {
      type: actions.ORDER_LIST_MY_SUCCESS,
      payload: [ORDER_DETAIL],
    };
    expect(orderListMyReducer({}, successAction)).toEqual({
      loading: false,
      orders: [ORDER_DETAIL],
    });
  });

  it("should handle ORDER_LIST_MY_FAIL", () => {
    const failAction = {
      type: actions.ORDER_LIST_MY_FAIL,
      payload: { success: false },
    };
    expect(orderListMyReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  it("should handle ORDER_LIST_MY_RESET", () => {
    const failAction = {
      type: actions.ORDER_LIST_MY_RESET,
    };
    expect(orderListMyReducer({}, failAction)).toEqual({ orders: [] });
  });
});
