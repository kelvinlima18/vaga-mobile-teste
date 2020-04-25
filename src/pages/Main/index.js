import React, { useState, useEffect } from 'react';

import { Container, Head, Title, Description, SearchInput, PokeList, PokeName } from './styles';
import PokeCard from '../../components/PokeCard';

import api from '../../services/api';

export default function Main() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get('pokemon/?limit=151');

      console.tron.log(response);

      setPokemons(response.data.results);
    }

    async function loadPokemon() {
      const response = await api.get()
    }

    loadPokemons();
  }, []);


  return (
    <Container>
      <Head>
        <Title>Pokedéx</Title>
        <Description>Encontre o seu Pokémon pelo nome 😊</Description>

        <SearchInput placeholder="Qual Pokémon você está procurando? 🤔" />

        <PokeList 
          data={pokemons}
          keyExtractor={item => String(item.name)}
          renderItem={({ index, item }) => (
            <>
              <PokeCard id={index + 1} name={item.name} />
            </>
          )}
        />
      </Head>
    </Container>
  );
}
