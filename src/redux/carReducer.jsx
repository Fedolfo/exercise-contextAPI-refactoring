import React from 'react';
import MyContext from '../context/mycontext';

class CarReducer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      ...this.state.cars,
      [car]: side,
    })
  }

  render() {
    const context = {
      ...this.state.cars,
     moveCar: this.moveCar,
    }

    const { children } = this.props;

    return (
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
    );
  }
}

export default CarReducer;