import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GET_CEP } from '../../services/api';
import Favorite from '../../components/Favorite/Favorite';

import * as S from './styles';
import Loading from '../../components/Loading.js/Loading';

const Address = () => {
  const { cep } = useParams();
  const { data, request, loading } = useFetch();

  useEffect(() => {
    const { options, endpoint } = GET_CEP(cep);
    request(endpoint, options);
  }, [request, cep]);

  if (loading) return <Loading />;
  if (data.erro) return <h1>CEP Não encontrado</h1>;
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
          <Favorite data={data} />
          <div>
            <ul>
              <li>
                <span> CEP::</span> {data.cep}
              </li>
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
