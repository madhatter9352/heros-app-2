import { Link } from 'react-router-dom';

export const HerosCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`/assets/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">Alter Ego: {alter_ego}</p>
                        <p className="card-text">Characters: {characters}</p>
                        <p className="card-text"><small className="text-muted">{first_appearance}</small></p>

                        <div>
                            <Link to={`/hero/${id}`} className="btn btn-primary"> More Info </Link> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};
