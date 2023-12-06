import React from 'react';
import './App.css';
import { TopCars } from './components/TopCars/TopCars';

const topCars = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' },
];

function App() {
  return (
    <div className="App">
      <TopCars topCars={topCars} />
    </div>
  );
}

export default App;
