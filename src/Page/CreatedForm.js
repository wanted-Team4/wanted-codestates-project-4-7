// TODO!! 생성폼 남은부분 OldForm에 이전 파일이 있습니다!
// 1. 필드 조건문으로 현재폼에서 id값이 일치할때 각 필드 컴포넌트 불러오도록 처리
// 2. 필드-required 연결해서 필수사항 처리
// 3. 정규표현식 처리 (각 폼필드에서 할생각)
// 4. 파일등록 컴포넌트 연결
// 5. 주소지 컴포넌트 연결
// 6. 제출버튼 누르면 디스패치가 데이터 등록
// 7. 예제폼 클릭시 에러해결

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { submitForm } from '../actions/index';
import axios from 'axios';

import Postcode from '../components/Postcode';
import Text from '../components/CreatedForm/Text';
import Phone from '../components/CreatedForm/Phone';
import Address from '../components/CreatedForm/Address';
import File from '../components/CreatedForm/File';
import Select from '../components/CreatedForm/Select';

const CreatedForm = () => {
  const dispatch = useDispatch();

  //* 현재폼의 전체 데이터 가져오는 로직
  const location = useLocation();
  const path = location.pathname.split('/');
  const currentFormId = path[path.length - 1];
  const { forms } = useSelector((state) => state.surveyReducer);
  const [currentForms] = forms.filter((el) => el.formId == currentFormId);
  const { formList, submitData, title } = currentForms;

  //* 현재폼의 필드별 데이터 가져오는 로직
  const [text] = formList.filter((el) => el.id === 'name');
  const [phone] = formList.filter((el) => el.id === 'phone');
  const [address] = formList.filter((el) => el.id === 'address');
  const [select] = formList.filter((el) => el.id === 'input_0');
  const [img] = formList.filter((el) => el.id === 'input_1');
  const [agreement] = formList.filter((el) => el.id === 'agreement_0');

  //* 주소 클릭시 postCode열림 상태관리
  //TODO! post가 모달형태로 열린다고 생각하고 일단 상태만 추가
  const [postOpen, setPostOpen] = useState(false);
  const [data, setData] = useState({
    name: '',
    phone: '',
    address: '',
    input_0: '',
    input_1: '',
    agreement_0: 0,
  });

  console.log(data);
  const [daumAddress, setAddress] = useState();
  const openModal = () => {
    setPostOpen(true);
  };
  //* 파일 저장 및 업로드 로직
  //TODO! 혹시 분리가능하면, 컴포넌트 > CreatedForm > File로 분리
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
  console.log(forms);
  //* 폼제출버튼 로직
  const HandleSubmit = (e) => {
    // 모든 필수폼이 올바르게 입력되었는지 확인한다.
    e.preventDefault();

    try {
      //uploadFile(e);
      dispatch(submitForm(currentFormId, data));
    } catch {
      alert('제출실패');
    }
  };

  return (
    <>
      <FormBox onSubmit={(e) => HandleSubmit(e)}>
        <Title>{title}</Title>
        {postOpen ? (
          <Postcode setPostOpen={setPostOpen} setAddress={setData} />
        ) : null}
        {text ? (
          <Text
            label={text.label}
            required={text.required}
            type={text.type}
            placeholder={text.placeholder}
            description={text.description}
            setData={setData}
          />
        ) : null}
        {phone ? (
          <Phone
            label={phone.label}
            required={phone.required}
            type={phone.type}
            placeholder={phone.placeholder}
            description={phone.description}
            setData={setData}
          />
        ) : null}
        {address ? (
          <Address
            label={address.label}
            required={address.required}
            placeholder={address.placeholder}
            onClick={openModal}
            address={data.address}
          />
        ) : null}
        {img ? (
          <File
            label={img.label}
            required={img.required}
            type={img.type}
            description={img.description}
            onChange={saveFile}
          />
        ) : null}
        {/* //TODO!! 이전코드입니다
        <File className="file">
          <label htmlFor="file">
            <i className="fa-solid fa-plus"></i>
            <span>눌러서 파일 등록</span>
            <span>{fileName}</span>
          </label>
          <input type="file" id="file" onChange={saveFile} />
        </File> */}
        {select ? (
          <Select
            label={select.label}
            required={select.required}
            type={select.type}
            placeholder={select.placeholder}
            description={select.description}
            options={select.options}
            setData={setData}
          />
        ) : null}
        <Submit type="submit">제출하기</Submit>
      </FormBox>
    </>
  );
};

export default CreatedForm;

const FormBox = styled.form`
  width: 60vw;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
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
