import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import Agendas from './components/Agendas';
import { Button, Avatar } from "@mui/material";
import footerBackground from "./images/footerBackground.jpg";


function App() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <div className='app-wrap' style={{ backgroundImage: `url(${footerBackground})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
            <div className='header-wrap'>
              <header className='header'>
                <div className='nav'>
                  <Button onClick={signOut} variant="contained" sx={{ mr: 2, height: 25, alignSelf: "center", backgroundColor: "primary.main" }}>Sign Out</Button>
                  <Avatar sx={{ alignSelf: "center" }}>R</Avatar>
                </div>
              </header>
            </div>
            <Agendas />
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default App;