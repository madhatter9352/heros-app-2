import React from 'react';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {
  const initialForm = {
    search: '',
  };
  const [formValues, handleInputChange] = useForm(initialForm);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(formValues);
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
      </div>
    </div>
  );
};
