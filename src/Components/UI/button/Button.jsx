import React from 'react';
import classes from './button.module.css';

const Button = ({ children, innerRef, className, ...props }) => {
  return (
    <button
      {...props}
      ref={innerRef}
      className={`${className} ${classes.myBtn}`}
    >
      {children}
    </button>
  );
};

export default Button;
