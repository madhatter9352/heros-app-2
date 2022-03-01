import { getHeroesByPublisher } from '../../selectors/getHerosByPublisher';
import { HerosCard } from './HerosCard';

export const HerosList = ({ publisher }) => {
  const herosDc = getHeroesByPublisher(publisher); 
  return (
    <div className="row">
        {
            herosDc.map((hero) => (
                  <div className="col-sm-6">
                    <HerosCard hero={hero} />
                  </div>
            ))
        }
    </div>
  );
};
