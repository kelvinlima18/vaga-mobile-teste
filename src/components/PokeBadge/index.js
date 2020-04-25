import React, { useState, useEffect } from 'react';

import { Container, Badge } from './styles';

import Bug from '../../assets/Bug.svg';
import Dark from '../../assets/Dark.svg';
import Dragon from '../../assets/Dragon.svg';
import Electric from '../../assets/Electric.svg';
import Fairy from '../../assets/Fairy.svg';
import Fighting from '../../assets/Fighting.svg';
import Fire from '../../assets/Fire.svg';
import Flying from '../../assets/Flying.svg';
import Ghost from '../../assets/Ghost.svg';
import Grass from '../../assets/Grass.svg';
import Ground from '../../assets/Ground.svg';
import Ice from '../../assets/Ice.svg';
import Normal from '../../assets/Normal.svg';
import Poison from '../../assets/Poison.svg';
import Psychic from '../../assets/Psychic.svg';
import Rock from '../../assets/Rock.svg';
import Steel from '../../assets/Steel.svg';
import Water from '../../assets/Water.svg';

export default function PokeBadge({ type }) {
  const [pokeType, setPokeType] = useState([]);

  useEffect(() => {
    console.tron.log(type);
    switch(type) {
      case 'bug': {
        return setPokeType(Bug);
      }
      case 'dark': {
        return setPokeType(Dark);
      }
      case 'dragon': {
        return setPokeType(Dragon);
      }
      case 'electric': {
        return setPokeType(Electric);
      }
      case 'fairy': {
        return setPokeType(Fairy);
      }
      case 'fighting': {
        return setPokeType(Fighting);
      }
      case 'fire': {
        return setPokeType(Fire);
      }
      case 'flying': {
        return setPokeType(Flying);
      }
      case 'ghost': {
        return setPokeType(Ghost);
      }
      case 'grass': {
        return setPokeType(Grass);
      }
      case 'ground': {
        return setPokeType(Ground);
      }
      case 'ice': {
       return setPokeType(Ice);
      }
      case 'normal': {
       return setPokeType(Normal);
      }
      case 'poison': {
       return setPokeType(Poison);
      }
      case 'psychic': {
       return setPokeType(Psychic);
      }
      case 'rock': {
       return setPokeType(Rock);
      }
      case 'steel': {
       return setPokeType(Steel);
      }
      case 'water': {
       return setPokeType(Water);
      }
      default:
        return;
     }
  }, []);

  return (
    <Container>
      <Badge source={{ uri: pokeType }} />
    </Container>
  );
}
