import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

import { ReactComponent as BackButton } from '../../assets/back.svg';
import { ReactComponent as FavoriteButton } from '../../assets/favorite.svg';

import * as S from './styles';

const Favorite = ({ data }) => {
  const [address, setAdress] = useLocalStorage('endereços', []);
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  function setFavoriteAddress() {
    if (address.length) {
      address.map(function (endereço) {
        if (data.cep === endereço.cep) {
          alert(
            'O endereço ja foi salvo anteriormente, veja em Meus Favoritos',
          );
          setDisabled(true);
        }
        return null;
      });
    } else {
      setAdress([
        ...address,
        {
          cep: data.cep,
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
        },
      ]);
    }

    setDisabled(true);
  }
  return (
    <S.FavoriteButton disabled={disabled}>
      <button disabled={disabled} onClick={setFavoriteAddress}>
        <FavoriteButton />
        Favoritar
      </button>
      <button onClick={() => history.push('/')}>
        <BackButton /> Voltar
      </button>
    </S.FavoriteButton>
  );
};

export default Favorite;
