import React, { useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import { GET_GEO_LOCATION } from '../../services/api';
import Map from './Map';

const MapConfig = ({ cep }) => {
  const { data, request } = useFetch();
  useEffect(() => {
    const { options, endpoint } = GET_GEO_LOCATION(cep);
    request(endpoint, options);
  }, [request, cep]);
  console.log(data.results);
  // console.log(data.results[0].geometry.location.lng);

  if (data)
    return (
      <Map
        isMarkerShown={false}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=KEY&v=3.exp"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px`, width: `450px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={-34.397}
        lng={150.644}
        markerLat={-34.397}
        markerLng={50.644}
      />
    );
};

export default MapConfig;
