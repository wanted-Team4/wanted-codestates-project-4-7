import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch, useCallback } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { submitForm } from '../actions/index';

const CreatedForm = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();

  //파일업로드
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

  //제출
  const HandleSubmit = (e) => {
    //모든 필수폼이 올바르게 입력되었는지 확인한다.
    /*
    console.log(name.address);
    switch (true) {
      case 'name.required':
        alert('이름을 입력하세요');
        break;
      case 'phone.required':
        alert('전화번호를 입력하세요');
        break;
      case 'address.required':
        alert('주소를 입력하세요');
        break;
      case 'select.required':
        alert('옵션을 선택하세요');
        break;
      case 'fileData.required':
        alert('주소를 입력하세요');
        break;
      default:
        alert('폼을 채워주세요!!');
    }
    */
    uploadFile(e);
    dispatch(submitForm(createdFormId, formData));
  };

  //유효성검사

  //폼데이터
  const location = useLocation();
  const path = location.pathname.split('/');
  const createdFormId = path[path.length - 1];

  const { forms } = useSelector((state) => state.surveyReducer);
  const [formData] = forms.filter((el) => el.formId === createdFormId);
  const { title, forList, formId } = formData;
  console.log('>', forms);
  // const [name] = forList.filter((el) => el.id === 'name');
  // const [phone] = forList.filter((el) => el.id === 'phone');
  // const [address] = forList.filter((el) => el.id === 'address');
  // const [select] = forList.filter((el) => el.id === 'input_0');
  // const option = select.options;
  // const [fileData] = forList.filter((el) => el.id === 'input_1');

  // console.log(name);
  return (
    <Container>
      hello
      <input />
      {/* <Title>{title}</Title>
      <Form>
        <Input>
          <label htmlFor="name">네임</label>
          <input type={name.type} placeholder={name.placeholder} id="name" />
        </Input>
        <Input>
          <label htmlFor="phone">{phone.label}</label>
          <input type={phone.type} placeholder={phone.placeholder} id="phone" />
        </Input>
        <Input>
          <label htmlFor="address">{address.label}</label>
          <input
            type={address.type}
            placeholder={address.placeholder}
            id="address"
          />
        </Input>
        <Select>
          <label htmlFor="option">옵션</label>
          <select>
            {option.map((el, i) => (
              <option key={i}>{select.options[i]} </option>
            ))}
          </select>
        </Select>
        <File className="file">
          <label htmlFor="file">
            <i className="fa-solid fa-plus"></i>
            <span>눌러서 파일 등록</span>
            <span>{fileName}</span>
          </label>
          <input type="file" id="file" onChange={saveFile} />
        </File>
        <Checkbox className="checkbox">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">개인정보 수집 약관 동의(필수)</label>
        </Checkbox>
        <Submit type="submit" onClick={() => HandleSubmit()}>
          제출하기
        </Submit>
      </Form> */}
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
    padding: 0.8rem;
    box-sizing: border-box;
    font-size: 1rem;
    border-radius: 0.5rem;
    background: #eee;
    border: none;
  }
`;

const File = styled.div`
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

const Checkbox = styled.div`
  margin-top: 1rem;
  input {
    width: auto;
  }
`;

const Submit = styled.button`
  width: 100%;
  font-size: 1rem;
  background: #ea6157;
  color: #fff;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
`;
