import React, { useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const File = ({ label, placeholder, required, type, onChange }) => {
  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState('');

  // const saveFile = (e) => {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // };

  // //TODO! 컴포넌트 나누면서 업로드 파일이 분리됨.
  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('fileName', fileName);
  //   try {
  //     const res = await axios.post('http://localhost:3000/upload', formData);
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  return (
    <InputBox>
      <label for="phone">
        <i className="fa-solid fa-plus"></i>
        <span>눌러서 파일 등록</span>
        <span>{label}</span>
      </label>
      <input type="file" id="file" onChange={onChange} />
    </InputBox>
  );
};

export default File;

const InputBox = styled.div`
  position: relative;
  height: 100px;
  label {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    background: #eee;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .fa-plus {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
