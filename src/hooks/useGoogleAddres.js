import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/xml?address=${address}&key=${process.env.API_KEY_GOOGLE_MAPS}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
