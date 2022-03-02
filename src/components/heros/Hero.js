import { useParams } from 'react-router-dom';
import { getHerosById } from '../../selectors/getHerosById';

export const Hero = () => {
  const params = useParams();
  const { id } = params;
  const { superhero, alter_ego, first_appearance } = getHerosById(id);

  return (
    <div className="card bg-dark text-white">
      <img src={`/assets/${id}.jpg`} className="card-img" alt="{superhero}" />
      <div className="card-img-overlay">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        <p className="card-text">{first_appearance}</p>
      </div>
    </div>
  );
};
