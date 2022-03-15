import { useState, useRef } from 'react';
import styled from 'styled-components';
import Form from '../components/FieldForm/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createForm } from "../actions/index";
import shortId from 'shortid';

const initialState = {
  type: 'text',
  required: false,
  label: '',
  description: ''
}

const formId = shortId.generate()

const NewForm = () => {
  const titleRef = useRef();
  const [formList, setFormList] = useState([initialState]);
  const [title, setTitle] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddForm = () => {
    const FormCopy = [...formList, { ...initialState }];
    setFormList(FormCopy)
  }

  const handleAddTitle = () => {
    setTitle(titleRef.current.value)
  }

  const checkEmpty = (formList) => {
    const targets = formList.map((field) => {
      const tempField = { ...field };
      delete tempField.description;
      delete tempField.placeholder;
      return Object.values(tempField);
    });

    for (let target of targets) {
      for (let e of target) {
        if (e === "") return true;
        if (Array.isArray(e) && !e.length) return true;
      }
    }
    return false;
  };

  const onSubmit = () => {
    if (title === '' || !formList.length || checkEmpty(formList)) {
      return alert('필수항목을 모두 입력해주세요.')
    }
    dispatch(createForm({ formId, title, formList }));
    return navigate('/');
  }

  console.log(formList);

  return (
    <Container>
      <InnerBox>
        <Text>제목*</Text>
        <TitleInput ref={titleRef} onChange={handleAddTitle} />
        <Text>필드목록*</Text>
        {formList.map((form, idx) => (
          <Form
            key={idx}
            form={form}
            formList={formList}
            setFormList={setFormList}
            idx={idx}
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
};

export default NewForm;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  box-sizing: border-box;
`;
const InnerBox = styled.div`
  width: 25rem;
  margin: 0 auto;
`;
const Text = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
`;
const TitleInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 2rem;
  border: 1px solid #d1d1d1;
  margin-bottom: 1rem;
`;
const SubmitBtn = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid #0028ff;
  background-color: #fff;
  color: #0028ff;
  :hover {
    background-color: #0028ff;
    color: #fff;
    cursor: pointer;
  }
`;
const BtnBox = styled.div`
  float: right;
  margin: 0.5rem 0;
`;
const OpenBtn = styled.button`
  margin-right: 0.5rem;
  border: none;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
`;
const CreateBtn = styled.button`
  border: none;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background-color: #0028ff;
  color: #fff;
  cursor: pointer;
  border: 1px solid #0028ff;
`;
