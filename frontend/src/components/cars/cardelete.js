import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layouts/modal';
import history from '../../history';
import { getCar, deleteCar } from '../../actions/cars';

class carDelete extends Component {
  componentDidMount() {
    this.props.getTodo(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.car) {
      return 'Are you sure you want to delete this car?';
    }
    return `Are you sure you want to delete the car: ${this.props.car.car_number}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteCar(id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title='Delete car'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  car: state.cars[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getCar, deleteCar }
)(carDelete);