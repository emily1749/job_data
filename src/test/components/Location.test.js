import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Location } from '../../components/Location';

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
    const fakeEvent = { preventDefault: () => console.log('prevent default') };
    props.cityLocation = 'Worcester';
    props.stateLocation = 'Massachusetts';
    const fetchJobData = jest.fn();
    props.fetchJobData = fetchJobData;
    const wrapper = shallow(<Location {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'fetchJobData');

    wrapper.find('form').simulate('submit', fakeEvent);
    expect(fetchJobData).toHaveBeenCalled();
  });
});
