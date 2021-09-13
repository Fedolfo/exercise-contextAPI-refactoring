import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarReducer from './redux/carReducer';
// import trafficReducer from './redux/trafficReducer';

ReactDOM.render(
  <CarReducer>
    {/* <trafficReducer> */}
      <App />
    {/* </trafficReducer> */}
  </CarReducer>,
  document.getElementById('root'),
);
