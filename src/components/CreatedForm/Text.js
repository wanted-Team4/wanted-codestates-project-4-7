import React, { useState } from "react";
import styled from "styled-components";

const Text = ({ label, placeholder, required, type, description, setData }) => {
  const onChange = (e) => {
    setData((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  return (
    <InputBox>
      <label for="name">{label}</label>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <input
        type={type}
        id="name"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
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
