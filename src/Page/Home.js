import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
`
const FormBtn = styled.button`
`

const Home = () => {
  const { forms } = useSelector((state) => state.surveyReducer);
  const dispatch = useDispatch();
  const [surveyId, setSurveyId] = useState(1);
  const navigate = useNavigate();

  console.log(forms.filter((el) => el.formId === surveyId));

  return (
    <Container>
      <FormBtn onClick={() => navigate("/create")}>폼 생성하기</FormBtn>
    </Container>
  )
};

export default Home;
