import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import Provider from './Provider/Provider.jsx';
import ProviderCar from './Provider/ProviderCars';

function App() {
  return (
    <div className="container">
      <ProviderCar>
        <Cars />
      </ProviderCar>
      <Provider>
        <TrafficSignal />
      </Provider>
    </div>
  );
}

export default App;
