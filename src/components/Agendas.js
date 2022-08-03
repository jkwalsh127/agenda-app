import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { listAgenda } from './../graphql/queries';
import { Card, Typography } from "@mui/material";
import CreateAgenda from './CreateAgenda';
import StartAgenda from './StartAgenda';
import ListAgendas from './ListAgendas';

export default function Agendas() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [agendas, setAgendas] = useState([]);
  const [openAgenda, setOpenAgenda] = useState("")

  useEffect(() => {
    fetchAgendas();
  }, []);

  async function fetchAgendas() {
    const apiData = await API.graphql({ query: listAgenda });
    setAgendas(apiData.data.listAgenda.items);
  }

  async function startAgenda({ id }) {
    handleOpen();
    setOpenAgenda(id);
  }

  return (
    <Card variant="outlined">
      <Typography variant="title">Dashboard</Typography>
      <CreateAgenda agendas={agendas} setAgendas={setAgendas} />
      <StartAgenda open={open} openAgenda={openAgenda} agendas={agendas} handleClose={handleClose} />
      <ListAgendas agendas={agendas} setAgendas={setAgendas} startAgenda={startAgenda} />
    </Card>
  );
}