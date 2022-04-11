import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import * as actions from "../../constants/productConstants";
import {
  listProducts,
  listProductDetails,
} from "../productActionCreators";
import { PRODUCT_LIST, PRODUCT_DETAIL } from "../../mock/mockProductRes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("Product actions", () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("creates PRODUCT_LIST_SUCCESS after successfuly fetching products", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: PRODUCT_LIST,
      });
    });

    const expectedActions = [
      { type: actions.PRODUCT_LIST_REQUEST },
      { type: actions.PRODUCT_LIST_SUCCESS, payload: PRODUCT_LIST },
    ];

    const store = mockStore({ products: {} });

    return store.dispatch(listProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates PRODUCT_LIST_FAIL after failing to fetch products", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: { message: "invalid data" },
      });
    });

    const expectedActions = [
      { type: actions.PRODUCT_LIST_REQUEST },
      { type: actions.PRODUCT_LIST_FAIL, payload: "invalid data" },
    ];

    const store = mockStore({ products: {} });

    return store.dispatch(listProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates PRODUCT_DETAIL_SUCCESS after successfuly fetching product detail", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: PRODUCT_DETAIL,
      });
    });

    const expectedActions = [
      { type: actions.PRODUCT_DETAIL_REQUEST },
      { type: actions.PRODUCT_DETAIL_SUCCESS, payload: PRODUCT_DETAIL },
    ];

    const store = mockStore({ products: {} });

    return store.dispatch(listProductDetails()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates PRODUCT_DETAIL_FAIL after failing to fetch product detail", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: { message: "invalid data" },
      });
    });

    const expectedActions = [
      { type: actions.PRODUCT_DETAIL_REQUEST },
      { type: actions.PRODUCT_DETAIL_FAIL, payload: "invalid data" },
    ];

    const store = mockStore({ products: {} });

    return store.dispatch(listProductDetails()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });



});
