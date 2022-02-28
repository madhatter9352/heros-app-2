// eslint-disable-next-line import/extensions
import { heroes } from '../data/data.js';

export const getHeroesByPublisher = (publisher) => {
    return heroes.filter((hero) => hero.publisher === publisher);
};
