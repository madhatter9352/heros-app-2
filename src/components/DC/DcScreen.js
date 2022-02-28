import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHerosByPublisher';

export const DCScreen = () => {
  const herosDc = getHeroesByPublisher('DC Comics');
  console.log(herosDc);
  return (
    <div>DCScrenn</div>
  );
};
