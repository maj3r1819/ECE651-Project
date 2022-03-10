import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../../constants/categoryConstants';
import { listCategoryDetails } from '../categoryActionCreators';
import { CATEGORY_DETAIL } from '../../mock/mockCategoryRes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getCategoryList actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates CATEGORY_DETAIL_SUCCESS after successfuly fetching category detail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: CATEGORY_DETAIL
      });
    });

    const expectedActions = [
      { type: actions.CATEGORY_DETAIL_REQUEST },
      { type: actions.CATEGORY_DETAIL_SUCCESS, payload: CATEGORY_DETAIL },
    ];

    const store = mockStore({ categories: {} })

    return store.dispatch(listCategoryDetails()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates CATEGORY_DETAIL_FAIL after failing to fetch categories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response:{ message: 'invalid data' }
      });
    });

    const expectedActions = [
      { type: actions.CATEGORY_DETAIL_REQUEST },
      { type: actions.CATEGORY_DETAIL_FAIL, payload: 'invalid data' },
    ];

    const store = mockStore({ categories: {} })

    return store.dispatch(listCategoryDetails()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


});