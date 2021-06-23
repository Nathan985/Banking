import React,  {useState} from 'react';
import CardUserProps from '../../components/CardUserProps';
import ButtonForm from '../../components/FormComponents/ButtonForm';
import InputForm from '../../components/FormComponents/InputForm';
import SelectForm from '../../components/FormComponents/SelectForm';
import TextareaForm from '../../components/FormComponents/TextareaForm';
import { 
  Container, 
  ContainerList, 
  ButtonVisibleList, 
  IconVisible, 
  ContainerFormController,
  TitlePage,
  SectionInputs,
  ContainerButtons
} from './styles';

const Home: React.FC = () => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Selecione");
  const [nameProfile, setNameProfile] = useState<string>("");

  return (
    <Container>
      <ContainerList
        visible={visibleSidebar}
      >
        <CardUserProps 
          key={1}
          name='Nathan R.'
          avatar='https://avatars.githubusercontent.com/u/56900147?v=4'
          amount={52.32}
          banking='Nubank'
          date='16/04/21'
          smallCard={visibleSidebar}
        />
        
      </ContainerList>

      <ButtonVisibleList 
        onClick={() => setVisibleSidebar(old => !old)}
        visible={visibleSidebar}
      >
        <IconVisible 
          stateMode={visibleSidebar}
        />
      </ButtonVisibleList>

      <ContainerFormController>
        <TitlePage>Gerenciamento de Dividas</TitlePage>
        <SectionInputs>
          <SelectForm 
            state={selected}
            controllerState={setSelected}
            options={["Selecione", "Teste"]}
          />
          <InputForm 
            state={nameProfile}
            controllerState={setNameProfile}
            placeholder='Nome'
          />
          <InputForm 
            state={nameProfile}
            controllerState={setNameProfile}
            placeholder='Nome'
          />
          <TextareaForm 
            state={nameProfile}
            controllerState={setNameProfile}
            placeholder='Textarea'
          />
        </SectionInputs>
        <ContainerButtons>
          <ButtonForm 
            color='fill'
            title='Enviar'
          />
          <ButtonForm 
            color='outline'
            title='Cancelar'
          />
        </ContainerButtons>
      </ContainerFormController>

    </Container>
  );
}

export default Home;