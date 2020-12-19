import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { storeFactory } from '../lib/testUtils';

import { App } from '../../components/App';

const initialState = {
  onSort: false,
  bubbleColor: '',
  quickColor: '',
  mergeColor: '',
  cityLocation: '',
  stateLocation: '',
  buttonColor: '',
  jobData: {
    loading: false,
    jobDataCopy: [],
    error: false,
    locationSubmitted: false,
    message: '',
  },
};

const store = storeFactory(initialState);

describe('App Component', () => {
  const setup = props => {
    return mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  };

  let props;

  beforeEach(() => {
    props = {
      onSort: false,
      bubbleColor: '',
      quickColor: '',
      mergeColor: '',
      cityLocation: '',
      stateLocation: '',
      buttonColor: '',
      jobData: {
        loading: false,
        jobDataCopy: [],
        error: false,
        locationSubmitted: true,
        message: '',
      },
    };
  });

  it('renders', () => {
    const wrapper = setup(props);
    expect(wrapper.length).toBe(1);
  });

  it('execute bubbleSort function onClick of bubble sort button', () => {
    const wrapper = shallow(<App {...props} />);
    const instance = wrapper.instance();
    instance.bubbleSort = jest.fn();
    const spy = jest.spyOn(instance, 'bubbleSort');
    instance.forceUpdate();
    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(instance.bubbleSort).toHaveBeenCalled();
  });

  it('execute quickSort function onClick of quick sort button', () => {
    const wrapper = shallow(<App {...props} />);
    const instance = wrapper.instance();
    instance.quickSort = jest.fn();
    const spy = jest.spyOn(instance, 'quickSort');
    instance.forceUpdate();
    wrapper.find('.quickSortingAlgorithm').simulate('click');
    expect(instance.quickSort).toHaveBeenCalled();
  });

  it('execute mergeSort function onClick of merge sort button', () => {
    const wrapper = shallow(<App {...props} />);
    const instance = wrapper.instance();
    instance.mergeSort = jest.fn();
    const spy = jest.spyOn(instance, 'mergeSort');
    instance.forceUpdate();
    wrapper.find('.mergeSortingAlgorithm').simulate('click');
    expect(instance.mergeSort).toHaveBeenCalled();
  });

  it('execute resetSort function onClick of reset button', () => {
    const wrapper = shallow(<App {...props} />);
    const instance = wrapper.instance();
    instance.resetSort = jest.fn();
    const spy = jest.spyOn(instance, 'resetSort');
    instance.forceUpdate();
    wrapper.find('.resetSortBtn').simulate('click');
    expect(instance.resetSort).toHaveBeenCalled();
  });
});
