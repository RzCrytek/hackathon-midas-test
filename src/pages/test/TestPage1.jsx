import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TestPage1 = () => {
  return (
    <>
      <div>Test Page 1</div>
      <Link to="demo2">demo 2</Link>
      {/* <Outlet /> */}
    </>
  );
};

export default TestPage1;
