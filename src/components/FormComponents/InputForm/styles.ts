import styled from 'styled-components';

export const Container = styled.input`
  display: flex;
  width: 48%;
  height: 55px;
  padding: 5px;
  border-radius: 5px;
  background: none;
  border: 1px solid var(--light);
  color: var(--light);
  margin: 15px 0;
  outline: 0;
  font-size: 1rem;
  &::placeholder{
    color: var(--light);
  }
`;
