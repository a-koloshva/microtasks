import React from 'react';

type MoneyStringType = {
  banknots: string;
  value: number;
  number: string;
};

export const Money = (props: any) => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.currentMoney.map((moneyString: MoneyStringType, index: number) => {
          console.log(moneyString);
          return (
            <li key={index}>
              <span>{moneyString.banknots} </span>
              <span>{moneyString.value}</span>
              <span>{moneyString.number}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => props.onClickFilterHandler('all')}>All</button>
      <button onClick={() => props.onClickFilterHandler('RUBLS')}>Rubls</button>
      <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
    </div>
  );
};
