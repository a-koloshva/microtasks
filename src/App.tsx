import React, { useState } from 'react';
import './App.css';
import { TopCars } from './components/TopCars/TopCars';
import { Money } from './components/Money';

const topCars = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' },
];

type FilterType = 'all' | 'Dollars' | 'RUBLS';

function App() {
  // let [a, setA] = useState(1);
  // // let a = 1;

  // const onClickHandler = () => {
  //   setA(++a);
  //   console.log(a);
  // };

  // const onClickClear = () => {
  //   setA(0);
  // };

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]);

  // let currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');

  let currentMoney = money;

  const [filter, setFilter] = useState<FilterType>('all');

  if (filter === 'RUBLS') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
  }
  if (filter === 'Dollars') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    <div className="App">
      {/* <TopCars topCars={topCars} /> */}
      {/* <h1>{a}</h1>
      <button onClick={onClickHandler}>click</button>
      <button onClick={onClickClear}>clear</button> */}
      <Money currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler} />
    </div>
  );
}

export default App;
