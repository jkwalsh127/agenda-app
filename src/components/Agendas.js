import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Card, Typography } from "@mui/material";
import NewAgenda from './NewAgenda';
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

  async function deleteAgenda({ id }) {
    const newAgendasArray = agendas.filter(agenda => agenda.id !== id);
    setAgendas(newAgendasArray);
    await API.graphql({ query: deleteAgendaMutation, variables: { input: { id } }});
  }
  async function startAgenda({ id }) {
    handleOpen();
    setOpenAgenda(id);
  }

  return (
    <Authenticator>
        <>
        <Card variant="outlined" sx={{ border: "3px solid #f4673c", maxWidth: 500, width: "60%", minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifySelf: "center", marginTop: 3, marginBottom: 5, padding: 2, overflow: "scroll" }}>
          <Typography variant="title">Dashboard</Typography>

            <NewAgenda agendas={agendas} setAgendas={setAgendas} />

            <StartAgenda open={open} openAgenda={openAgenda} agendas={agendas} handleClose={handleClose} />

            <ListAgendas agendas={agendas} deleteAgenda={deleteAgenda} startAgenda={startAgenda} />
          
          </Card>
      </>
    </Authenticator>
  );
}