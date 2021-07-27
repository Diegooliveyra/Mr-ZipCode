const base_url  = 'https://viacep.com.br/ws'

export const GET_CEP = (cep) => {
  return {
    endpoint: `${base_url}/${cep}/json`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}