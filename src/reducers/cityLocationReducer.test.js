import cityLocationReducer from './cityLocationReducer';

test('cityLocationReducer returns default initial state of "" when an action is passed', () => {
  const newState = cityLocationReducer(undefined, {});
  expect(newState).toBe('');
});

test('cityLocationReducer returns state of the city location upon receiving an action of type "CITY_LOCATION"', () => {
  let cityLocation = 'Worcester';
  const newState = cityLocationReducer(undefined, {
    type: 'CITY_LOCATION',
    payload: cityLocation,
  });
  expect(newState).toBe(cityLocation);
});
