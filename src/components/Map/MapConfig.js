import React, { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';
import { GET_GEO_LOCATION } from '../../services/api';
import Map from './Map';

const MapConfig = ({ cep }) => {
  const { data, request } = useFetch();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  useEffect(() => {
    const { options, endpoint } = GET_GEO_LOCATION(cep);
    request(endpoint, options);
  }, [request, cep]);

  useEffect(() => {
    if (data.results) {
      data.results.map((item) => {
        setLat(item.geometry.location.lat);
        setLng(item.geometry.location.lng);
        return null;
      });
    }
  }, [data.results]);

  if (data.results)
    return (
      <Map
        isMarkerShown={false}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=KEY_API&v=3.exp"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px`, width: `450px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={lat}
        lng={lng}
        markerLat={lat}
        markerLng={lng}
      />
    );
  else return null;
};

export default MapConfig;
