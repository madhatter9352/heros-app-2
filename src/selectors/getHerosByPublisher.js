// eslint-disable-next-line import/extensions
import { heroes } from '../data/data.js';

export const getHeroesByPublisher = (publisher) => {
    const validPubliser = ['DC Comics', 'Marvel Comics'];

    if (!validPubliser.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
