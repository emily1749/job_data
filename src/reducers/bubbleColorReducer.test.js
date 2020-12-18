import bubbleColorReducer from './bubbleColorReducer';

test('bubbleColorReducer returns default initial state of "" when an action is passed', () => {
  const newState = bubbleColorReducer(undefined, {});
  expect(newState).toBe('');
});

test('bubbleColorReducer returns state of the color upon receiving an actio nof type "BUBBLE_COLOR', () => {
  let bubbleColor = '#fff';
  const newState = bubbleColorReducer(undefined, {
    type: 'BUBBLE_COLOR',
    payload: bubbleColor,
  });
  expect(newState).toBe(bubbleColor);
});
