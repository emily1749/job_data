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

export class Location extends React.Component {
  // onSort,
  // cityLocation,
  // stateLocation,
  // buttonColor,
  // setBubbleColor,
  // setMergeColor,
  // setQuickColor,
  // setCityLocation,
  // setStateLocation,
  // fetchJobData,
  // }) => {

  onCityInputChange = e => this.props.setCityLocation(e.target.value);

  onStateInputChange = e => this.props.setStateLocation(e.target.value);

  onLocationSubmit = e => {
    let self = this;
    console.log('hre');
    e.preventDefault();

    if (this.props.onSort === false) {
      let city = this.props.cityLocation;
      let state = this.props.stateLocation;

      if (city && state) {
        console.log('in here');
        city = city.replace(' ', '+');
        setMergeColor('');
        setBubbleColor('');
        setQuickColor('');

        const fetchData = async () => {
          await self.props.fetchJobData(city, state);
        };
        fetchData();
      }
    }
  };
  render() {
    let city;
    let state;
    let self = this;
    return (
      <div>
        <div>
          <h2>Location</h2>
        </div>

        <form className='submit-form' onSubmit={self.onLocationSubmit}>
          <div className='location-container'>
            <div>
              <label>City:</label>

              <input
                type='text'
                name='city'
                className='input-text input-text-city'
                value={this.props.city}
                onChange={this.onCityInputChange}
              />
            </div>

            <div>
              <label>State:</label>

              <input
                type='text'
                name='state'
                className='input-text input-text-state'
                value={this.props.state}
                onChange={this.onStateInputChange}
              />
            </div>

            <div>
              <div className='buttonHolder'>
                <button
                  className='btn'
                  style={{ color: this.props.buttonColor }}
                >
                  Submit Location
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

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
