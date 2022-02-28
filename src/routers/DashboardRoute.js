import { Route, Routes } from 'react-router-dom';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { DCScreen } from '../DC/DcScreen';
import { SearchScreen } from '../search/SearchScreen';
import { Hero } from '../heros/Hero';

export const DashboardRoute = () => {
  return (
      <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DCScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="hero" element={<Hero />} />
        </Routes>
      </div>
  );
};
