import jobData from '../api/jobData';

export const fetchJobData = (city, state) => dispatch => {
  dispatch({ type: 'TOGGLE_LOADING' });
  jobData
    .get(`${city}/${state}`)
    .then(value => {
      dispatch({ type: 'STORE_VALUE', payload: value.data });
      dispatch({ type: 'COPY_VALUE', payload: value.data });
    })
    .catch(error => {
      dispatch({ type: 'FETCH_ERROR', payload: error });
    });
};

export const setCityLocation = cityLocation => {
  return {
    type: 'CITY_LOCATION',
    payload: cityLocation,
  };
};

export const setStateLocation = stateLocation => {
  return {
    type: 'STATE_LOCATION',
    payload: stateLocation,
  };
};

export const setOnSort = boolean => {
  return {
    type: 'ON_SORT',
    payload: boolean,
  };
};

export const setBubbleColor = color => {
  return {
    type: 'BUBBLE_COLOR',
    payload: color,
  };
};

export const setQuickColor = color => {
  return {
    type: 'QUICK_COLOR',
    payload: color,
  };
};

export const setMergeColor = color => {
  return {
    type: 'MERGE_COLOR',
    payload: color,
  };
};

export const setlocationSubmitted = bool => {
  return {
    type: 'LOCATION_SUBMITTED',
    payload: bool,
  };
};

export const setButtonColor = color => {
  return {
    type: 'BUTTON_COLOR',
    payload: color,
  };
};

export const setMessage = msg => {
  return {
    type: 'MESSAGE',
    payload: msg,
  };
};
