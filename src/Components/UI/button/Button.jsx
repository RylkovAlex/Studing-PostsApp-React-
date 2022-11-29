import React from 'react';
import classes from './button.module.css';

const Button = ({ children, innerRef, className, active, ...props }) => {
  const rootClasses = [className, classes.myBtn]
  if (active) {
    rootClasses.push(classes.myBtn__active)
  }
  return (
    <button
      {...props}
      ref={innerRef}
      className={rootClasses.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
