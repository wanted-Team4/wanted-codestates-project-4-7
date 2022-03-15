import styled from 'styled-components';
import FieldHeader from './FieldHeader';
import TextEditor from './TextEditor';
import { useRef, useState } from 'react';

const Form = ({ setFormList, formList, form, idx }) => {
  const labelRef = useRef();
  const [tagText, setTagText] = useState('');
  const [tagBox, setTagBox] = useState([]);

  const handleChangePlaceholder = (e) => {
    setFormList(
      formList.map((list, i) => {
        if (idx === i) {
          return { ...list, placeholder: e.target.value };
        }
        return list;
      })
    );
  };

  const onChange = (e) => {
    setTagText(e.target.value);
  };
  const keyUp = (e) => {
    if (window.event.keyCode === 188) {
      // ,가 눌렸을 때 실행
      if (!tagText.trim()) {
        alert('공백을 허용하지않습니다.');
        setTagText('');
        return;
      } else {
        setTagBox([...tagBox, tagText.replace(',', '')]);
        setTagText('');
      }
    }
  };
  const removes = (e) => {
    if (e.target.innerText === 'X') {
      console.log('실행');
      e.target.parentNode.remove();
    }
  };
  console.log(tagBox);
  return (
    <Container>
      <FieldHeader setFormList={setFormList} formList={formList} idx={idx} />

      {form.type === 'text' || form.type === 'phone' ? (
        <Input
          ref={labelRef}
          onChange={handleChangePlaceholder}
          placeholder='예시를 입력해주세요.'
        />
      ) : form.type === 'select1' ? (
        <Input
          // value={placeholder}
          placeholder='예시를 입력해주세요.'
        />
      ) : form.type === 'select' ? (
        <>
          {tagBox.map((tag, i) => {
            return (
              <TextBox key={i}>
                {tag}
                <TagBtn onClick={removes}>X</TagBtn>
              </TextBox>
            );
          })}
          <Input
            placeholder="태그를 ',' 구분해서 입력해주세요"
            onChange={onChange}
            onKeyUp={keyUp}
            value={tagText}
          />
        </>
      ) : null}
      <TextEditor setFormList={setFormList} formList={formList} idx={idx} />
    </Container>
  );
};

export default Form;

const Container = styled.form`
  border-top: 1px solid #d1d1d1;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 25rem;
  height: 1.8rem;
  box-sizing: border-box;
  border: none;
  outline: 0;
  border: 1px solid #d1d1d1;
`;
const TextBox = styled.div`
  display: inline-block;
  text-align: center;
  width: auto;
  height: 25px;
  border: none;
  border-radius: 5px;
  padding: 2px;
  background-color: transparent;
  margin: 2px 5px;
  flex-wrap: wrap-reverse;
  order: 1;
  border: 1px solid #d1d1d1;
`;
const TagBtn = styled.div`
  display: inline-block;
  border: red 1px solid;
  background-color: white;
  color: red;
  width: 19px;
  height: 19px;
  margin: 0px 3px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  position: relative;
  top: 2px;
`;
