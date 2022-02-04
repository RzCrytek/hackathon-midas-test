import React from 'react';
import { Navigate, Outlet, Route, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import TestPage2 from '../pages/test/testPage2';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
