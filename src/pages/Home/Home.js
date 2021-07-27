import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { ReactComponent as Illustration } from '../../assets/direction.svg';

import * as S from './styles';

const Home = () => {
  return (
    <S.Wrapper>
      <Illustration />
      <h1>Olá! Bem vindo!</h1>
      <p>Digite um Cep válido</p>
      <Input placeholder="00000-000" />
      <Button>Buscar Cep</Button>
    </S.Wrapper>
  );
};

export default Home;
