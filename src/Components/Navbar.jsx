import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context';
import Button from './UI/button/Button';

const Navbar = () => {
  const location = useLocation();
  const { setIsAuth } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">
          <Button active={location.pathname === '/about'}>About</Button>
        </Link>
        <Link to="/posts">
          <Button active={location.pathname === '/posts'}>View Posts</Button>
        </Link>
        <Button onClick={() => setIsAuth(false)}>Выйти</Button>
      </div>
    </div>
  );
};

export default Navbar;
