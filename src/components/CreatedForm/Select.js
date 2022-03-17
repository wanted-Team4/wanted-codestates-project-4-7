import React from 'react';
import styled from 'styled-components';

const Select = ({ description, label, required, option }) => {
  return (
    <SelectBox>
      <label>{label}</label>
      <p>{description}</p>
      <select>
        {option.map((el, i) => (
          <option key={i}>{option[i]}</option>
        ))}
      </select>
    </SelectBox>
  );
};

export default Select;

const SelectBox = styled.div`
  label {
    font-weight: 400;
    color: #000;
    font-size: 0.8rem;
  }
  select {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    box-sizing: border-box;
    font-size: 1rem;
    border-radius: 0.5rem;
    background: #eee;
    border: none;
  }
`;
