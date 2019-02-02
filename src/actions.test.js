import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'

import * as actions from './actions';

const mockStore = configureMockStore([thunk])

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
  const expectedAction = [{
    type: REQUEST_ROBOTS_PENDING,
  }]
  expect(action).toEqual(expectedAction)
})

describe('AsyncActions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates REQUEST_ROBOTS_SUCCESS when fetching robots has been done', () => {
    const store = mockStore();

    // fetchMock.mock('/users', 200)

    fetchMock.getOnce('*', {
      data: {}
    })

    const expectedActions = [
      {type: REQUEST_ROBOTS_PENDING},
      {type: REQUEST_ROBOTS_SUCCESS, payload: {data: {}} }
    ]

    // store.dispatch(actions.requestRobots())
    // const action = store.getActions();
    // expect(action).toEqual(expectedActions)
    expect.assertions(1)
    return store.dispatch(actions.requestRobots()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      }).catch(err => console.log(err))
  })

  it('creates REQUEST_ROBOTS_FAILURE when fetching robots has been failed', () => {
    const store = mockStore();

    fetchMock.getOnce('*', {throws: "error"})

    const expectedActions = [
      {type: REQUEST_ROBOTS_PENDING},
      {type: REQUEST_ROBOTS_FAILED, payload: 'error'}
    ]

    // store.dispatch(actions.requestRobots())
    // const action = store.getActions();
    // expect(action).toEqual(expectedActions)
    expect.assertions(1)
    return store.dispatch(actions.requestRobots()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      }).catch(err => console.log(err))
  })
})
