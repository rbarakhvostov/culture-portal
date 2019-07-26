import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/director/#">timeline</Link>
      </li>
      <li>
        <Link to="/director/#">masterpieces</Link>
      </li>
      <li>
        <Link to="/director/#">gallery</Link>
      </li>
      <li>
        <Link to="/director/#">videos</Link>
      </li>
      <li>
        <Link to="/director/#">locations</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
