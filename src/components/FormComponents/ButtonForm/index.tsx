import React from 'react';

import { Button } from './styles';

interface ButtonFormProps{
  title?: string;
  onClick?: () => void;
  color: 'fill' | 'outline';
}

const ButtonForm = ({onClick, title, color} : ButtonFormProps) => {
  return(
    <Button
      onClick={onClick}
      colorButton={color}
    >
      {title}
    </Button>
  );
}

export default ButtonForm;