import React, { useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentAccount } = useAuthContext();
  const location = useLocation();

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return children;
    }

    if (currentAccount === null) {
      return <Navigate to="/home" state={{ from: location }} />;
    }

  }, [currentAccount]);

  return children;

  
};

export default PrivateRoute;
