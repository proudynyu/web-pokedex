import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom'
import { Container, Section } from './styles/AppStyle';

import Router from './routes'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <Container>
          <Sidebar />

          <Section>
            <Router />
          </Section>

        </Container>
        
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
