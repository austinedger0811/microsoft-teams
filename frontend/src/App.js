import React from 'react'
import styled from 'styled-components'
import LeftPanel from './components/LeftPanel'
import ChatArea from './components/ChatArea'

import './App.css';

function App() {
  return (
    <AppContainer>
      <LeftPanel />
      <ChatArea />
   </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;