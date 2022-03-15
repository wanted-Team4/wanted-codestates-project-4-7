import styled from "styled-components";
import { useState, useRef } from 'react';

const FieldHeader = ({ setFormList, idx, formList }) => {
  const labelRef = useRef();
  const checkboxRef = useRef();

  // 필드 삭제
  // const handleDeleteField = () => {
  //   const filteredFieldList = formList.filter((i) => idx !== i);
  //   setFormList(filteredFieldList);
  // };
  const handleDeleteField = () => {
    setFormList(
      formList.filter(((field, i) => {
        if (idx !== i) {
          return { ...field }
        }
      }
      ))
    )
  };

  // 타입 변경
  const handleChangeSelect = (e) => {
    const reset = field => {
      delete field.description;
      delete field.contents;
      delete field.option;
      delete field.placeholder;
    };

    setFormList(
      formList.map((field, i) => {
        if (idx === i) {
          reset(field);
          if (e.target.value === 'text') {
            return {
              ...field,
              id: 'name',
              type: e.target.value,
              placeholder: '',
              description: '',
            };
          } else if (e.target.value === 'phone') {
            return {
              ...field,
              id: 'phone',
              type: e.target.value,
              placeholder: '',
              description: '',
            };
          } else if (e.target.value === 'address') {
            return {
              ...field,
              id: 'address',
              type: e.target.value,
              description: '',
            };
          } else if (e.target.value === 'select') {
            return {
              ...field,
              id: 'input_0',
              type: e.target.value,
              option: [],
              description: '',
            };
          } else if (e.target.value === 'file') {
            return {
              ...field,
              id: 'input_1',
              type: e.target.value,
              description: '',
            };
          } else if (e.target.value === 'agreement') {
            return {
              ...field,
              id: 'agreement_0',
              type: e.target.value,
              contents: '',
            };
          }
        }
        return field;
      }),
    );
  };

  // label 적용
  const handleChangeLabel = (e) => {
    setFormList(
      formList.map((list, i) => {
        if (idx === i) {
          return { ...list, label: e.target.value };
        }
        return list;
      }),
    );
  };

  // checkbox 적용
  const handleChangeCheckbox = (e) => {
    setFormList(
      formList.map((list, i) => {
        if (idx === i) {
          return { ...list, required: e.target.checked };
        }
        return list;
      }),
    );
  };

  return (
    <Container>
      <Select name="type" onChange={handleChangeSelect}>
        <Option value="text">텍스트</Option>
        <Option value="phone">전화번호</Option>
        <Option value="address">주소</Option>
        <Option value="select">드롭다운</Option>
        <Option value="file">첨부파일</Option>
        <Option value="agreement">이용약관</Option>
      </Select>
      <Input type="text" ref={labelRef} onChange={handleChangeLabel} />
      <LabelBox>
        <Label>
          <CheckBox
            type="checkbox"
            ref={checkboxRef}
            onChange={handleChangeCheckbox}
            checked={formList.required}
            id={'required_' + idx}
          />
          필수
        </Label>
      </LabelBox>
      <DragBtn><i className="fa-solid fa-arrows-up-down"></i></DragBtn>
      <DeleteBtn onClick={handleDeleteField}><i className="fa-solid fa-xmark"></i></DeleteBtn>
    </Container>
  );
};

export default FieldHeader;

const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  margin: 0 auto;
`;
const Select = styled.select`
  width: 35%;
  border: none;
  height: 100%;
  outline: 0;
  border-right: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
  border-top-left-radius: 10px;
`;
const Option = styled.option`
  outline: 0;
`;
const Input = styled.input`
  width: 100%;
  outline: 0;
  height: 100%;
  border: none;
  border-right: 1px solid #d1d1d1;
`;
const LabelBox = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
`
const CheckBox = styled.input`
  outline: 0;
`;
const Label = styled.label`
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-right: 1px solid #d1d1d1;
`;
const DragBtn = styled.div`
  padding: 0.4rem 1rem 0.4rem 0.5rem;
  cursor: pointer;
  background-color: #fff;
`;
const DeleteBtn = styled.div`
  padding: 0.3rem 0.5rem;
  background-color: #ff6464;
  color: #fff;
  font-size: 1.2rem;
  border-right: 2px solid #ff6464;
  cursor: pointer;
`;
