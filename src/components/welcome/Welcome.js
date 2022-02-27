import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../ui/NavBar';

export const Welcome = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
