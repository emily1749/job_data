import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
// import sinon from 'sinon'
import thunk from 'redux-thunk';
import Loading from './Loading';
import moxios from 'moxios';

// import ConnectedUserInput, { UserInput } from '../src/components/UserInput'
import * as actionCreators from '../actions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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
const store = mockStore(initialState);

// const onSubmit = sinon.spy();
// const changeUserLocationSpy = sinon.spy();
// const removeTechnologySpy = sinon.spy();
// const addTechnologySpy = sinon.spy();
// const changeUserTechnologyWeightSpy = sinon.spy();

const wrapper = mount(
  <Provider store={store}>
    <Loading
    //   allTechs={['javascript', 'git', 'jquery', 'sass', 'rails', 'kafka', 'aws', 'graphql', 'bootstrap', 'rust', 'docker', 'redux', 'react native', 'express', 'react', 'vue', 'd3', 'ember', 'django', 'flask', 'sql', 'java', 'c#', 'python', 'php', 'c++', 'c', 'clojure', 'typescript', 'ruby', 'swift', 'objective-c', '.net', 'assembly', 'r', 'perl', 'vba', 'matlab', 'golang', 'scala', 'haskell', 'node', 'angular', '.net core', 'cordova', 'mysql', 'sqlite', 'postgresql', 'mongodb', 'oracle', 'redis', 'html', 'css'].sort()}
    //   onSubmit={onSubmit}
    //   changeUserLocation={changeUserLocationSpy}
    //   removeTechnology={removeTechnologySpy}
    //   addTechnology={addTechnologySpy}
    //   changeUserTechnologyWeight={changeUserTechnologyWeightSpy}
    />
  </Provider>
);

// const testTechInputInAllTec hs = 'css';

describe('(Component) UserInput', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

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

  it('should not have message display if loading is true', () => {});
});
