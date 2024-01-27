import React, { ButtonHTMLAttributes } from 'react';
import s from './Button.module.css';

type ButtonProps = {
  callback: () => void;
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  color,
  disabled,
  callback,
  children,
  ...restProps
}: ButtonProps) => {
  const onClickHandler = () => {
    callback();
  };

  // const finalClassName = s.button + ' ' + s.red;
  // const finalClassName = `${s.button} ${s.default}`;

  // const finalClassName = `
  // ${s.button}
  // ${color === 'red' ? s.red : s.default}
  // ${disabled ? s.disabled : ''}
  // `;

  const finalClassName = `
  ${s.button} 
  ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
  ${disabled ? s.disabled : ''}
  `;

  return (
    <button onClick={onClickHandler} className={finalClassName}>
      {children}
    </button>
  );
};

//...........................................................................

// import React from 'react';

// type ButtonProps = {
//   callback: () => void;
//   name: string;
//   xxx?: string;
// };

// export const Button: React.FC<ButtonProps> = (props) => {
//   const { callback, name, ...restProps } = props;

//   const onClickHandler = () => {
//     callback();
//   };

//   return <button onClick={onClickHandler}>{name}</button>;
// };
