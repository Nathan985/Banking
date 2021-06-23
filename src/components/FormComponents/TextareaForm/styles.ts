import styled from 'styled-components';

export const Textarea = styled.textarea`
  display: flex;
  width: 100%;
  height: 165px;
  padding: 5px;
  border-radius: 5px;
  background: none;
  border: 1px solid var(--light);
  color: var(--light);
  margin: 15px 0;
  outline: 0;
  font-size: 1rem;
  resize: none;
  &::placeholder{
    color: var(--light);
  }
  font-family: 'Roboto';
`;
