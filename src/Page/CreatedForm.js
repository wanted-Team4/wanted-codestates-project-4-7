import React from 'react';
import styled from 'styled-components';

const CreatedForm = () => {
    return (
        <Container>
            <h1>데이터블 폼 예시</h1>
            <Form>
                <div>
                    <label for="name">이름</label>
                    <input type="text" placeholder="" id="name" />
                </div>
                <div>
                    <label for="phone">휴대폰번호</label>
                    <input type="number" placeholder="" id="phone" />
                </div>
                <div>
                    <label for="address">배송지</label>
                    <input value="{/*배송지*/}" id="address" />
                </div>
                <div>
                    <label for="option">옵션</label>
                    <select id="option">
                        {/*받아온데이터맵돌리기*/}
                        <option value="{/*선택1*/}">선택1</option>
                    </select>
                </div>
                <div className="file">
                    {/* <label></label> */}
                    <input type="file" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox">개인정보 수집 약관 동의(필수)</label>
                </div>
                <button type="submit">제출하기</button>
            </Form>
        </Container>
    );
};

export default CreatedForm;

const Container = styled.div`
    width: 60vw;
    margin: 0 auto;
`;

const Form = styled.form`
    position: relative;
    width: 100%;

    label {
        width: 100%;
    }

    input,
    select {
        width: 100%;
        margin-bottom: 1rem;
        padding: 0.6rem;
        box-sizing: border-box;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        border: 1px solid #999;
    }
    // .file {
    //     label {
    //         background: #fff;
    //         border: 1px solid #000;
    //         width: 100%;
    //         height: 3rem;
    //         // position: absolute;
    //     }
    // }
    .checkbox {
        input {
            width: auto;
        }
        display: flex;
    }
    button {
        width: 100%;
        background: #000;
        color: #fff;
        padding: 1rem;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        border: none;
    }
`;
