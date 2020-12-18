import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import { storeFactory } from '../test/testUtils';
import { App } from './App';
import * as actionCreators from '../actions';
// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

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

// const store = mockStore(initialState);
const store = storeFactory(initialState);
const setup = props => {
  return mount(
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

// console.log(setup(initialState).debug());

describe('App Component', () => {
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

  it('execute onStateInputChange onClick of bubble sort button', () => {
    // let stateLocation = 'Massachusetts';
    // const setStateLocation = jest.fn();
    // props.setStateLocation = setStateLocation;
    // const wrapper = shallow(<Location {...props} />);
    // const spy = jest.spyOn(wrapper.instance().props, 'setStateLocation');

    // wrapper
    //   .find('.input-text-state')
    //   .simulate('change', { target: { value: stateLocation } });

    // expect(setStateLocation).toHaveBeenCalled();

    const wrapper = shallow(<App {...props} />);
    const instance = wrapper.instance();
    instance.bubbleSort = jest.fn();
    const spy = jest.spyOn(instance, 'bubbleSort');
    instance.forceUpdate();
    wrapper
      .find('button')
      .first()
      .simulate(
        'click'
        // , { target: { value: stateLocation } }
      );
    expect(instance.bubbleSort).toHaveBeenCalled();
    // const spy = jest.spyOn(App.prototype, 'bubbleSort');
    // const wrapper = setup(props);
    // console.log(wrapper.debug());
    // const spy = jest.spyOn(wrapper.find('button').first());
    // this.props.setBubbleColor('#f08a5d');
    // const setBubbleColor = jest.fn();
    // props.setBubbleColor = setBubbleColor;
    // const wrapper = shallow(<App {...props} />);
    // // const spy = jest.spyOn(wrapper.instance().props, 'setBubbleColor');
    // wrapper.find('.bubbleSortingAlgorithm').simulate(
    //   'click'
    //   // , { target: { value: stateLocation } }
    // );
    // expect(setBubbleColor).toHaveBeenCalled();
  });

  // it('calls"componentDidMount" when jobData state updates', () => {
  //   const wrapper = shallow(<App {...props} />);
  //   const instance = wrapper.instance();
  //   jest.spyOn(instance, 'componentDidUpdate');
  //   instance.componentDidMount();
  //   expect(instance.co)
  // });
  // it('componentDidMount updates jobData state', () => {
  //   // App.prototype.setState = jest.fn();
  //   const spy = sinon.spy(App.prototype, 'componentDidUpdate');
  //   const wrapper = shallow(<App {...props} />);
  //   wrapper.setProps({
  //     jobData: {
  //       loading: false,
  //       jobDataCopy: [],
  //       error: false,
  //       locationSubmitted: false,
  //       message: '',
  //     },
  //   });
  //   expect(spy.calledOnce).toBe(false);
  //   // const wrapper = setup(props);
  //   console.log(wrapper.debug());
  //   // const spy = jest.spyOn(React, 'setState');
  //   let arr = [
  //     ['Typescript', 0.2, 0],
  //     ['Ruby', 1.52, 0],
  //     ['Python', 27.21, 0],
  //     ['C++', 22.84, 0],
  //     ['Golang', 0.4, 0],
  //     ['Swift', 2.34, 0],
  //     ['Javascript', 17.16, 0],
  //     ['PHP', 2.44, 0],
  //     ['Java', 17.56, 0],
  //     ['C#', 8.22, 0],
  //   ];
  //   wrapper.setProps({
  //     jobData: {
  //       loading: false,
  //       jobDataCopy: arr,
  //       error: false,
  //       locationSubmitted: true,
  //       message: '',
  //     },
  //     // jobDataCopy: arr,
  //     // locationSubmitted: true,
  //   });
  //   // wrapper.instance().prevProps.jobDataCopy;
  //   wrapper.instance().componentDidUpdate();
  //   // expect(wrapper.instance().props.jobData.jobDataCopy.length).toBe(10);
  //   expect(wrapper.instance().state.resultArray.length).toBe(10);

  //   // expect(spy.calledOnce).toBe(true);

  //   // console.log(wrapper.debug());
  //   // expect(
  //   //   wrapper
  //   //     .find('BarGraph')
  //   //     // .dive()
  //   //     .props('resultArray')
  //   // ).toEqual(arr);

  //   // const wrapper = shallow(<Location {...props} />);
  //   // const spy = jest.spyOn(wrapper.instance().props, 'setCityLocation');

  //   // wrapper
  //   //   .find('input')
  //   //   .first()
  //   //   .simulate('change', { target: { value: cityLocation } });

  //   // expect(setCityLocation).toHaveBeenCalled();
  //   // wrapper.setProps({props.jobData.jobDataCopy: {["Javascript"]}})
  // });
});
