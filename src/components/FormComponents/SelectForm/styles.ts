import styled from 'styled-components';

export const ContainerSelect = styled.select`
  display: flex;
  width: 100%;
  height: 55px;
  padding: 5px;
  border-radius: 5px;
  background: none;
  border: 1px solid var(--light);
  color: var(--light);
  margin: 15px 0;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const OptionSelected = styled.option`
  background: var(--primary);
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 1rem;
`;