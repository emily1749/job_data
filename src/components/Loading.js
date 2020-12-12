import './Loading.css';
import React from 'react';
import { connect } from 'react-redux';

const Loading = ({ message, loading }) => {
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

export default connect(mapStateToProps)(Loading);
