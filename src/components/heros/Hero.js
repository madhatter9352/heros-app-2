import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHerosById } from '../../selectors/getHerosById';

export const Hero = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { id } = params;
  
  const hero = useMemo(() => getHerosById(id), [id]);

  if (!hero) {
    return <Navigate to="/error" />;
  }

  const { superhero, alter_ego, first_appearance } = hero;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="card mb-3 mt-4" style={{ maxWidth: '340px' }}>
      <img className="card-img-top" src={`/assets/${id}.jpg`} alt={superhero} />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        <p className="card-text"><small className="text-muted">{first_appearance}</small></p>

        <div>
          <button 
            className="btn btn-primary"
            onClick={handleBack}
          > 
            Back 
          </button>
        </div>
      </div>
    </div>
  );
};
