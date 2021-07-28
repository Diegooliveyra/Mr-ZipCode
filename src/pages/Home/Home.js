import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { ReactComponent as Illustration } from '../../assets/direction.svg';

import * as S from './styles';

const Home = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const regexCep = /^\d{5}-?\d{3}$/;

  function handleSearch(e) {
    e.preventDefault();
    const searchFormatted = search.replace('-', '');

    if (search.trim().length !== 0 && regexCep.test(search)) {
      history.push(`/address/${searchFormatted}`);
    } else {
      setSearch('');
      setError(true);
    }
  }
  return (
    <S.Wrapper>
      <Illustration />
      <h1>Olá! Bem vindo!</h1>
      <p>Digite um Cep válido</p>

      <form onSubmit={handleSearch}>
        <Input
          placeholder="00000-000"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        {error && <span>Digite um numero válido. Ex: 00000-000</span>}
        <Button disabled={!search}>Buscar Cep</Button>
      </form>
    </S.Wrapper>
  );
};

export default Home;
