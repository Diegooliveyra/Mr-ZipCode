const base_url = 'https://viacep.com.br/ws';

export const GET_CEP = (cep) => {
  return {
    endpoint: `${base_url}/${cep}/json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const GET_GEO_LOCATION = (cep) => {
  return {
    endpoint: `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=API_KEY`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};
