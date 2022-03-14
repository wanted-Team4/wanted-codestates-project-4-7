import styled from 'styled-components';
import FieldHeader from './FieldHeader';
import Editor from './Editor';
import React, { useState } from 'react';

const Form = ({ setFormList, form, labelRef }) => {
  const [tagText, setTagText] = useState('');
  const [tagBox, setTagBox] = useState([]);

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
      <FieldHeader setFormList={setFormList} form={form} labelRef={labelRef} />
      <TagContainer>
        {form.type === 'text' || form.type === 'phone' ? (
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
      </TagContainer>
      <Editor />
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
  border-top: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  outline: 0;
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
`;
const TagContainer = styled.div`
  border: 1px solid #d1d1d1;
  display: inline-block;
  padding: 5px;
  height: auto;
  width: 100%;
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
