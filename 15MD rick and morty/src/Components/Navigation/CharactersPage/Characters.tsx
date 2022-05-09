import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import characters, { Character, getCharacters } from '../../../data/characters';
import './Characters.scss';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleCharacters(characters);
  }, []);

  return (
    <section className="container">
      <h1>Characters</h1>
      <div className="chars">
        {visibleCharacters && visibleCharacters.map(({
          id, name, status, species, gender, image,
        }) => (
          <div className="card">
            <div className="cardInfo">
              <div>
                <img src={image} alt="avatar" className="avatar" />
              </div>
              <div className="specs">
                <span>
                  Name:
                  { name}
                </span>

                <span>
                  Status:
                  { status}
                </span>

                <span>
                  Species:
                  { species}
                </span>

                <span>
                  Gender:
                  { gender}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default CharactersPage;
