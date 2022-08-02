import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { createAgenda as createAgendaMutation, deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Card, TextField, Button, Typography, Accordion, AccordionSummary, Backdrop, Modal, Box, Fade } from "@mui/material";
import { ExpandMore } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialFormState = { title: '', description: '', firsttopic: '', firstestimate: '', secondtopic: '', secondestimate: '', thirdtopic: '', thirdestimate: '', fourthtopic: '', fourthestimate: '' };

export default function Agendas() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

          <div>
            <TextField
              sx={{ width: 1 }}
              id="outlined-search"
              label="Title"
              onChange={e => setFormData({ ...formData, 'title': e.target.value})}
              value={formData.title}
            />
            <TextField
              sx={{ width: 1 }}
              id="outlined-search"
              label="Description"
              onChange={e => setFormData({ ...formData, 'description': e.target.value})}
              value={formData.description}
            />
            <TextField
              id="outlined-search"
              label="First Topic"
              onChange={e => setFormData({ ...formData, 'firsttopic': e.target.value})}
              value={formData.firsttopic}
            />
            <TextField
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'firstestimate': e.target.value})}
              value={formData.firstestimate}
            />
            <TextField
              id="outlined-search"
              label="Second Topic"
              onChange={e => setFormData({ ...formData, 'secondtopic': e.target.value})}
              value={formData.secondtopic}
            />
            <TextField
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'secondestimate': e.target.value})}
              value={formData.secondestimate}
            />
            <TextField
              id="outlined-search"
              label="Third Topic"
              onChange={e => setFormData({ ...formData, 'thirdtopic': e.target.value})}
              value={formData.thirdtopic}
            />
            <TextField
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'thirdestimate': e.target.value})}
              value={formData.thirdestimate}
            />
            <TextField
              id="outlined-search"
              label="Fourth Topic"
              onChange={e => setFormData({ ...formData, 'fourthtopic': e.target.value})}
              value={formData.fourthtopic}
            />
            <TextField
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'fourthestimate': e.target.value})}
              value={formData.fourthestimate}
            />
            <Button onClick={createAgenda} variant="outlined" sx={{ color: "customColor.darker" }}>Create Agenda</Button>
            </div>

          </Box>
        </Fade>
      </Modal>
    </div>
        <>
        <Card variant="outlined" sx={{ border: "3px solid #f4673c", maxWidth: 500, minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifySelf: "center", marginTop: 3, marginBottom: 5, padding: 2, overflow: "scroll" }}>
          <Typography variant="title">Dashboard</Typography>
          <Accordion  sx={{ backgroundColor: "#64bfc4", width: "90%" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Add new agenda</Typography>
            </AccordionSummary>

          </Accordion>

          <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: "0" }}>Agendas</h1>
            {
              agendas.map(agenda => (
                <Accordion  sx={{ backgroundColor: "#64bfc4", width: "90%", alignSelf: "center" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      <h2>{agenda.title}</h2>
                    </Typography>
                  </AccordionSummary>

                  <div key={agenda.id || agenda.title}>
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
                </Accordion>
              ))
            }
          </div>
          </Card>
      </>
    </Authenticator>
  );
}