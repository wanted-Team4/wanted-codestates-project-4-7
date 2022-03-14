import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const { forms } = useSelector((state) => state.surveyReducer);
  const dispatch = useDispatch();
  const [surveyId, setSurveyId] = useState(1);
  console.log(forms.filter((el) => el.formId === surveyId));

  const navigate = useNavigate();

  return (
    <Container>
      <Head>
        <h1>(홈) 설문지 목록</h1>
        <span onClick={() => navigate('/create')}>
          <i class="fa-solid fa-plus"></i>
        </span>
      </Head>
      {/* map 돌리기 */}
      <FormItem>
        <p onClick={() => navigate('/createdform')}>기본설문지</p>
        <div>
          <span onClick={() => navigate('/submission')}>
            <i class="fa-solid fa-list"></i>
          </span>
          <span onClick={() => navigate('#')}>
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </div>
      </FormItem>
      <FormItem>
        <p onClick={() => navigate('/createdform')}>기본설문지</p>
        <div>
          <span onClick={() => navigate('/submission')}>
            <i class="fa-solid fa-list"></i>
          </span>
          <span onClick={() => navigate('#')}>
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </div>
      </FormItem>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  margin: 0 auto;
  width: 60vw;
  min-height: 80vh;
`;

const Head = styled.div`
  width: 100%;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;

  .fa-plus {
    border: none;
    border-radius: 50%;
    padding: 0.6rem;
    box-sizing: border-box;
    font-size: 1rem;
    color: #fff;
    background: #000;
    cursor: pointer;
  }
`;

const FormItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin: 1rem 0;

  p {
    width: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
    margin: 0;
  }
  div {
    display: flex;
  }
  .fa-list {
    padding: 1.5rem 1rem;
    box-sizing: border-box;
  }
  .fa-trash-can {
    padding: 1.5rem 1.5rem 1.5rem 1rem;
    box-sizing: border-box;
  }
`;
