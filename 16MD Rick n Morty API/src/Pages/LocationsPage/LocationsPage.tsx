import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { CharacterLocation } from '../../Models/CharacterModel';

const LocationsPage = () => {
  const [locations, setLocations] = useState<CharacterLocation[]>();
  const navigate = useNavigate();

  const getLocation = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/location');
      setLocations(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('');
    }
  };

  useEffect(() => {
    getLocation().then();
  }, []);

  return (
    <div className="container">
      <h1>Series Locations</h1>
      {locations && locations.map((location) => (
        <div key={Math.random()}>
          <h4>{location.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationsPage;
