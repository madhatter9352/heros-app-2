import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { Welcome } from '../components/welcome/Welcome';
import { DashboardRoute } from './DashboardRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
              path="/" 
              element={(
                <PrivateRoute>
                  <Welcome />
                </PrivateRoute>
              )}
            >
                <Route path="*" element={<DashboardRoute />} />
            </Route>

            <Route 
              path="/login" 
              element={(
                <PublicRoute>
                  <LoginScreen />
                </PublicRoute>
              )} 
            />
        </Routes>
    </BrowserRouter>
  );
};
