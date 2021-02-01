import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const ClientSide = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fecthPokimon = async () => {
      const response = await axios.get(url);
      //console.log(response);

      const promises = response.data.results.map((result) => {
        return axios.get(result.url);
      });

      const responses = await Promise.all(promises);

      const pokeData = responses.map((r) => {
        return {
          name: r.data.name,
          imgUrl: r.data.sprites.front_default,
        };
      });

      setPokemon(pokeData);
      console.log('🚀 ~ pokeData ~ pokeData', pokeData);
    };

    fecthPokimon();
  }, []);

  return (
    <div>
      {pokemon.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.imgUrl} />
            <p>{item.name}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ClientSide;
