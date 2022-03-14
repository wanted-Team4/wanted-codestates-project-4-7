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
            <Header>
                <h1>설문지 목록 (홈)</h1>
                <span onClick={() => navigate('/createdform')}>
                    <i class="fa-solid fa-plus"></i>
                </span>
            </Header>
            {/* map 돌리기 */}
            <FormItem>
                <p onClick={() => navigate()}>기본설문지</p>
                <div>
                    <span onClick={() => navigate('/submission')}>
                        <i class="fa-solid fa-list"></i>
                    </span>
                    <span onClick={() => navigate('/#2')}>
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
    border: 1px solid #000;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;

    .fa-plus {
        border: none;
        border-radius: 50%;
        padding: 0.7rem;
        box-sizing: border-box;
        font-size: 1.5rem;
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
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;

    p {
        min-width: 40%;
        background: pink;
        padding: 1.5rem;
        box-sizing: border-box;
        margin: 0;
    }
    div {
        margin: 0;
    }
    span {
    }
    .fa-list {
        padding: 1.5rem;
        box-sizing: border-box;
        background: red;
    }
    .fa-trash-can {
        padding: 1.5rem;
        box-sizing: border-box;
        background: blue;
    }
`;
