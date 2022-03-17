import React from 'react';
import styled from 'styled-components';

const Text = ({
  label,
  placeholder,
  required,
  type,
  onChange,
  description,
}) => {
  return (
    <InputBox>
      <label for="name">{label}</label>
      <p>{description}</p>
      <input
        type={type}
        id="name"
        placeholder={placeholder}
        onChange={(e) => onChange()}
      />
    </InputBox>
  );
};

export default Text;

const InputBox = styled.div`
  label {
    font-weight: 400;
    color: #000;
    font-size: 0.8rem;
  }
  input {
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
