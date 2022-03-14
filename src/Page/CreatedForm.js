import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const CreatedForm = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    try {
      const res = await axios.post('http://localhost:3000/upload', formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  console.log(fileName);
  return (
    <Container>
      <Title>데이터블 폼 예시</Title>
      <Form>
        <Input>
          <label htmlFor='name'>이름</label>
          <input type='text' placeholder='' id='name' />
        </Input>
        <Input>
          <label htmlFor='phone'>휴대폰번호</label>
          <input type='number' placeholder='' id='phone' />
        </Input>
        <Input>
          <label htmlFor='address'>배송지</label>
          <input value='{/*배송지*/}' id='address' />
        </Input>
        <Select>
          <label htmlFor='option'>옵션</label>
          <select id='option'>
            {/*받아온데이터맵돌리기*/}
            <option value='{/*선택1*/}'>선택1</option>
            <option value='{/*선택1*/}'>선택1</option>
            <option value='{/*선택1*/}'>선택1</option>
            <option value='{/*선택1*/}'>선택1</option>
          </select>
        </Select>
        <File className='file'>
          <label htmlFor='file'>
            <i className='fa-solid fa-plus'></i>
            <span>눌러서 파일 등록</span>
            <div>
              <b>업로드파일</b>
            </div>
            <span>{fileName}</span>
          </label>
          <input type='file' id='file' onChange={saveFile} />
        </File>
        <Checkbox className='checkbox'>
          <input type='checkbox' id='checkbox' />
          <label htmlFor='checkbox'>개인정보 수집 약관 동의(필수)</label>
        </Checkbox>
        <Submit type='submit' onClick={uploadFile}>
          제출하기
        </Submit>
      </Form>
    </Container>
  );
};

export default CreatedForm;

const Input = styled.div``;
const Select = styled.div``;
const Container = styled.div`
  width: 60vw;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

const Form = styled.form`
  label {
    font-weight: 400;
    color: #000;
    font-size: 0.8rem;
  }
  input,
  select {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.6rem 0.8rem;
    box-sizing: border-box;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #999;
  }
`;

const File = styled.div`
  position: relative;
  height: 100px;

  label {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #999;
    background: #fff;
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

const Checkbox = styled.div`
  margin-top: 1rem;
  input {
    width: auto;
  }
`;

const Submit = styled.button`
  width: 100%;
  font-size: 1rem;
  background: #000;
  color: #fff;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: none;
  margin-top: 2rem;
`;
