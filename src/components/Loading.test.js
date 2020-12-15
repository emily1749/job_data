import React from 'react';
import Loading from './Loading';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { mount } from 'enzyme';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import Location from './Location';
import moxios from 'moxios';

const initialState = {
  jobData: {
    jobDataCopy: [],
    loading: false,
    error: false,
    locationSubmitted: false,
    message: 'Please enter location',
  },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('App Component', () => {
  let props;

  beforeEach(() => {
    props = {
      jobData: {
        jobDataCopy: [],
        loading: false,
        error: false,
        locationSubmitted: false,
        message: 'Please enter location',
      },
    };
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Loading {...props} />
      </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
// import React from 'react';
// import { shallow } from 'enzyme';
// import { mount } from 'enzyme';
// // import sinon from 'sinon'
// import thunk from 'redux-thunk';
// import Loading from './Loading';

// // import ConnectedUserInput, { UserInput } from '../src/components/UserInput'
// import * as actionCreators from '../actions';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// const initialState = {
//   jobData: {
//     jobDataCopy: [],
//     loading: false,
//     error: false,
//     locationSubmitted: false,
//     message: 'Please enter location',
//   },
// };
// const store = mockStore(initialState);

// const wrapper = mount(
//   <Provider store={store}>
//     <Loading />
//   </Provider>
// );

// console.log(wrapper.debug());

// const testTechInputInAllTec hs = 'css';

// test('has access to "Loading" state', () => {
//   wrapper.setProps();
//   // expect(onSortProp).toBe(onSort);
// });

// describe('(Component) UserInput', () => {
//   it('renders...', () => {
//     expect(wrapper).to.have.length(1);
//   });

//   it('should have message if loading is false', () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: 'testResponse',
//       });
//     });

//     const res = store.dispatch(actionCreators.fetchJobData('city', 'state'));
//     expect(store.getState().jobData.locationSubmitted).equals(true);
//     // .then(() => {
//     //   const newState = store.getState();
//     //   // expect(newState.secretWord).toBe('test');
//     // });
//   });

//   it('should not have message display if loading is true', () => {});
// });
