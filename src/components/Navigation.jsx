import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Main page</Link>
      </li>
      <li>
        <Link to="/search/">List of directors</Link>
      </li>
      <li>
        <Link to="/director/">Director</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
