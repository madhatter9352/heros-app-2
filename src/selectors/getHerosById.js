// eslint-disable-next-line import/extensions
import { heroes } from '../data/data.js';

export const getHerosById = (id) => {
    console.log('Getheros by id launched');
    return heroes.find((hero) => hero.id === id);
};
