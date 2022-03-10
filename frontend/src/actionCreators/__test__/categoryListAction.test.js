import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../../constants/categoryConstants';
import { listCategories } from '../categoryActionCreators';
import { CATEGORY_LIST } from '../../mock/mockCategoryRes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getCategoryList actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates CATEGORY_LIST_SUCCESS after successfuly fetching categories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: CATEGORY_LIST
      });
    });

    const expectedActions = [
      { type: actions.CATEGORY_LIST_REQUEST },
      { type: actions.CATEGORY_LIST_SUCCESS, payload: CATEGORY_LIST },
    ];

    const store = mockStore({ categories: {} })

    return store.dispatch(listCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates CATEGORY_LIST_FAIL after failing to fetch categories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response:{ message: 'invalid data' }
      });
    });

    const expectedActions = [
      { type: actions.CATEGORY_LIST_REQUEST },
      { type: actions.CATEGORY_LIST_FAIL, payload: 'invalid data' },
    ];

    const store = mockStore({ categories: {} })

    return store.dispatch(listCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});