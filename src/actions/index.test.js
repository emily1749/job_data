import {
  setCityLocation,
  setStateLocation,
  setOnSort,
  setBubbleColor,
  setQuickColor,
  setMergeColor,
  //   setlocationSubmitted,
  setButtonColor,
  //   setMessage,
} from './';

describe('Action creators', () => {
  test('setCityLocation returns an action with type "CITY_LOCATION"', () => {
    const cityLocation = 'Worcester';
    const action = setCityLocation(cityLocation);
    expect(action).toEqual({ type: 'CITY_LOCATION', payload: cityLocation });
  });

  test('setStateLocation returns an action with type "STATE_LOCATION"', () => {
    const stateLocation = 'Massachusetts';
    const action = setStateLocation(stateLocation);
    expect(action).toEqual({ type: 'STATE_LOCATION', payload: stateLocation });
  });

  test('setOnSort returns an action with the type "ON_SORT"', () => {
    const action = setOnSort(true);
    expect(action).toEqual({ type: 'ON_SORT', payload: true });
  });

  test('setBubbleColor returns an action with type "BUBBLE_COLOR', () => {
    const color = '#fff';
    const action = setBubbleColor(color);
    expect(action).toEqual({ type: 'BUBBLE_COLOR', payload: color });
  });

  test('setQuickColor returns an action with type "QUICK_COLOR', () => {
    const color = '#fff';
    const action = setQuickColor(color);
    expect(action).toEqual({ type: 'QUICK_COLOR', payload: color });
  });

  test('setMergeColor returns an action with type "MERGE_COLOR', () => {
    const color = '#fff';
    const action = setMergeColor(color);
    expect(action).toEqual({ type: 'MERGE_COLOR', payload: color });
  });

  test('setMergeColor returns an action with type "MERGE_COLOR', () => {
    const color = '#fff';
    const action = setMergeColor(color);
    expect(action).toEqual({ type: 'MERGE_COLOR', payload: color });
  });

  test('setButtonColor returns an action with type "BUTTON_COLOR', () => {
    const color = '#fff';
    const action = setButtonColor(color);
    expect(action).toEqual({ type: 'BUTTON_COLOR', payload: color });
  });
});
