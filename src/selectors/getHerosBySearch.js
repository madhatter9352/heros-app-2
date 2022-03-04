import { heroes } from '../data/data';

export const getHerosBySearch = (search) => {
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(search.toLowerCase()));
};
