import React from 'react';

export const SearchScreen = () => {
  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-sm-6">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Search"
                name="search"
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
