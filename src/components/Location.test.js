//DONE GOOD :)

import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Location } from './Location';
import * as actionCreators from '../actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  onSort: false,
  cityLocation: '',
  stateLocation: '',
  buttonColor: '',
};
const store = mockStore(initialState);

const setup = props => {
  return mount(
    <Provider store={store}>
      <Location {...props} />
    </Provider>
  );
};

describe('Location Component', () => {
  let props;

  beforeEach(() => {
    props = {
      onSort: false,
      cityLocation: '',
      stateLocation: '',
      buttonColor: '',
    };
  });

  it('renders', () => {
    const wrapper = setup(props);
    expect(wrapper.length).toBe(1);
  });

  it('should return city when setCityLocation is dispatched', () => {
    let userCityLocation = 'Worcester';
    store.dispatch(actionCreators.setCityLocation(userCityLocation));
    const actions = store.getActions();
    const expectedPayload = {
      type: 'CITY_LOCATION',
      payload: userCityLocation,
    };

    expect(actions).toEqual([expectedPayload]);
  });

  it('should return state when setStateLocation is dispatched', () => {
    let userStateLocation = 'Massachusetts';
    store.dispatch(actionCreators.setStateLocation(userStateLocation));
    const actions = store.getActions();
    const expectedStatePayload = {
      type: 'STATE_LOCATION',
      payload: userStateLocation,
    };

    expect(actions[1]).toEqual(expectedStatePayload);
  });

  it('execute onCityInputChange onChange of user city location', () => {
    let cityLocation = 'Worcester';
    const setCityLocation = jest.fn();
    props.setCityLocation = setCityLocation;
    const wrapper = shallow(<Location {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'setCityLocation');

    wrapper
      .find('input')
      .first()
      .simulate('change', { target: { value: cityLocation } });

    expect(setCityLocation).toHaveBeenCalled();
  });

  it('execute onStateInputChange onChange of user state location', () => {
    let stateLocation = 'Massachusetts';
    const setStateLocation = jest.fn();
    props.setStateLocation = setStateLocation;
    const wrapper = shallow(<Location {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'setStateLocation');

    wrapper
      .find('.input-text-state')
      .simulate('change', { target: { value: stateLocation } });

    expect(setStateLocation).toHaveBeenCalled();
  });

  it('execute onStateInputChange onChange of user state location', () => {
    let stateLocation = 'Massachusetts';
    const setStateLocation = jest.fn();
    props.setStateLocation = setStateLocation;
    const wrapper = shallow(<Location {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'setStateLocation');

    wrapper
      .find('.input-text-state')
      .simulate('change', { target: { value: stateLocation } });

    expect(setStateLocation).toHaveBeenCalled();
  });

  it('execute fetchJobData onSubmit of user state location', () => {
    // let stateLocation = 'Massachusetts';
    const fakeEvent = { preventDefault: () => console.log('prevent default') };
    props.cityLocation = 'Worcester';
    props.stateLocation = 'Massachusetts';
    const fetchJobData = jest.fn();
    props.fetchJobData = fetchJobData;
    const wrapper = shallow(<Location {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'fetchJobData');

    wrapper.find('form').simulate('submit', fakeEvent);
    // expect(wrapper.find('form').length).toBe(1);
    expect(fetchJobData).toHaveBeenCalled();
  });
});
