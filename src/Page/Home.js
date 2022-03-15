import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Submission from './Submission';
import { deleteForm } from '../actions';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { forms } = useSelector((state) => state.surveyReducer);
  const state = useSelector((state) => state.surveyReducer); //데이터 확인용으로 넣었어요, 필요없으시면 삭제해주세요
  console.log(state); //데이터 확인용으로 넣었어요, 필요없으시면 삭제해주세요

  return (
    <Container>
      <Head>
        <h1>생성된 폼 목록</h1>
        <span onClick={() => navigate('/create')}>
          <i className="fa-solid fa-plus"></i>
        </span>
      </Head>
      {forms.map((el, i) => (
        <FormItem key={i}>
          <p onClick={() => navigate(`/createdform/${forms[i].formId}`)}>
            {forms[i].title}
          </p>
          <div>
            <span onClick={() => navigate(`/submission/${forms[i].formId}`)}>
              <i className="fa-solid fa-list"></i>
            </span>
            <span onClick={() => dispatch(deleteForm(forms[i].formId))}>
              <i class="fa-solid fa-trash-can"></i>
            </span>
          </div>
        </FormItem>
      ))}
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
    background: #ea6157;
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
