import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from "styled-components";

const Editor = () => {
  return (
    <Container>
      <CKEditor
        editor={ClassicEditor}
        data=''
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </Container>
  );
}

export default Editor;

const Container = styled.div`
  width: 25rem;
  margin: 0 auto;
`