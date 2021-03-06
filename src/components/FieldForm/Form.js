import styled from "styled-components";
import FieldHeader from "./FieldHeader";
import TextEditor from "./TextEditor";
import { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const Form = ({ setFormList, formList, form, idx, moveFormItem }) => {
  const labelRef = useRef();
  const [tagText, setTagText] = useState("");
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

  const addTag = (e) => {
    setFormList(
      formList.map((list, i) => {
        if (idx === i) {
          return { ...list, option: tagBox };
        }
        return list;
      })
    );
  };

  const onKeyUp = (e) => {
    if (window.event.keyCode === 188) {
      // ,가 눌렸을 때 실행
      if (!tagText.trim()) {
        alert("공백을 허용하지않습니다.");
        setTagText("");
        return;
      } else {
        setTagBox([...tagBox, tagText.replace(",", "")]);
        setTagText("");
      }
    }
  };

  const removes = (e) => {
    if (e.target.innerText === "X") {
      e.target.parentNode.remove();
    }
  };

  // useDrag - the list item is draggable
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop - the list item is also a drop area
  const [spec, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = idx;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveFormItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <Container ref={dragDropRef} style={{ opacity }}>
      <FieldHeader setFormList={setFormList} formList={formList} idx={idx} />
      {form.type === "text" || form.type === "phone" ? (
        <Input
          ref={labelRef}
          onChange={handleChangePlaceholder}
          placeholder="예시를 입력해주세요."
          value={formList[idx].placeholder}
        />
      ) : form.type === "select" ? (
        <TagContainer>
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
            onKeyPress={addTag}
            onKeyUp={onKeyUp}
            value={tagText}
          />
        </TagContainer>
      ) : null}
      <TextEditor setFormList={setFormList} formList={formList} idx={idx} />
    </Container>
  );
};

export default Form;

const Container = styled.form`
  border-top: 1px solid #d1d1d1;
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 1.8rem;
  box-sizing: border-box;
  border: none;
  outline: 0;
  border: 1px solid #d1d1d1;
`;
const TagContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
`
const TextBox = styled.div`
  display: inline-block;
  text-align: center;
  width: auto;
  height: 20px;
  border: none;
  border-radius: 5px;
  padding: 2px;
  background-color: transparent;
  margin: 2px 5px;
  flex-wrap: wrap-reverse;
  order: 1;
  background-color: #fff;
`;
const TagBtn = styled.div`
  display: inline-block;
  border: red 1px solid;
  background-color: white;
  color: red;
  width: 13px;
  height: 13px;
  margin: 0px 3px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  position: relative;
  top: 2px;
`;
