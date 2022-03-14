import { useState, useRef } from 'react';
import styled from "styled-components";
import Form from "../components/FieldForm/Form";

const NewForm = () => {
  const titleRef = useRef();
  const labelRef = useRef();

  const [formList, setFormList] = useState([{ formId: 1, type: 'text' }])

  const handleAddForm = () => {
    setFormList(formId => [...formId, { formId: Date.now(), type: 'text' }])
  }

  const onSubmit = () => {
    console.log(titleRef.current.value)
    console.log(labelRef.current.value) // 확인 필요
    console.log(formList[0].type)
    // console.log(form.type) // 필수 체크 여부
    // console.log(form.type) // 플레이스 홀더 값
    // console.log(form.type) // 텍스트 내용 있을 경우
  }

  console.log(formList)

  return (
    <Container>
      <InnerBox>
        <Text>제목*</Text>
        <TitleInput ref={titleRef} />
        <Text>필드목록*</Text>
        {formList.map((form) => (
          <Form
            key={form.formId}
            form={form}
            setFormList={setFormList}
            labelRef={labelRef}
          />
        ))}
        <SubmitBtn onClick={handleAddForm}>필드 추가하기</SubmitBtn>
        <BtnBox>
          <OpenBtn>폼 열기</OpenBtn>
          <CreateBtn onClick={onSubmit}>저장하기</CreateBtn>
        </BtnBox>
      </InnerBox>
    </Container>
  );
}

export default NewForm;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  box-sizing: border-box;
`
const InnerBox = styled.div`
  width: 25rem;
  margin: 0 auto;
`
const Text = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
`
const TitleInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 2rem;
  border: 1px solid #D1D1D1;
  margin-bottom: 1rem;
`
const SubmitBtn = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid #0028FF;
  background-color: #fff;
  color: #0028FF;
  :hover{
    background-color: #0028FF;
    color: #fff;
    cursor: pointer;
  }
`
const BtnBox = styled.div`
  float: right;
  margin: 0.5rem 0;
`
const OpenBtn = styled.button`
  margin-right: 0.5rem;
  border: none;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
`
const CreateBtn = styled.button`
  border: none;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background-color: #0028FF;
  color: #fff;
  cursor: pointer;
  border: 1px solid #0028FF;
`