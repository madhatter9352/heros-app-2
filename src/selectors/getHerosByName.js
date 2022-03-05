import { heroes } from '../data/data';

// eslint-disable-next-line no-unused-vars
export const getHerosByName = (name = '') => {
    console.log('getHerosByName');
    if (name === '') {
        return [];
    }

    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};
