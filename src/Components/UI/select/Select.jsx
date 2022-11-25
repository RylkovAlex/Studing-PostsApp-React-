import React from 'react';

const Select = ({ options, value, defaultValue, onChange, ...pops }) => {
  return (
    <select onChange={onChange} value={value || 'default'}>
      <option disabled value="default">
        {defaultValue}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
