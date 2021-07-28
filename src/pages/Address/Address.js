import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GET_CEP } from '../../services/api';

import * as S from './styles';

const Address = () => {
  const { cep } = useParams();
  const history = useHistory();

  const { data, request } = useFetch();

  useEffect(() => {
    const { options, endpoint } = GET_CEP(cep);
    request(endpoint, options);
  }, [request, cep]);

  console.log(data);
  if (data === null) return <h1>CEP Não encontrado</h1>;
  if (data)
    return (
      <S.Wrapper>
        <S.Map>
          <img
            src="https://www.zyrgon.com/wp-content/uploads/2019/06/googlemaps-Zyrgon.jpg"
            alt=""
          />
        </S.Map>
        <S.InfoAddress>
          <S.FavoriteButton>
            <button>Favoritar</button>
            <button onClick={() => history.push('/')}>Voltar</button>
          </S.FavoriteButton>
          <div>
            <h2>CEP: {data.cep}</h2>
            <ul>
              <li>
                <span> Logradouro:</span> {data.logradouro}
              </li>
              <li>
                <span> Bairro:</span> {data.bairro}
              </li>
              <li>
                <span> Municipio: </span>
                {data.localidade}
              </li>
              <li>
                <span> Estado:</span> {data.uf}
              </li>
            </ul>
          </div>
        </S.InfoAddress>
      </S.Wrapper>
    );
  else return null;
};

export default Address;
