import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock'

import * as actions from './actions';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('should handle requesting robots from the API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots())
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }
  expect(action[0]).toEqual(expectedAction)
})

describe('AsyncActions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creats REQUEST_ROBOTS_SUCCESS when fetching robots has been done', () => {
    fetchMock.getOnce('/users', {
      data: {robots: ['robot']},
      headers: {'content-type': 'application/json'}
    })

    const expectedActions = [
      {type: REQUEST_ROBOTS_PENDING},
      {type: REQUEST_ROBOTS_SUCCESS, body: {robots: ['robot']}}
    ]
    const store = mockStore({robots: []});

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
