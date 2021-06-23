import React, { TextareaHTMLAttributes } from 'react';

import { Textarea } from './styles';

interface TextareaFormProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  state: string;
  controllerState: (value: string) => void;
}

const TextareaForm = (data: TextareaFormProps) => {
  return (
    <Textarea
      value={data.state}
      onChange={(event) => data.controllerState(event.target.value)}
      {...data}
    />
  );
}

export default TextareaForm;