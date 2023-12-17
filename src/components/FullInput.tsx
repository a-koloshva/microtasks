import React, { ChangeEvent, useState } from 'react';

type FullInputPropsType = {
  addMessage: (title: string) => void;
};

export const FullInput = (props: FullInputPropsType) => {
  let [title, setTitle] = useState('');

  const onChandgeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onClickButtonHandler = () => {
    props.addMessage(title);
    setTitle('');
  };

  return (
    <div>
      <input value={title} onChange={onChandgeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};
