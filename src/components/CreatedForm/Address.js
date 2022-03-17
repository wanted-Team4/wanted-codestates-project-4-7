import React, { useState } from 'react';
import styled from 'styled-components';

const Address = ({ label, required, onChange, description, _onClick }) => {
  return (
    <InputBox>
      <label for="phone">{label}</label>
      <span>{description}</span>
      <input onClick={_onClick} />
    </InputBox>
  );
};

export default Address;

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
