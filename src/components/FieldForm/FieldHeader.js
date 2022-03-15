import styled from "styled-components";
import { useState, useRef } from 'react';

const FieldHeader = ({ setFormList, idx, formList }) => {
  const labelRef = useRef();
  const checkboxRef = useRef();

  // console.log(formList)
  // const handleCheckNum = (label) => {
  //   let regExp = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  //   let result = regExp.test(label);
  //   console.log(result);
  // }

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
      delete field.info;
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
            // if (!handleCheckNum(field.label)) {
            //   return alert('전화번호가 올바르지 않습니다.')
            // }
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
              info: '',
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
      <Select name="type" onChange={handleChangeSelect} value={formList.type}>
        <Option value="text">텍스트</Option>
        <Option value="phone">전화번호</Option>
        <Option value="address">주소</Option>
        <Option value="select">드롭다운</Option>
        <Option value="file">첨부파일</Option>
        <Option value="agreement">이용약관</Option>
      </Select>
      <Input type="text" ref={labelRef} onChange={handleChangeLabel} />
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
      <DragBtn><i className="fa-solid fa-arrows-up-down"></i></DragBtn>
      <DeleteBtn onClick={handleDeleteField}><i className="fa-solid fa-xmark"></i></DeleteBtn>
    </Container>
  );
};

export default FieldHeader;

const Container = styled.div`
  width: 25rem;
  height: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  box-sizing: border-box;
`;
const Select = styled.select`
  border: none;
  height: 100%;
  outline: 0;
  width: 20%;
  border-right: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
`;
const Option = styled.option`
  outline: 0;
`;
const Input = styled.input`
  width: 50.1%;
  outline: 0;
  height: 100%;
  border: none;
  border-right: 1px solid #d1d1d1;
`;
const CheckBox = styled.input`
  outline: 0;
  padding: 0.3rem 0.6rem;
`;
const Label = styled.label`
  padding: 0.25rem 0.3rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-right: 1px solid #d1d1d1;
`;
const DragBtn = styled.div`
  padding: 0.4rem 0.65rem;
  cursor: pointer;
`;
const DeleteBtn = styled.div`
  padding: 0.3rem 0.5rem;
  background-color: #ff6464;
  color: #fff;
  font-size: 1.2rem;
  border-right: 2px solid #ff6464;
  cursor: pointer;
`;
