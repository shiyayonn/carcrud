import React, { Component } from 'react';
import carList from './carlist';
import carCreate from './carcreate';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Car Create Form</div>
        
        <carList/>
        <carCreate/>
      </div>
    );
  }
}

export default Dashboard;