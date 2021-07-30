import React, { useState } from 'react';
import map from '../../assets/map.png';
import { ReactComponent as Rota } from '../../assets/directions.svg';
import { ReactComponent as Lixeira } from '../../assets/bin.svg';

import * as S from './styles';

const Card = ({ data }) => {
  const [adresses, setAdresses] = useState(data);

  const deleteAddress = (cep) => {
    const newStorage = adresses.filter((address) => {
      return address.cep !== cep;
    });
    setAdresses(newStorage);
    window.localStorage.setItem('endereços', JSON.stringify(newStorage));
  };

  return (
    <S.ContentCard>
      {adresses.map((address) => (
        <li key={address.cep}>
          <img src={map} alt="" />
          <div>
            <p>
              <span> Cep:</span> {address.cep}
            </p>
            <p>
              <span> Logradouro: </span> {address.logradouro}
            </p>
            <p>
              <span> Bairro: </span> {address.bairro}
            </p>
            <p>
              <span> Município: </span> {address.localidade}
            </p>
            <p>
              <span> Estado: </span> {address.uf}
            </p>
          </div>
          <footer>
            <button>
              <Rota />
              Rotas
            </button>
            <button onClick={() => deleteAddress(address.cep)}>
              <Lixeira />
              Excluir
            </button>
          </footer>
        </li>
      ))}
    </S.ContentCard>
  );
};

export default Card;
