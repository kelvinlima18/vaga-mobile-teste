import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Main from './pages/Main';
import Pokedex from './pages/Pokedex';

const Routes = createAnimatedSwitchNavigator(
  {
    Main: { screen: Main },
    Pokedex: { screen: Pokedex },
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out 
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={600} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(Routes);