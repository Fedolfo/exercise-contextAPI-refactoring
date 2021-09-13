
import React, { Component } from 'react';
import CarsContext from './mycontext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends Component {
  static contextType = CarsContext;
  render() {
    const { redCar, blueCar, yellowCar } = this.context.cars;
    const { moveCar } = this.context;
    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('redCar', !redCar)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blueCar', !blueCar)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellowCar', !yellowCar)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    )
  }
};

export default Cars;