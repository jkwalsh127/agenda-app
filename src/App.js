import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import Agendas from './components/Agendas';
import { Button, Avatar } from "@mui/material";
import background from "./images/background.jpg";


function App() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className='app-wrap' style={{ backgroundImage: `url(${background})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
          <header className='header'>
            <Button onClick={signOut} variant="contained" sx={{ mr: 2, height: 25, alignSelf: "center", backgroundColor: "primary.main" }}>Sign Out</Button>
            <Avatar>R</Avatar>
          </header>

          <Agendas />
        </div>
      )}
    </Authenticator>
  );
}

export default App;