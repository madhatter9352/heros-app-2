import { getHeroesByPublisher } from '../../selectors/getHerosByPublisher';
import { HerosCard } from './HerosCard';

export const HerosList = ({ publisher }) => {
  const herosDc = getHeroesByPublisher(publisher);

  return (
    <div className="row">
        {
            herosDc.map((hero) => {
                return (
                    <div className="col-sm-6">
                        <HerosCard
                            key={hero.id} 
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...hero} 
                        />
                    </div>
                );
            })
        }
    </div>
  );
};
