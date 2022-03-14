import styled from "styled-components";
import { useState } from 'react';

const FieldHeader = ({ setFormList, form, labelRef }) => {
  const [selected, setSelected] = useState(form.type);
  const [label, setLabel] = useState('');

  const handleDeleteForm = () => {
    setFormList(forms => forms.filter(item => item.formId !== form.formId))
  }

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelected(newType)
    setFormList(forms => forms.filter(item => item.formId !== form.formId))
    setFormList(formId => [...formId, { formId: Date.now(), type: newType }])
  };

  const handleLabelChange = () => {
    setLabel(labelRef.current.value)
  }

  return (
    <Container>
      <Select name="type" value={selected} onChange={handleTypeChange}>
        <Option value="text">텍스트</Option>
        <Option value="phone">전화번호</Option>
        <Option value="address">주소</Option>
        <Option value="select">드롭다운</Option>
        <Option value="file">첨부파일</Option>
        <Option value="agreement">이용약관</Option>
      </Select>
      <Input type="text" ref={labelRef} onChange={(e) => handleLabelChange(e)} />
      <Label><CheckBox type="checkbox" />필수</Label>
      <DragBtn><i className="fa-solid fa-arrows-up-down"></i></DragBtn>
      <DeleteBtn onClick={handleDeleteForm}><i className="fa-solid fa-xmark"></i></DeleteBtn>
    </Container>
  );
}

export default FieldHeader;

const Container = styled.div`
  width: 25rem;
  height: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  box-sizing: border-box;
`
const Select = styled.select`
  border: none;
  height: 100%;
  outline: 0;
  width: 20%;
  border-right: 1px solid #D1D1D1;
  border-left: 1px solid #D1D1D1;
`
const Option = styled.option`
  outline: 0;
`
const Input = styled.input`
  width: 49.6%;
  outline: 0;
  height: 100%;
  border: none;
  border-right: 1px solid #D1D1D1;
`
const CheckBox = styled.input`
  outline: 0;
  padding: 0.3rem 0.6rem;
`
const Label = styled.label`
  padding: 0.25rem 0.3rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-right: 1px solid #D1D1D1;
`
const DragBtn = styled.div`
  padding: 0.4rem 0.65rem;
  cursor: pointer;
`
const DeleteBtn = styled.div`
  padding: 0.3rem 0.6rem;
  background-color: #FF6464;
  color: #fff;
  font-size: 1.2rem;
  border-right: 1px solid #FF6464;
  cursor: pointer;
`