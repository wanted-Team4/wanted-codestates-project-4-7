import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const TextEditor = ({ setFormList, idx, formList }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorToHtml, setEditorToHTML] = useState(
    draftToHtml(convertToRaw(editorState.getCurrentContent())),
  );
  const htmlToEditor = `초기 값`;
  useEffect(() => {
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap,
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  useEffect(() => {
    setEditorToHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  useEffect(() => {
    setFormList(
      formList.map((list, i) => {
        // if (list.type === 'agreement') {
        //   //이용약관일 경우
        //   if (idx === i) {
        //     return {
        //       ...list,
        //       contents: editorToHtml,
        //     };
        //   }
        // } else {
        if (idx === i) {
          return {
            ...list,
            description: editorToHtml,
          };
        }
        // }
        return list;
      }),
    );
  }, [editorToHtml]);

  useEffect(() => {
    let blocksFromHtml;
    if (Object.keys(formList[idx]).includes('contents')) {
      blocksFromHtml = htmlToDraft(formList[idx].contents);
    } else {
      blocksFromHtml = htmlToDraft(formList[idx].description);
    }
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap,
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [formList]);

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };

  return (
    <Container>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar-class"
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
    </Container>
  );
}

export default TextEditor;

const Container = styled.div`
  height: 8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #D1D1D1;
  border-left: 1px solid #D1D1D1;
  border-right: 1px solid #D1D1D1;
  .wrapper-class {
    width: 100%;
    margin-bottom: 4rem;
  }
  .rdw-inline-wrapper :nth-child(5) {
    display: none;
  }
  .rdw-inline-wrapper :nth-child(6) {
    display: none;
  }
  .rdw-inline-wrapper :nth-child(7) {
    display: none;
  }
  .rdw-option- .rdw-block-wrapper {
    display: none;
  }
  .rdw-fontsize-wrapper {
    display: none;
  }
  .rdw-dropdown-wrapper {
    display: none;
  }
  .rdw-fontfamily-wrapper {
    display: none;
  }
  .rdw-list-wrapper {
    display: none;
  }
  .rdw-text-align-wrapper {
    display: none;
  }
  .rdw-link-wrapper {
    display: none;
  }
  .rdw-embedded-wrapper {
    display: none;
  }
  .rdw-image-wrapper {
    display: none;
  }
  .rdw-remove-wrapper {
    display: none;
  }
  .rdw-image-wrapper {
    display: none;
  }
`