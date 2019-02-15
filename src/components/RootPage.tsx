import * as React from 'react';
import { Link } from 'react-router-dom';

const RootPage = () => {
  return (
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/hooked_counter">HookedCounter</Link>
      </li>
    </ul>
  );
};

export default RootPage;
