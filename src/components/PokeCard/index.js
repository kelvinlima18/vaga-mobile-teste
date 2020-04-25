import React, { useState, useEffect } from 'react';

import { Container, PokeNumber, PokeName, PokeAvatar, Pokedex } from './styles';
import PokeBadge from '../PokeBadge';

import api from '../../services/api';

export default function PokeCard({ id, name }) {
  const [pokemon, setPokemon] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get(`pokemon/${id}`);

      const type = response.data.results;
      console.log(type);
      setPokeTypes(type);
    }

    async function loadPokemon() {
    }

    loadPokemon();
  }, []);

  return (
    <Container>
      <Pokedex>
        <PokeNumber>{id > 9 ? `#0${id}` : `#00${id}`}</PokeNumber>
        <PokeName>{name}</PokeName>
        {pokeTypes.map(type => (
          <>
            <PokeBadge type={type.name} />
          </>
        ))}
        <PokeAvatar source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        }}/>
      </Pokedex>
    </Container>
  );
}
