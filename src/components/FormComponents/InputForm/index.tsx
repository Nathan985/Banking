import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  state: any;
  controllerState: (value: any) => void;
}

const InputForm = (data : InputProps) => {
  return (
    <Container 
      value={data.state}
      onChange={
        (event) => data.controllerState(event.target.value)
      }
      {...data}
    />
  );
}

export default InputForm;