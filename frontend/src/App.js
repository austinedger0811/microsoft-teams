import React from 'react'

import Grid from '@material-ui/core/Grid'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import ChatArea from './components/ChatArea'

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <ChatArea />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
