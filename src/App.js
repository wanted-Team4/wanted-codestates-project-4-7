import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Page/Home';
import store from './store/store';
import Submission from './Page/Submission';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Container>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/submission' element={<Submission />} />
            </Routes>
          </Container>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
