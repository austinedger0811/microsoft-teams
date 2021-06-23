import React from 'react'
import styled from 'styled-components'
import LeftPanel from './components/LeftPanel'

import './App.css';

function App() {
  return (
    <AppContainer>
      <LeftPanel />
   </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
`;