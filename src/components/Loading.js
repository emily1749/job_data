import './Loading.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Loading = ({ message, loading }) => {
  return (
    <div>
      {loading ? (
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className='info'>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.jobData.message,
    loading: state.jobData.loading,
  };
};

Loading.propTypes = {
  message: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Loading);
