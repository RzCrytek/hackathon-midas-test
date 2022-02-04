import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Header from '../pages/_includes/Header';

import HomePage from '../pages/HomePage';
import TestPage1 from '../pages/test/testPage1';
import TestPage2 from '../pages/test/testPage2';
import TestPage3 from '../pages/test/testPage3';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/test" element={<PrivateRoute />}>
          <Route index element={<TestPage1 />} />
          <Route path="demo2" element={<TestPage2 />} />
          <Route path="demo3" element={<TestPage3 />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
