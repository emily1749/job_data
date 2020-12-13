export default (state = '', action) => {
  switch (action.type) {
    case 'BUTTON_COLOR':
      return action.payload;
    default:
      return state;
  }
};
