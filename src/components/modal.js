import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = ({ modalSwitch }) => {
  const [data, setData] = useState([
    {
      id: 'name',
      type: 'text',
      required: true,
      label: '이름',
      placeholder: '주민등록상 이름 입력',
    },
  ]);
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      modalSwitch();
    }
  }; // 모달 창을 제외한 화면을 눌렀을시에 모달창을 닫기위한 이벤트

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []); // 모달을 제외한 스크린의 스크롤을 막기위한 이벤트

  return (
    <Modaldim onClick={onCloseModal}>
      <ModalBox>
        <ModalItem>
          <button onClick={onCloseModal}>X</button>
          {data.map((item, i) => {
            return (
              <>
                {item.id ? (
                  <>
                    <Box key={item.id}>
                      <p className='value'>{item.label}</p>
                      <p className='text'>고양이</p>
                    </Box>
                  </>
                ) : null}
              </>
            );
          })}
        </ModalItem>
      </ModalBox>
    </Modaldim>
  );
};

export default Modal;

const Modaldim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
`;

const ModalBox = styled.div`
  width: 602px;
  height: 754px;
  background-color: #fff;
  // Modal 창 브라우저 가운데로 조정
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
  border-radius: 30px;
`;

const ModalItem = styled.div`
  margin: 0 auto;
  position: relative;
  top: 10%;
  width: 511px;
  height: 547px;
  font-size: 12px;
  height: calc(100vh - 400px);
  overflow-y: scroll;
  scrollbar-width: 0px;
  padding: 0 0.5em;
  line-height: 30px;
`;

const Box = styled.div`
  text-align: start;
  border-bottom: 1px solid #333;

  .value {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .text {
    margin-left: 10px;
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
`;
