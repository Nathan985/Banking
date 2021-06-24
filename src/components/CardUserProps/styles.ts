import styled, {css} from 'styled-components';

interface ContainerProps{
  activeContainer: boolean;
  visibleSmall: boolean;
}

interface SmallContainer{
  visible: boolean;
}

const SmallAvatar = css`
  width: 78px !important;
  height: 78px !important;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 102px;
  transition: .5s;
  border-radius: 6px;
  background: linear-gradient(to right, rgba(65, 65, 65, 0.9) 22%, rgba(24, 24, 24, 0.7));
  -webkit-backdrop-filter: blur(20px); /* Safari 9+ */
  backdrop-filter: blur(20px); /* Chrome and Opera */
  padding: 5px;
  cursor: pointer;
  &:hover{
    filter: brightness(0.9);
  }
  position: relative;
  ${props => !props.visibleSmall && SmallAvatar}
  white-space: nowrap;
`;
export const SectionInfoProps = styled.div`
  display: flex;
  width: 80%;
`;
export const Avatar = styled.img`
  height: 100%;
  border-radius: 5px;
  transition: 5ms;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
export const InfoProps = styled.div<SmallContainer>`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  margin-left: 10px;
  height: 100%;
  justify-content: space-around;
`;
export const NameProfile = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
export const BankingName = styled.div`
  color: #B906FF;
  font-weight: bold;
`;
export const BankingDetails = styled.div<SmallContainer>`
  display: ${props => !props.visible ? 'flex' : 'none'};
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  gap: 0.3rem;
`;
export const AmounValue = styled.div`
  color: var(--danger);
  font-weight: bold;
  font-size: 1.2rem;
`;
export const Date = styled.div`
  position: absolute;
  font-size: .8rem;
  bottom: 10px;
  right: 10px;
`;