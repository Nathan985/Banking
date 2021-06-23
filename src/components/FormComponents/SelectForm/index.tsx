import React from 'react';

import { ContainerSelect, OptionSelected } from './styles';

interface SelectProps {
  state: string;
  controllerState: (value: string) => void;
  options: Array<string>;
}

const SelectForm = (data : SelectProps) => {
  return (
    <ContainerSelect
      value={data.state}
      onChange={(event) => {
        data.controllerState(event.target.value);
      }}
    >
      {
        data.options.map((option, key) => (
          <OptionSelected
            key={key}
            value={option}
          >
            {option}
          </OptionSelected>
        ))
      }
    </ContainerSelect>
  );
}

export default SelectForm;