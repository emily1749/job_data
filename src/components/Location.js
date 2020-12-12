import React from 'react';
import { connect } from 'react-redux';

import {
  setOnSort,
  setBubbleColor,
  setQuickColor,
  setMergeColor,
  setCityLocation,
  setStateLocation,
  setMessage,
  fetchJobData,
  setButtonColor,
} from '../actions';

const Location = props => {
  let city;
  let state;

  const onCityInputChange = e => props.setCityLocation(e.target.value);

  const onStateInputChange = e => props.setStateLocation(e.target.value);

  const onLocationSubmit = e => {
    // let self = this;
    e.preventDefault();

    if (props.onSort === false) {
      let city = props.cityLocation;
      let state = props.stateLocation;

      if (city && state) {
        console.log('in here');
        city = city.replace(' ', '+');
        props.setMergeColor('');
        props.setBubbleColor('');
        props.setQuickColor('');

        const fetchData = async () => {
          await props.fetchJobData(city, state);
        };
        fetchData();
      }
    }
  };
  return (
    <div>
      <div>
        <h2>Location</h2>
      </div>

      <form onSubmit={onLocationSubmit}>
        <div className='location-container'>
          <div>
            <label>City:</label>

            <input
              type='text'
              name='city'
              className='input-text'
              value={city}
              onChange={onCityInputChange}
            />
          </div>

          <div>
            <label>State:</label>

            <input
              type='text'
              name='state'
              className='input-text'
              value={state}
              onChange={onStateInputChange}
            />
          </div>

          <div>
            <div className='buttonHolder'>
              <button className='btn' style={{ color: props.buttonColor }}>
                Submit Location
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    onSort: state.onSort,
    bubbleColor: state.bubbleColor,
    quickColor: state.quickColor,
    mergeColor: state.mergeColor,
    cityLocation: state.cityLocation,
    stateLocation: state.stateLocation,
    message: state.message,
    loading: state.jobData.loading,
    jobDataCopy: state.jobData.jobDataCopy,
    error: state.jobData.error,
    locationSubmitted: state.jobData.locationSubmitted,
    // resultArray: state.jobData.resultArray,
  };
};

export default connect(mapStateToProps, {
  setOnSort,
  setBubbleColor,
  setMergeColor,
  setQuickColor,
  setCityLocation,
  setStateLocation,
  setMessage,
  fetchJobData,
  setButtonColor,
  // setResultArray,
})(Location);
