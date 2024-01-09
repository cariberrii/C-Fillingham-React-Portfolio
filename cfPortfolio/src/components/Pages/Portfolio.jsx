import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from '../Footer';

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Render Project links with Bootstrap cards here:
        <Link to="Project-1" role="button" className="btn btn-link">
        Project 1
      </Link>
      <Link to="Project-2" role="button" className="btn btn-link">
        Project 2
      </Link>
      <Link to="Project-3" role="button" className="btn btn-link">
        Project 3
      </Link>
      <Link to="Project-4" role="button" className="btn btn-link">
        Project 4
      </Link>
      <Link to="Portfolio" role="button" className="btn btn-link">
        Back to Portfolio
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
      </p>
    </div>
  );
}

export default Portfolio;
