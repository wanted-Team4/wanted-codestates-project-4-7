import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/modal';
const Submission = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const modalSwitch = () => {
    setToggle(!toggle);
  };

  const onClick = (e) => {
    navigate('/');
  };
  return (
    <Container>
      <Title>제출 목록</Title>
      <ContentBox>
        <Box onClick={modalSwitch}>
          <p className='Box_p'>기본설문지</p>
        </Box>
        {toggle && <Modal modalSwitch={modalSwitch} />}
        <Button onClick={(e) => onClick(e)}>확인</Button>
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
  /* border: 1px solid black; */
  width: 60%;
  height: 100vh;
`;

const Box = styled.div`
  text-align: center;
  width: 100%;
  height: 67px;
  margin: 20px 0 20px 0;
  border-radius: 15px;
  background: #eee;
  text-align: start;
  .Box_p {
    width: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
    margin: 0;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 10%;
  height: 30px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #0987d9;
`;
