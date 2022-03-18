import { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import Form from "../components/FieldForm/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createForm } from "../actions/index";
import shortId from "shortid";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialState = {
  id: "name",
  type: "text",
  required: false,
  label: "",
  placeholder: "",
  description: "",
};
const formId = shortId.generate();

const NewForm = () => {
  const titleRef = useRef();
  const [formList, setFormList] = useState([initialState]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddForm = () => {
    const FormCopy = [...formList, { ...initialState }];
    setFormList(FormCopy);
  };

  const handleAddTitle = () => {
    setTitle(titleRef.current.value);
  };

  const checkEmpty = (formList) => {
    const targets = formList.map((field) => {
      const tempField = { ...field };
      delete tempField.description;
      delete tempField.placeholder;
      delete tempField.options;
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
    if (title === "" || !formList.length || checkEmpty(formList)) {
      return alert("필수항목을 모두 입력해주세요.");
    }
    dispatch(createForm({ formId, title, formList }));
    return navigate("/");
  };

  const moveFormListItem = useCallback(
    (dragIndex, hoverIndex) => {
      if (typeof dragIndex == "undefined") return;
      if (dragIndex === hoverIndex) return;
      const dragItem = formList[dragIndex];
      const hoverItem = formList[hoverIndex];
      // Swap places of dragItem and hoverItem in the pets array
      setFormList((forms) => {
        const updatedForms = [...forms];
        updatedForms[dragIndex] = hoverItem;
        updatedForms[hoverIndex] = dragItem;
        return updatedForms;
      });
    },
    [formList]
  );

  console.log(formList);
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <InnerBox>
          <HeaderText>폼 생성하기</HeaderText>
          <Text>제목*</Text>
          <TitleInput ref={titleRef} onChange={handleAddTitle} />
          <Text>필드목록*</Text>
          {formList.map((form, idx) => (
            <Form
              key={idx}
              form={form}
              formList={formList}
              setFormList={setFormList}
              moveFormItem={moveFormListItem}
              idx={idx}
            />
          ))}
          <SubmitBtn onClick={handleAddForm}>필드 추가하기</SubmitBtn>
          <BtnBox>
            <OpenBtn>폼 열기</OpenBtn>
            <CreateBtn onClick={onSubmit}>저장하기</CreateBtn>
          </BtnBox>
        </InnerBox>
      </DndProvider>
    </Container>
  );
};

export default NewForm;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #f6f6f6;
  height: 100vh;
`;
const InnerBox = styled.div`
  width: 33rem;
  margin: 0 auto;
`;
const HeaderText = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;
const Text = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.3rem;
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
  background-color: #0075f6;
  color: #fff;
  border: 1px solid #0075f6;
  :hover {
    cursor: pointer;
    border: 1px solid #0075f6;
    background-color: #fff;
    color: #0075f6;
  }
`;
const BtnBox = styled.div`
  float: right;
  margin: 0.5rem 0;
`;
const OpenBtn = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  background-color: white;
  font-weight: 500;
  border: 1px solid #0075f6;
`;
const CreateBtn = styled.button`
  border: none;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background-color: #0075f6;
  color: #fff;
  cursor: pointer;
  border: 1px solid #0075f6;
`;
