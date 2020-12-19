import React from 'react';

import mockAxios from 'axios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import moxio from 'moxios';
import {
  fetchJobData,
  setCityLocation,
  setStateLocation,
  setOnSort,
  setBubbleColor,
  setQuickColor,
  setMergeColor,
  //   setlocationSubmitted,
  setButtonColor,
  //   setMessage,
} from './';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  jobData: {
    jobDataCopy: [],
    loading: false,
    error: false,
    locationSubmitted: false,
    message: 'Please enter location',
  },
};

const mockDataCreator = (body, succeeds = true) => () => {
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)));
  });
};
describe('fetchJobReducer', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  // describe('start', () => {
  it('fires loading', () => {
    store.dispatch(fetchJobData(('worcester', 'ma'))).then(
      expect(store.getActions()).toContainEqual({
        type: 'TOGGLE_LOADING',
      })
    );
  });
  // });

  // describe('dispatches action to store data', () => {
  //   beforeEach(() => {
  //     store.dispatch(fetchJobData(('worcester', 'ma')));
  //     // beforeEach(() => {
  //     //     // dispatch = jest.fn();
  //     moxios.install();
  //     store = mockStore(initialState);
  //   });

  //   // });
  //   afterEach(() => {
  //     moxios.uninstall();
  //   });
  //   it('dispatch', async () => {
  //     // const actions = store.getActions();
  //     const result = await fetchJobData('worcester');
  //     // expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  //     return store
  //       .dispatch(fetchJobData('worcester', 'massachusetts'))
  //       .then(() => {
  //         const actualAction = store.getActions();
  //         expect(actualAction).toEqual(expectedActions);
  //         // expect(actualAction).toEqual('hi');
  //         console.log('here');
  //         done();
  //       });
  //     // expect(actions).toContainEqual({
  //     //   type: 'STORE_VALUE',
  //     //   payload: 'hi',
  //     // });
  //   });
  // });
});
// const initialState = {
//   jobData: {
//     jobDataCopy: [],
//     loading: false,
//     error: false,
//     locationSubmitted: false,
//     message: 'Please enter location',
//   },
// };

// describe('fetchJobData action creator', () => {
//   // let dispatch;
//   const resultArr = [
//     {
//       JavaScript: 20,
//       Python: 30,
//     },
//   ];
//   let store;
//   beforeEach(() => {
//     // dispatch = jest.fn();
//     moxios.install();
//     store = mockStore(initialState);
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });

//   it('dispatches "STORE_VALUE" action  and returns data on success', async () => {
//     moxios.wait(() => {
//       let request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: resultArr,
//       });
//     });

//     // const expectedActions = [
//     //   {
//     //     type: 'STORE_VALUE',
//     //     payload: resultArr,
//     //   },
//     // ];

//     const result = await fetchJobData('worcester');
//     // expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
//     return store
//       .dispatch(fetchJobData('worcester', 'massachusetts'))
//       .then(() => {
//         const actualAction = store.getActions();
//         expect(actualAction).toEqual(expectedActions);
//         // expect(actualAction).toEqual('hi');
//         console.log('here');
//         done();
//       });
//   });
// });

// import React from 'react';
// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// import Loading from './Loading';

// const initialState = {
//   jobData: {
//     jobDataCopy: [],
//     loading: false,
//     error: false,
//     locationSubmitted: false,
//     message: 'Please enter location',
//   },
// };

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// const store = mockStore(initialState);

// const setup = props => {
//   return renderer.create(
//     <Provider store={store}>
//       <Loading {...props} />
//     </Provider>
//   );
// };

// describe('Loading Component', () => {
//   let props;

//   beforeEach(() => {
//     props = {
//       jobData: {
//         jobDataCopy: [],
//         loading: false,
//         error: false,
//         locationSubmitted: false,
//         message: 'Please enter location',
//       },
//     };
//   });

//   it('renders', () => {
//     const tree = setup(props);
//     expect(tree.toJSON()).toMatchSnapshot();
//   });

describe('Action creators', () => {
  test('setCityLocation returns an action with type "CITY_LOCATION"', () => {
    const cityLocation = 'Worcester';
    const action = setCityLocation(cityLocation);
    expect(action).toEqual({ type: 'CITY_LOCATION', payload: cityLocation });
  });

  test('setStateLocation returns an action with type "STATE_LOCATION"', () => {
    const stateLocation = 'Massachusetts';
    const action = setStateLocation(stateLocation);
    expect(action).toEqual({ type: 'STATE_LOCATION', payload: stateLocation });
  });

  test('setOnSort returns an action with the type "ON_SORT"', () => {
    const action = setOnSort(true);
    expect(action).toEqual({ type: 'ON_SORT', payload: true });
  });

  test('setBubbleColor returns an action with type "BUBBLE_COLOR', () => {
    const color = '#fff';
    const action = setBubbleColor(color);
    expect(action).toEqual({ type: 'BUBBLE_COLOR', payload: color });
  });

  test('setQuickColor returns an action with type "QUICK_COLOR', () => {
    const color = '#fff';
    const action = setQuickColor(color);
    expect(action).toEqual({ type: 'QUICK_COLOR', payload: color });
  });

  test('setMergeColor returns an action with type "MERGE_COLOR', () => {
    const color = '#fff';
    const action = setMergeColor(color);
    expect(action).toEqual({ type: 'MERGE_COLOR', payload: color });
  });

  test('setMergeColor returns an action with type "MERGE_COLOR', () => {
    const color = '#fff';
    const action = setMergeColor(color);
    expect(action).toEqual({ type: 'MERGE_COLOR', payload: color });
  });

  test('setButtonColor returns an action with type "BUTTON_COLOR', () => {
    const color = '#fff';
    const action = setButtonColor(color);
    expect(action).toEqual({ type: 'BUTTON_COLOR', payload: color });
  });
});
