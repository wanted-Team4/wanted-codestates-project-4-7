import React from "react";
import styled from "styled-components";

const Phone = ({
  label,
  placeholder,
  required,
  type,
  setData,
  description,
}) => {
  const onChange = (e) => {
    setData((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };
  return (
    <InputBox>
      <label for="phone">{label}</label>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <input
        type={type}
        id="phone"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </InputBox>
  );
};

export default Phone;

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
