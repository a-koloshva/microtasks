import React from 'react';

type TopCarsType = {
  topCars: CarsType[];
};

type CarsType = {
  manufacturer: string;
  model: string;
};

export const TopCars = (props: TopCarsType) => {
  return (
    <ul>
      {props.topCars.map((topCar, i) => {
        return (
          <li key={i}>
            <span>{topCar.manufacturer} </span>
            <span>{topCar.model}</span>
          </li>
        );
      })}
    </ul>
  );
};
