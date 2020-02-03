import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCars,deleteCar } from '../../actions/cars';
import { Link } from 'react-router-dom'; // added
import { carForm } from './carform';
class carList extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.cars.map(car => (
          <div className='item' key={car.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{car.car_color}</a>
              <div className='description'>{car.car_number}</div>
              <Link to={`/edit/${car.id}`} className='header'>
              {car.car_number}
              </Link>
            </div>

          <div className='right floated content'> // added
              <Link
                to={`/delete/${car.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{car.car_color}</a>
              <div className='description'>{car.car_number}</div>
            </div>
          </div>
        ))}

      </div>

    );    
  }
}

const mapStateToProps = state => ({
  cars: Object.values(state.cars)
});

export default connect(
  mapStateToProps,
  { getCars,deleteCar }
)(carList);