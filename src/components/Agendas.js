import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { createAgenda as createAgendaMutation, deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Button, Typography } from "@mui/material";

// const initialFormState = { title: '', description: '', firsttopic: '', firstestimate: '' };
const initialFormState = { title: '', description: '', firsttopic: '', firstestimate: '', secondtopic: '', secondestimate: '', thirdtopic: '', thirdestimate: '', fourthtopic: '', fourthestimate: '' };

export default function Agendas() {

  const [agendas, setAgendas] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchAgendas();
  }, []);

  async function fetchAgendas() {
    const apiData = await API.graphql({ query: listAgenda });
    setAgendas(apiData.data.listAgenda.items);
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
          <input
            onChange={e => setFormData({ ...formData, 'firsttopic': e.target.value})}
            placeholder="First topic"
            value={formData.fitopic}
          />
          <input
            onChange={e => setFormData({ ...formData, 'firstestimate': e.target.value})}
            placeholder="time estimation"
            value={formData.firstestimate}
          />
          <input
            onChange={e => setFormData({ ...formData, 'secondtopic': e.target.value})}
            placeholder="Second topic"
            value={formData.secondtopic}
          />
          <input
            onChange={e => setFormData({ ...formData, 'secondestimate': e.target.value})}
            placeholder="time estimation"
            value={formData.secondestimate}
          />
          <input
            onChange={e => setFormData({ ...formData, 'thirdtopic': e.target.value})}
            placeholder="Third topic"
            value={formData.thirdtopic}
          />
          <input
            onChange={e => setFormData({ ...formData, 'thirdestimate': e.target.value})}
            placeholder="time estimation"
            value={formData.thirdestimate}
          />
          <input
            onChange={e => setFormData({ ...formData, 'fourthtopic': e.target.value})}
            placeholder="Fourth topic"
            value={formData.fourthtopic}
          />
          <input
            onChange={e => setFormData({ ...formData, 'fourthestimate': e.target.value})}
            placeholder="time estimation"
            value={formData.fourthestimate}
          />
          <Button onClick={createAgenda} variant="outlined" sx={{ color: "customColor.darker" }}>Create Agenda</Button>
          <div style={{marginBottom: 30}}>
            {
              agendas.map(agenda => (
                <div key={agenda.id || agenda.title}>
                  <h2>{agenda.title}</h2>
                  <p>{agenda.description}</p>
                  <p>{agenda.firsttopic}</p>
                  <p>{agenda.firstestimate}</p>
                  <p>{agenda.secondtopic}</p>
                  <p>{agenda.secondestimate}</p>
                  <p>{agenda.thirdtopic}</p>
                  <p>{agenda.thirdestimate}</p>
                  <p>{agenda.fourthtopic}</p>
                  <p>{agenda.fourthestimate}</p>
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