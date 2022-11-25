import React from 'react';
import cl from './loader.module.css';

const Loader = (props) => {
  return (
    <div className={cl.loader}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
