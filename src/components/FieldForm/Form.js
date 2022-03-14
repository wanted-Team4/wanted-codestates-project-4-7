import styled from "styled-components";
import FieldHeader from './FieldHeader'
import Editor from "./Editor";

const Form = ({ setFormList, form, labelRef }) => {
  console.log(form)

  return (
    <Container>
      <FieldHeader
        setFormList={setFormList}
        form={form}
        labelRef={labelRef}
      />
      {form.type === 'text' || form.type === 'phone' ?
        (<Input
          // value={placeholder}
          placeholder="예시를 입력해주세요."
        />) : form.type === 'select' ? (
          <>태그</>
        ) : null}
      <Editor />
    </Container>
  );
}

export default Form;

const Container = styled.div`
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