import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Page/Home';
import store from './store/store';
import Submission from './Page/Submission';
import NewForm from './Page/NewForm';
import CreatedForm from './Page/CreatedForm';
import { useSelector } from 'react-redux';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path={`/submission/:id`} element={<Submission />} />
              <Route exact path="/create" element={<NewForm />} />
              <Route
                exact
                path={`/createdform/:id`}
                element={<CreatedForm />}
              />
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
