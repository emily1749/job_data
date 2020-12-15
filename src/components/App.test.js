import React from 'react';
import { shallow } from 'enzyme';

import App, { UnconnectedApp } from './App';
import { storeFactory } from '../test/testUtils';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('redux properties', () => {
  test('has access to "onSort" state', () => {
    const onSort = false;
    const wrapper = setup({ onSort });
    const onSortProp = wrapper.instance().props.onSort;
    expect(onSortProp).toBe(onSort);
  });

  test('has access to "bubbleColor" state', () => {
    const bubbleColor = '';
    const wrapper = setup({ bubbleColor });
    const bubbleColorProp = wrapper.instance().props.bubbleColor;
    expect(bubbleColorProp).toBe(bubbleColor);
  });

  test('has access to "quickColor" state', () => {
    const quickColor = '';
    const wrapper = setup({ quickColor });
    const quickColorProp = wrapper.instance().props.quickColor;
    expect(quickColorProp).toBe(quickColor);
  });

  test('has access to "mergeColor" state', () => {
    const mergeColor = '';
    const wrapper = setup({ mergeColor });
    const mergeColorProp = wrapper.instance().props.mergeColor;
    expect(mergeColorProp).toBe(mergeColor);
  });

  test('has access to "cityLocation" state', () => {
    const cityLocation = 'Worcester';
    const wrapper = setup({ cityLocation });
    const cityLocationProp = wrapper.instance().props.cityLocation;
    expect(cityLocationProp).toBe(cityLocation);
  });

  test('has access to "stateLocation" state', () => {
    const stateLocation = 'Massachusetts';
    const wrapper = setup({ stateLocation });
    const stateLocationProp = wrapper.instance().props.stateLocation;
    expect(stateLocationProp).toBe(stateLocation);
  });

  test('has access to "buttonColor" state', () => {
    const buttonColor = '';
    const wrapper = setup({ buttonColor });
    const buttonColorProp = wrapper.instance().props.buttonColor;
    expect(buttonColorProp).toBe(buttonColor);
  });

  // test('has access to "loading" state', () => {
  //   const jobData = {
  //     error: false,
  //     jobDataCopy: [],
  //     loading: false,
  //     locationSubmitted: false,
  //     message: 'Please enter location',
  //   };
  //   const wrapper = setup();
  // });
  //   test('has access to "jobDataCopy" state', () => {
  //     const jobData = {
  //       error: false,
  //       jobDataCopy: [],
  //       loading: false,
  //       locationSubmitted: false,
  //       message: 'Please enter location',
  //     };

  //     const wrapper = setup({ jobData });
  //     const jobDataProp = wrapper.instance().props.jobData;
  //     expect(jobDataProp).toBe({
  //       error: false,
  //       jobDataCopy: [],
  //       loading: false,
  //       locationSubmitted: false,
  //       message: 'Please enter location',
  //     });
  //   });

  test('has access to "locationSubmitted" state', () => {
    const locationSubmitted = false;
    const wrapper = setup({ locationSubmitted });
    const locationSubmittedProp = wrapper.instance().props.locationSubmitted;
    expect(locationSubmittedProp).toBe(locationSubmitted);
  });

  test('"setOnSort" action creator is a function on the props', () => {
    const wrapper = setup();
    const setOnSortProp = wrapper.instance().props.setOnSort;
    expect(setOnSortProp).toBeInstanceOf(Function);
  });

  test('"setBubbleColor" action creator is a function on the props', () => {
    const wrapper = setup();
    const setBubbleColorProp = wrapper.instance().props.setBubbleColor;
    expect(setBubbleColorProp).toBeInstanceOf(Function);
  });

  test('"setMergeColor" action creator is a function on the props', () => {
    const wrapper = setup();
    const setMergeColorProp = wrapper.instance().props.setMergeColor;
    expect(setMergeColorProp).toBeInstanceOf(Function);
  });

  test('"setQuickColor" action creator is a function on the props', () => {
    const wrapper = setup();
    const setQuickColorProp = wrapper.instance().props.setQuickColor;
    expect(setQuickColorProp).toBeInstanceOf(Function);
  });

  test('"setCityLocation" action creator is a function on the props', () => {
    const wrapper = setup();
    const setCityLocationProp = wrapper.instance().props.setCityLocation;
    expect(setCityLocationProp).toBeInstanceOf(Function);
  });

  test('"setStateLocation" action creator is a function to the prosp', () => {
    const wrapper = setup();
    const setStateLocationProp = wrapper.instance().props.setStateLocation;
    expect(setStateLocationProp).toBeInstanceOf(Function);
  });

  test('"fetchJobData" action creator is a function on the props', () => {
    const wrapper = setup();
    const fetchJobDataProp = wrapper.instance().props.fetchJobData;
    expect(fetchJobDataProp).toBeInstanceOf(Function);
  });

  test('"setButtonColor" action creator is a function on the props', () => {
    const wrapper = setup();
    const setButtonColorProp = wrapper.instance().props.setButtonColor;
    expect(setButtonColorProp).toBeInstanceOf(Function);
  });
  // setOnSort,
  // setBubbleColor,
  // setMergeColor,
  // setQuickColor,
  // setCityLocation,
  // setStateLocation,
  // fetchJobData,
  // setButtonColor,
});
