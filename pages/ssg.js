import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const StaticSide = (props) => {
  console.log('🚀 ~ StaticSide ~ props', props);
  const { pokemon } = props;

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

export const getStaticProps = async () => {
  const response = await axios.get(url);

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

  return {
    props: {
      pokemon: pokeData,
    },
  };
};

export default StaticSide;
