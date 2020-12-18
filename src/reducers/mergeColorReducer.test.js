import mergeColorReducer from './mergeColorReducer';

test('mergeColorReducer returns default initial state of "" when an action is passed', () => {
  const newState = mergeColorReducer(undefined, {});
  expect(newState).toBe('');
});

test('mergeColorReducer returns state of the color upon receiving an action of type "BUBBLE_COLOR', () => {
  let mergeColor = '#fff';
  const newState = mergeColorReducer(undefined, {
    type: 'MERGE_COLOR',
    payload: mergeColor,
  });
  expect(newState).toBe(mergeColor);
});
