import stateLocationReducer from './stateLocationReducer';

test('returns default initial state of "" when on action is passed', () => {
  const newState = stateLocationReducer(undefined, {});
  expect(newState).toBe('');
});

test('returns state of the state upon receiving an action of type "STATE_LOCATION"', () => {
  let stateLocation = 'Massachusetts';
  const newState = stateLocationReducer(undefined, {
    type: 'STATE_LOCATION',
    payload: stateLocation,
  });
  expect(newState).toBe(stateLocation);
});
