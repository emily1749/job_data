import stateLocationReducer from '../../reducers/stateLocationReducer';

test('stateLocationReducer returns default initial state of "" when an action is passed', () => {
  const newState = stateLocationReducer(undefined, {});
  expect(newState).toBe('');
});

test('stateLocationReducer returns state of the state location upon receiving an action of type "STATE_LOCATION"', () => {
  let stateLocation = 'Massachusetts';
  const newState = stateLocationReducer(undefined, {
    type: 'STATE_LOCATION',
    payload: stateLocation,
  });
  expect(newState).toBe(stateLocation);
});
