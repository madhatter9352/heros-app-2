import { getHeroesByPublisher } from '../../selectors/getHerosByPublisher';
import { HerosCard } from './HerosCard';
import './heroCard.scss';

export const HerosList = ({ publisher }) => {
  const herosDc = getHeroesByPublisher(publisher); 
  return (
    <>
        {
            herosDc.map((hero) => (
                <div className="row">
                    <HerosCard hero={hero} />
                </div>
            ))
        }
    </>
  );
};
