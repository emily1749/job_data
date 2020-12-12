import React from 'react';
import { connect } from 'react-redux';

import {
  setBubbleColor,
  setQuickColor,
  setMergeColor,
  setCityLocation,
  setStateLocation,
  fetchJobData,
} from '../actions';

const Location = ({
  onSort,
  cityLocation,
  stateLocation,
  buttonColor,
  setBubbleColor,
  setMergeColor,
  setQuickColor,
  setCityLocation,
  setStateLocation,
  fetchJobData,
}) => {
  let city;
  let state;

  const onCityInputChange = e => setCityLocation(e.target.value);

  const onStateInputChange = e => setStateLocation(e.target.value);

  const onLocationSubmit = e => {
    e.preventDefault();

    if (onSort === false) {
      let city = cityLocation;
      let state = stateLocation;

      if (city && state) {
        console.log('in here');
        city = city.replace(' ', '+');
        setMergeColor('');
        setBubbleColor('');
        setQuickColor('');

        const fetchData = async () => {
          await fetchJobData(city, state);
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
              <button className='btn' style={{ color: buttonColor }}>
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
    cityLocation: state.cityLocation,
    stateLocation: state.stateLocation,
    buttonColor: state.buttonColor,
  };
};

const mapDispatchToProps = {
  setBubbleColor,
  setMergeColor,
  setQuickColor,
  setCityLocation,
  setStateLocation,
  fetchJobData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
