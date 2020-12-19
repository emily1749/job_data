import quickColorReducer from '../../reducers/quickColorReducer';

test('quickColorReducer returns default initial state of "" when an action is passed', () => {
  const newState = quickColorReducer(undefined, {});
  expect(newState).toBe('');
});

test('quickColorReducer returns state of the color upon receiving an action of type "QUICK_COLOR', () => {
  let quickColor = '#fff';
  const newState = quickColorReducer(undefined, {
    type: 'QUICK_COLOR',
    payload: quickColor,
  });
  expect(newState).toBe(quickColor);
});
