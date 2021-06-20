import React from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import ChatArea from './components/ChatArea'

import './App.css';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <MainContainer>
        <SideBar />
        <ChatArea />
      </MainContainer>
   </AppContainer>
  );
}

const AppContainer = styled.div`

`;

const MainContainer = styled.div`
  display: flex;
`;

export default App;
