import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import HomePage from '../pages/HomePage';
import Testing from '../pages/test/Testing';
import MyProjects from '../pages/test/MyProjects';
import Layout from '../pages/test/Layout';
import CreateProject from '../pages/test/create-project/CreateProject';
import ProjectView from '../pages/test/project/ProjectView';
import ProjectTerms from '../pages/test/project/ProjectTerms';
import ProjectTesting from '../pages/test/project/ProjectTesting';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* RUTAS CON AUTENTICACIÓN */}
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          {/* <Route index element={<TestPage1 />} /> */}
          <Route path="" element={<Navigate to="testing" />} />
          <Route path="testing" element={<Testing />} />
          <Route path="my-projects" element={<MyProjects />} />
        </Route>

        <Route
          path="app/create-project"
          element={
            <PrivateRoute>
              <CreateProject />
            </PrivateRoute>
          }
        />

        <Route
          path="app/project/name/view"
          element={
            <PrivateRoute>
              <ProjectView />
            </PrivateRoute>
          }
        />

        <Route
          path="app/project/name/terms"
          element={
            <PrivateRoute>
              <ProjectTerms />
            </PrivateRoute>
          }
        />

        <Route
          path="app/project/name/testing"
          element={
            <PrivateRoute>
              <ProjectTesting />
            </PrivateRoute>
          }
        />
        {/* FIN RUTAS CON AUTENTICACIÓN */}

        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
