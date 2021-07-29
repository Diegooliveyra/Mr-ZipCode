import React from 'react';
import map from '../../assets/map.png';
import { ReactComponent as Rota } from '../../assets/directions.svg';
import { ReactComponent as Lixeira } from '../../assets/bin.svg';

import * as S from './styles';

const Card = ({ data }) => {
  return (
    <S.ContentCard>
      {data.map((address) => (
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
              <span> Município: </span> {address.cep}
            </p>
            <p>
              <span> Estado: </span> {address.cep}
            </p>
          </div>
          <footer>
            <button>
              <Rota />
              Rotas
            </button>
            <button>
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
