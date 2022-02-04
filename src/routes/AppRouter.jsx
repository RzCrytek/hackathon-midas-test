import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import HomePage from '../pages/HomePage';
import TestPage1 from '../pages/test/testPage1';
import TestPage2 from '../pages/test/testPage2';
import TestPage3 from '../pages/test/testPage3';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* RUTAS CON AUTENTICACIÓN */}
        <Route
          path="/test"
          element={
            <PrivateRoute>
              <TestPage1 />
            </PrivateRoute>
          }
        >
          <Route path="demo2" element={<TestPage2 />} />
          <Route path="demo3" element={<TestPage3 />} />
          {/* <Route index element={<TestPage1 />} /> */}
        </Route>
        {/* FIN RUTAS CON AUTENTICACIÓN */}

        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
