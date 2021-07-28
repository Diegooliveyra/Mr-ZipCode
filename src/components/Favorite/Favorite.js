import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import * as S from './styles';

const Favorite = ({ data }) => {
  const [address, setAdress] = useLocalStorage('endereços', []);

  console.log(address);
  function setFavoriteAddress() {
    setAdress([
      ...address,
      {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.municipio,
        uf: data.uf,
      },
    ]);
  }
  return (
    <S.FavoriteButton>
      <button onClick={setFavoriteAddress}>Favoritar</button>
      <button>Voltar</button>
    </S.FavoriteButton>
  );
};

export default Favorite;
