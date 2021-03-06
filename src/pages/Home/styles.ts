import styled from 'styled-components';

import { KeyboardArrowRight } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  align-items: center;
  @media(max-width: 1350px){
    justify-content: center;
  }
`;

interface ContainerListProps{
  visible: boolean;
}

export const ContainerList = styled.div<ContainerListProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  height: 100%;
  width: ${props => props.visible ? 113 : 464}px;
  padding: 15px;
  gap: 1rem;
  overflow-y: auto;
  max-height: 100%;
  transition: .5s;
  ::-webkit-scrollbar-button{
        display: none;
  }
  ::-webkit-scrollbar {
      background-color: rgba(255, 255, 255, 0.2);
      width: 6px;
      border-radius: 5px;
      padding-right: 13px;
  }
  ::-webkit-scrollbar-thumb{
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 5px;
  }
  @media(max-width: 1350px){
    position: fixed;
    flex-direction: ${props => props.visible ? 'row' : 'column'};
    
    width: 100%;
    max-width: 100%;
    height: ${props => props.visible ? '110px' : '70%'};
    top: 0;
    overflow-y: ${props => props.visible ? 'hidden' : 'auto'};
    ::-webkit-scrollbar {
      background-color: rgba(255, 255, 255, 0.2);
      width: 6px;
      height: 3px;
      border-radius: 5px;
      padding-right: 13px;
    }
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    padding: 15 10px;
  }
`;
export const ButtonVisibleList = styled.div<ContainerListProps>`
  display: flex;
  transition: 5ms;
  margin: auto 0;
  margin-left: 20px;
  background: var(--danger);
  padding: 5px;
  border-radius: 50%;
  transition: 3ms;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1;
  &:hover{
    filter: brightness(0.9);
  }
  margin-right: 10px;
  transition: .5s;
  @media(max-width: 1350px){
    position: fixed;
    top: ${props => props.visible ? '126px' : '72%'};
    width: 35px;
    height: 35px;
  }
`;

interface IconVisibleProps{
  stateMode: boolean;
}

export const IconVisible = styled(KeyboardArrowRight)<IconVisibleProps>`
  width: 40px;
  height: 40px;
  transition: transform .5s;
  transform: rotate(${props => props.stateMode ? 0 : -180}deg);
  @media(max-width: 1350px){
    transform: rotate(${props => props.stateMode ? 90 : -90}deg);
    overflow-x: ${props => props.stateMode ? 'auto' : 'hidden' };
    width: 25px;
    height: 25px;
  }
`;

export const ContainerFormController = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 65%;
  height: 70%;
  background: linear-gradient(to right, rgba(65, 65, 65, 0.9), rgba(65, 65, 65, 0.5) 52%);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  @media(max-width: 1350px){
    width: 95%;
    margin-top: 8rem;
    padding: 10px;
    height: auto
  }
`;

export const TitlePage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 2px solid var(--light);
  padding: 10px 0;
`;

export const SectionInputs = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex: 1;
  padding: 30px;
  justify-content: space-between;
  align-content: space-around;
  @media(max-width: 1350px){
    padding: 5px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;