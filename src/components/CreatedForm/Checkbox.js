import React from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  return (
    <InputBox>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">개인정보 수집 약관 동의(필수)</label>
    </InputBox>
  );
};

export default Checkbox;

const InputBox = styled.div`
  margin-top: 1rem;
  input {
    width: auto;
  }
`;
