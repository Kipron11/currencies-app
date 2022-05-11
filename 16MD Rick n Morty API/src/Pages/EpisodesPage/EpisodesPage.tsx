import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Episodes } from '../../Models/CharacterModel';
import './EpisodesPage.scss';

const EpisodesPage = () => {
  const [episode, setEpisode] = useState<Episodes[]>();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const getEpisode = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/episode');
      setEpisode(response.data.results);
    } catch (error) {
      navigate('/');
    } finally {
      console.log('');
    }
  };

  useEffect(() => {
    getEpisode().then();
  }, []);

  return (
    <div className="SectionEpisodes">
      <div className="Episode-search__box">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="Episode-search__input"
          placeholder="Search episode..."
          type="text"
        />
        <button onClick={() => setEpisode(
          episode?.filter((episodes) => (episodes.name.toLocaleLowerCase().includes(
            inputValue.toLowerCase(),
          ) && episode)),
        )}
        >
          Search
        </button>
      </div>
      {episode && episode.map((epi) => (
        <div key={Math.random()} className="BlockEpisodes">
          <div className="CardEpisodes">
            <div>
              <img className="avatar" src="https://images.immediate.co.uk/production/volatile/sites/3/2020/05/Rick-9b0a9d9.jpg?quality=90&resize=980,654" alt="avatar" />
            </div>
            <div className="CardEpisodes--BlockInfo">
              <p>{epi.name}</p>
              <p>{epi.episode}</p>
              <p>{epi.air_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EpisodesPage;
