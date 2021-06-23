import styled, {css} from 'styled-components';

interface ButtonProps{
  colorButton: 'fill' | 'outline';
}

const HoverButton = css<ButtonProps>`
  transition: .3s;
  &:hover{
    ${
      props => props.colorButton === 'fill' ? 
      'filter: brightness(0.9)' : 
      'background: rgba(57, 152, 211, 0.3)'};
  }
  ;
`;

export const Button = styled.div<ButtonProps>`
  display: flex;
  text-align: center;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 250px;
  color: var(--light);
  background: ${props => props.colorButton === 'fill' ? 'var(--blue)' : 'transparent'};
  ${props => props.colorButton === 'outline' && 'border: 1px solid var(--blue)'};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  ${HoverButton}
`;
