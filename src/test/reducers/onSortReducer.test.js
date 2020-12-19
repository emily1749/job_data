import onSortReducer from '../../reducers/onSortReducer';

test('onSortReducer returns default initial state of "" when an action is passed', () => {
  const newState = onSortReducer(undefined, {});
  expect(newState).toBe(false);
});

test('onSortReducer returns state boolean upon receiving an action of type "ON_SORT', () => {
  let onSortBool = true;
  const newState = onSortReducer(undefined, {
    type: 'ON_SORT',
    payload: onSortBool,
  });
  expect(newState).toBe(onSortBool);
});
