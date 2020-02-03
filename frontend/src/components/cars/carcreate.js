import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addcar } from '../../actions/cars';
import carForm from './carForm';

class carcreate extends Component {
  onSubmit = formValues => {
    this.props.addcar(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <carForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addcar }
)(carcreate);