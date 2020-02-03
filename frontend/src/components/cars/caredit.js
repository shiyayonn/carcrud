import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCar, editCar } from '../../actions/cars';
import carForm from './carForm';
class carEdit extends Component {
  componentDidMount() {
    this.props.getCar(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editCar(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '2rem' }}>Edit Car</h2>
        < carForm
          initialValues={_.pick(this.props.car, 'car_number')}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  car: state.cars[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getCar, editCar }
)(carEdit);