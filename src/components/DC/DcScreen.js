import React from 'react';
import { HerosList } from '../heros/HerosList';

export const DCScreen = () => {
  return (
    <div>
      <h1>DCScreen</h1>
      <hr />
      <HerosList publisher="DC Comics" />
    </div>
  );
};
