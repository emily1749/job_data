import buttonColorReducer from '../../reducers/buttonColorReducer';

test('buttonColorReducer returns default initial state of "" when an action is passed', () => {
  const newState = buttonColorReducer(undefined, {});
  expect(newState).toBe('');
});

test('buttonColorReducer returns state of the color upon receiving an action of type "BUTTON_COLOR', () => {
  let buttonColor = '#fff';
  const newState = buttonColorReducer(undefined, {
    type: 'BUTTON_COLOR',
    payload: buttonColor,
  });
  expect(newState).toBe(buttonColor);
});
