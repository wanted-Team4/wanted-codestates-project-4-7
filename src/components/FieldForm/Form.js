import styled from "styled-components";
import FieldHeader from './FieldHeader'
import TextEditor from "./TextEditor";
import { useRef, useState } from 'react';

const Form = ({ setFormList, formList, form, idx }) => {
  const labelRef = useRef();
  // const textRef = useRef();
  const [text, setText] = useState('');

  const handleChangePlaceholder = (e) => {
    setFormList(
      formList.map((list, i) => {
        if (idx === i) {
          return { ...list, placeholder: e.target.value };
        }
        return list;
      }),
    );
  }
  // const onChange = (event, editor) => {
  //   setText(editor.getData());
  //   console.log(text)
  // setFormList(
  //   formList.map((list, i) => {
  //     if (idx === i) {
  //       return { ...list, description: text };
  //     }
  //     return list;
  //   }),
  // );
  // }

  return (
    <Container>
      <FieldHeader
        setFormList={setFormList}
        formList={formList}
        idx={idx}
      />
      {form.type === 'text' || form.type === 'phone' ?
        (<Input
          ref={labelRef}
          onChange={handleChangePlaceholder}
          placeholder="예시를 입력해주세요."
        />) : form.type === 'select' ? (
          <Input
            placeholder="태그를 ',' 구분해서 입력해주세요"
          />
        ) : null}
      <TextEditor
        setFormList={setFormList}
        formList={formList}
        idx={idx}
      />
    </Container>
  );
}

export default Form;

const Container = styled.form`
  border-top: 1px solid #D1D1D1;
  margin-top: 1rem;
`

const Input = styled.input`
  width: 25rem;
  height: 1.8rem;
  box-sizing: border-box;
  border: none;
  border-top: 1px solid #D1D1D1;
  border-left: 1px solid #D1D1D1;
  border-right: 1px solid #D1D1D1;
  outline: 0;
`