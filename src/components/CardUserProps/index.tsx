import React from 'react';
import { IUserPropsCardProps } from '../../libs/IUserCardProps';

import { 
  Container,
  SectionInfoProps,
  Avatar,
  InfoProps,
  NameProfile,
  BankingName,
  BankingDetails,
  AmounValue,
  Date
} from './styles';

const CardUserProps = (data : IUserPropsCardProps) => {
  return (
    <Container
      activeContainer={data.indicator || false}
      visibleSmall={!data.smallCard}
    >

      <SectionInfoProps>

        <Avatar 
          src={data.avatar} 
          alt="Avatar"
        />

        <InfoProps 
          visible={!data.smallCard} 
        >
          <NameProfile>{data.name}</NameProfile>
          <BankingName>{data.banking}</BankingName>
        </InfoProps>

      </SectionInfoProps>

      <BankingDetails
        visible={data.smallCard} 
      >
        <AmounValue>R$ {data.amount}</AmounValue>
        <Date>{data.date}</Date>
      </BankingDetails>

    </Container>
  );
}

export default CardUserProps;