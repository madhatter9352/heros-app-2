import { Route, Routes } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DCScreen } from '../components/DC/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Hero } from '../components/heros/Hero';

export const DashboardRoute = () => {
  return (
      <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DCScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="hero/:id" element={<Hero />} />
        </Routes>
      </div>
  );
};
