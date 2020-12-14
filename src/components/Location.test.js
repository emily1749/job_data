import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import Location from './Location';
import moxios from 'moxios';

// import ConnectedUserInput, { UserInput } from '../src/components/UserInput'
import * as actionCreators from '../actions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  onSort: false,
  cityLocation: '',
  stateLocation: '',
  buttonColor: '',
};
const store = mockStore(initialState);

const onCityInputChange = sinon.spy();
// const onSubmit = sinon.spy();
// const changeUserLocationSpy = sinon.spy();
// const removeTechnologySpy = sinon.spy();
// const addTechnologySpy = sinon.spy();
// const changeUserTechnologyWeightSpy = sinon.spy();

const wrapper = mount(
  <Provider store={store}>
    <Location
      onCityInputChange={onCityInputChange}
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
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should return city when setCityLocation is dispatched', () => {
    let userCityLocation = 'Worcester';
    store.dispatch(actionCreators.setCityLocation(userCityLocation));
    const actions = store.getActions();
    const expectedPayload = {
      type: 'CITY_LOCATION',
      payload: userCityLocation,
    };
    expect(actions).to.deep.equal([expectedPayload]);
  });

  it('should return state when setStateLocation is dispatched', () => {
    let userStateLocation = 'Massachusetts';
    store.dispatch(actionCreators.setStateLocation(userStateLocation));
    const actions = store.getActions();
    const expectedStatePayload = {
      type: 'STATE_LOCATION',
      payload: userStateLocation,
    };
    expect(actions[1]).to.deep.equal(expectedStatePayload);
  });

  //   it('should return state when setStateLocation is dispatched', () => {
  //     let userStateLocation = 'Massachusetts';
  //     store.dispatch(actionCreators.setStateLocation(userStateLocation));
  //     const actions = store.getActions();
  //     const expectedPayload = {
  //       type: 'STATE_LOCATION',
  //       payload: userStateLocation,
  //     };
  //     expect(actions).to.deep.equal([expectedPayload]);
  //   });
  //   it('should execute onCityInputChange onChange of city location', () => {
  //     const userLocationValue = 'worcester';
  //     wrapper.find('');
  //   });
  //   it('should not have message display if loading is true', () => {});
});
