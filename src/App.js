import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import Agendas from './components/Agendas';

function App() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <Agendas />
        </>
      )}
    </Authenticator>
  );
}

export default App;