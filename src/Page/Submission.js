import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/modal';
const Submission = () => {
  const [toggle, setToggle] = useState(false);

  const modalSwitch = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Title>제출 목록</Title>
      <ContentBox>
        <Box onClick={modalSwitch}>1</Box>
        {toggle && <Modal modalSwitch={modalSwitch} />}
      </ContentBox>
    </Container>
  );
};
export default Submission;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  width: 60%;
  height: 100vh;
`;

const Box = styled.div`
  border: 1px solid black;
  text-align: center;
  width: 40%;
  height: 130px;
  margin: 20px 0 20px 0;
  border-radius: 15px;
`;
