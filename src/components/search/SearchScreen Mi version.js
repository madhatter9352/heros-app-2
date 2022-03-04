import React, { useState } from 'react';
import { getHerosBySearch } from '../../selectors/getHerosBySearch';
import { HerosCard } from '../heros/HerosCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {
  const initialForm = {
    search: '',
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  
  const { search } = formValues;

  const [heros, setState] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryResult = getHerosBySearch(search);
    setState(queryResult);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-sm-6">
          <form onSubmit={handleSearch}>
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
            heros.map((hero) => (
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
