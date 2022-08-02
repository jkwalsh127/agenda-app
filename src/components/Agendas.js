import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { createAgenda as createAgendaMutation, deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Button, Typography } from "@mui/material";

const initialFormState = { title: '', description: '' }

function Agendas() {
  const [agendas, setAgendas] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchAgendas();
  }, []);

  async function fetchAgendas() {
    const apiData = await API.graphql({ query: listAgenda });
    setAgendas(apiData.data.listAgendas.items);
  }

  async function createAgenda() {
    if (!formData.title || !formData.description) return;
    await API.graphql({ query: createAgendaMutation, variables: { input: formData } });
    setAgendas([ agendas, formData ]);
    setFormData(initialFormState);
  }

  async function deleteAgenda({ id }) {
    const newAgendasArray = agendas.filter(agenda => agenda.id !== id);
    setAgendas(newAgendasArray);
    await API.graphql({ query: deleteAgendaMutation, variables: { input: { id } }});
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          <Typography variant="myVariant">My Agendas App</Typography>
          <Button onClick={signOut} variant="contained">Sign Out</Button>

          <input
            onChange={e => setFormData({ ...formData, 'title': e.target.value})}
            placeholder="Agenda title"
            value={formData.title}
          />
          <input
            onChange={e => setFormData({ ...formData, 'description': e.target.value})}
            placeholder="Agenda description"
            value={formData.description}
          />
          <Button onClick={createAgenda} variant="outlined">Create Agenda</Button>
          <div style={{marginBottom: 30}}>
            {
              agendas.map(agenda => (
                <div key={agenda.id || agenda.title}>
                  <h2>{agenda.title}</h2>
                  <p>{agenda.description}</p>
                  {/* {
                    tasks.map(task => (
                        <div key={task.id || task.title}>
                        <h2>{task.title}</h2>
                        <p>{task.estimate}</p>
                    ))
                  } */}
                  <Button onClick={() => deleteAgenda(agenda)} sx={{ p: 5, m: 5 }}>Delete agenda</Button>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default Agendas;