import fetchJobData from './fetchJobDataReducer';

describe('fetchJobDataReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      jobDataCopy: [],
      loading: false,
      error: false,
      locationSubmitted: false,
      message: 'Please enter location',
    };
  });

  test('fetchJobData returns default initial state when an action is passed', () => {
    const newState = fetchJobData(undefined, {});
    expect(newState).toEqual(state);
  });

  test('fetchJobDataReducer returns loading true upon receiving an action of type "TOGGLE_LOADING"', () => {
    state.loading = true;
    const newState = fetchJobData(undefined, {
      type: 'TOGGLE_LOADING',
    });
    expect(newState).toEqual(state);
  });

  test('fetchJobDataReducer returns new state and updated jobDataCopy upon receiving an action of type "STORE_VALUE"', () => {
    state.locationSubmitted = true;
    state.jobDataCopy = [
      ['JavaScript', 33.33, 0],
      ['Python', 66.67, 0],
    ];

    const newState = fetchJobData(undefined, {
      type: 'STORE_VALUE',
      payload: {
        JavaScript: 10,
        Python: 20,
      },
    });
    expect(newState).toEqual(state);
  });

  test('fetchJobDataReducer returns error state upon receiving an action of type "FETCH_ERROR"', () => {
    state.error = true;
    state.message = "Error loading location's data";
    const newState = fetchJobData(undefined, {
      type: 'FETCH_ERROR',
    });
    expect(newState).toEqual(state);
  });
});
