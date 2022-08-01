import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import Agendas from './components/Agendas';
import Tasks from './components/Tasks';

function App() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <Agendas />
          <Tasks />
        </>
      )}
    </Authenticator>
  );
}

export default App;