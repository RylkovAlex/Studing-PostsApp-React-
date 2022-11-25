import React from 'react';
import classes from './input.module.css';
const Input = ({ innerRef, ...props }) => {
  return <input {...props} ref={innerRef} className={classes.myInput} />;
};

export default Input;
