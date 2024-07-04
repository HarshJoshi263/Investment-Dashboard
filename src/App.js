import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import TopBar from './TopBar';

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <AppContainer>
    <Sidebar />
    <ContentContainer>
      <TopBar />
      <MainContent />
    </ContentContainer>
  </AppContainer>
);

export default App;
