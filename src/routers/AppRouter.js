import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { Welcome } from '../components/welcome/Welcome';
import { DashboardRoute } from './DashboardRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />}>
                <Route path="*" element={<DashboardRoute />} />
            </Route>
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    </BrowserRouter>
  );
};
