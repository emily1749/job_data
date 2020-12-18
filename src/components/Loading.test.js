//DONE!! GOOD :)

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Loading from './Loading';

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

const setup = props => {
  return renderer.create(
    <Provider store={store}>
      <Loading {...props} />
    </Provider>
  );
};

describe('Loading Component', () => {
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

  it('renders', () => {
    const tree = setup(props);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders an error message when a network error occurs', () => {
    initialState.jobData.error = true;
    initialState.jobData.message = "Error loading location's data";

    const tree = setup(props);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders a loading message when loading is true', () => {
    initialState.jobData.loading = true;

    const tree = setup(props);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
