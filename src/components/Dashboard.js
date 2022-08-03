import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { listAgenda } from '../graphql/queries';
import { Card, Typography, Fab, Tooltip, Zoom } from "@mui/material";
import CreateAgenda from './CreateAgenda';
import ListAgendas from './ListAgendas';
import { Add } from '@mui/icons-material';

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    fetchAgendas();
  }, []);

  async function fetchAgendas() {
    const apiData = await API.graphql({ query: listAgenda });
    setAgendas(apiData.data.listAgenda.items);
  }



  return (
    <Card variant="outlined" sx={{display: "flex"}}>
      <div style={{display: "flex"}}>
        <Typography variant="title">Agendas</Typography>
        <div style={{position: "absolute", margin: "20px 0 0 270px"}}>
          <Tooltip title="Add Agenda" placement="right" arrow TransitionComponent={Zoom} variant="root">
            <Fab color="secondary" aria-label="add" size="small">
              <Add onClick={handleOpen}/>
            </Fab>
          </Tooltip>
        </div>
      </div>
      <CreateAgenda agendas={agendas} setAgendas={setAgendas} fetchAgendas={fetchAgendas} open={open} handleClose={handleClose} />
      <ListAgendas agendas={agendas} setAgendas={setAgendas} fetchAgendas={fetchAgendas} />
    </Card>
  );
}