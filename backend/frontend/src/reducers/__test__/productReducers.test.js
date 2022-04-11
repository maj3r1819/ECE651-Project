import {
  productDetailsReducer,
  productListReducer,
  productAddReducer,
  productEditReducer,
  productDeleteReducer,
} from "../productReducers";
import * as actions from "../../constants/productConstants";
import { PRODUCT_DETAIL, PRODUCT_LIST } from "../../mock/mockProductRes";
import expect from "expect";

describe("product reducers", () => {
  // productDetailsReducer
  it("should return the initial state", () => {
    expect(productDetailsReducer(undefined, {})).toEqual({ product: {} });
  });

  it("should handle PRODUCT_DETAIL_REQUEST", () => {
    const requestAction = {
      type: actions.PRODUCT_DETAIL_REQUEST,
    };
    expect(productDetailsReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle PRODUCT_DETAIL_SUCCESS", () => {
    const successAction = {
      type: actions.PRODUCT_DETAIL_SUCCESS,
      payload: PRODUCT_DETAIL,
    };
    expect(productDetailsReducer({}, successAction)).toEqual({
      loading: false,
      product: PRODUCT_DETAIL,
    });
  });

  it("should handle PRODUCT_DETAIL_FAIL", () => {
    const failAction = {
      type: actions.PRODUCT_DETAIL_FAIL,
      payload: { success: false },
    };
    expect(productDetailsReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  // productListReducer
  it("should return the initial state", () => {
    expect(productListReducer(undefined, {})).toEqual({ products: [] });
  });

  it("should handle PRODUCT_LIST_REQUEST", () => {
    const requestAction = {
      type: actions.PRODUCT_LIST_REQUEST,
    };
    expect(productListReducer({}, requestAction)).toEqual({
      loading: true,
      products: [],
    });
  });

  it("should handle PRODUCT_LIST_SUCCESS", () => {
    const successAction = {
      type: actions.PRODUCT_LIST_SUCCESS,
      payload: PRODUCT_LIST,
    };
    expect(productListReducer({}, successAction)).toEqual({
      loading: false,
      products: PRODUCT_LIST,
    });
  });

  it("should handle PRODUCT_LIST_FAIL", () => {
    const failAction = {
      type: actions.PRODUCT_LIST_FAIL,
      payload: { success: false },
    };
    expect(productListReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  // productAddReducer
  it("should return the initial state", () => {
    expect(productAddReducer(undefined, {})).toEqual({});
  });

  it("should handle PRODUCT_ADD_REQUEST", () => {
    const requestAction = {
      type: actions.PRODUCT_ADD_REQUEST,
    };
    expect(productAddReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle PRODUCT_ADD_SUCCESS", () => {
    const successAction = {
      type: actions.PRODUCT_ADD_SUCCESS,
    };
    expect(productAddReducer({}, successAction)).toEqual({
      loading: false,
      success: true,
    });
  });

  it("should handle PRODUCT_ADD_FAIL", () => {
    const failAction = {
      type: actions.PRODUCT_ADD_FAIL,
      payload: { success: false },
    };
    expect(productAddReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  it("should handle PRODUCT_ADD_RESET", () => {
    const failAction = {
      type: actions.PRODUCT_ADD_RESET,
    };
    expect(productAddReducer({}, failAction)).toEqual({});
  });

  // productEditReducer
  it("should return the initial state", () => {
    expect(productEditReducer(undefined, {})).toEqual({});
  });

  it("should handle PRODUCT_EDIT_REQUEST", () => {
    const requestAction = {
      type: actions.PRODUCT_EDIT_REQUEST,
    };
    expect(productEditReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle PRODUCT_EDIT_SUCCESS", () => {
    const successAction = {
      type: actions.PRODUCT_EDIT_SUCCESS,
    };
    expect(productEditReducer({}, successAction)).toEqual({
      loading: false,
      success: true,
    });
  });

  it("should handle PRODUCT_EDIT_FAIL", () => {
    const failAction = {
      type: actions.PRODUCT_EDIT_FAIL,
      payload: { success: false },
    };
    expect(productEditReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  it("should handle PRODUCT_EDIT_RESET", () => {
    const failAction = {
      type: actions.PRODUCT_EDIT_RESET,
    };
    expect(productEditReducer({}, failAction)).toEqual({});
  });

  // productDeleteReducer
  it("should return the initial state", () => {
    expect(productDeleteReducer(undefined, {})).toEqual({});
  });

  it("should handle PRODUCT_DELETE_REQUEST", () => {
    const requestAction = {
      type: actions.PRODUCT_DELETE_REQUEST,
    };
    expect(productDeleteReducer({}, requestAction)).toEqual({
      loading: true,
    });
  });

  it("should handle PRODUCT_DELETE_SUCCESS", () => {
    const successAction = {
      type: actions.PRODUCT_DELETE_SUCCESS,
    };
    expect(productDeleteReducer({}, successAction)).toEqual({
      loading: false,
      success: true,
    });
  });

  it("should handle PRODUCT_DELETE_FAIL", () => {
    const failAction = {
      type: actions.PRODUCT_DELETE_FAIL,
      payload: { success: false },
    };
    expect(productDeleteReducer({}, failAction)).toEqual({
      loading: false,
      error: { success: false },
    });
  });

  it("should handle PRODUCT_DELETE_RESET", () => {
    const failAction = {
      type: actions.PRODUCT_DELETE_RESET,
    };
    expect(productDeleteReducer({}, failAction)).toEqual({});
  });
});
