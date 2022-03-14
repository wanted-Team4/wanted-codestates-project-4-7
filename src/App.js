import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
