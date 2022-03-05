import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HerosCard } from '../heros/HerosCard';
import { useForm } from '../hooks/useForm';

const queryString = require('query-string');

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);

  const initialForm = {
    search: q,
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { search } = formValues;
  const heroes = useMemo(() => getHerosByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-sm-6">
          <form onSubmit={(e) => handleSearch(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Search"
                name="search"
                value={formValues.search}
                onChange={handleInputChange}
              />

              <button 
              type="submit" 
              className="btn btn-primary mt-1"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          {
            (q === '') 
              ? <div className="alert alert-info">Please enter a name to search</div>
              : (heroes.length === 0) 
                  && <div className="alert alert-danger">No results found</div> 
          }
          {    
            heroes.map((hero) => (
              <HerosCard
                  key={hero.id} 
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...hero} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
