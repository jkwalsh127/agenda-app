import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { listAgenda } from '../graphql/queries';
import { Card, Typography } from "@mui/material";
import CreateAgenda from './CreateAgenda';
import ListAgendas from './ListAgendas';

export default function Dashboard() {

  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    fetchAgendas();
  }, []);

  async function fetchAgendas() {
    const apiData = await API.graphql({ query: listAgenda });
    setAgendas(apiData.data.listAgenda.items);
  }



  return (
    <Card variant="outlined">
      <Typography variant="title">Dashboard</Typography>
      <CreateAgenda agendas={agendas} setAgendas={setAgendas} fetchAgendas={fetchAgendas}/>
      <ListAgendas agendas={agendas} setAgendas={setAgendas} fetchAgendas={fetchAgendas}/>
    </Card>
  );
}