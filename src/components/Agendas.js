import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { createAgenda as createAgendaMutation, deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Card, TextField, Button, Typography, Accordion, AccordionSummary, Backdrop, Modal, Box, Fade, Grid } from "@mui/material";
import { ExpandMore, Delete } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pl: 8,
  pr: 8,
  pt: 2,
  pb: 2
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
    handleClose();
  }

  async function deleteAgenda({ id }) {
    const newAgendasArray = agendas.filter(agenda => agenda.id !== id);
    setAgendas(newAgendasArray);
    await API.graphql({ query: deleteAgendaMutation, variables: { input: { id } }});
  }

  return (
    <Authenticator>
        <>
        <Card variant="outlined" sx={{ border: "3px solid #f4673c", maxWidth: 500, width: "60%", minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifySelf: "center", marginTop: 3, marginBottom: 5, padding: 2, overflow: "scroll" }}>
          <Typography variant="title">Dashboard</Typography>

          <div>
      <Button onClick={handleOpen} variant="contained" sx={{ color: "#fffaf6", backgroundColor: "#11717d", mt: '10px', width: "150px" }}>Add Agenda</Button>
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
            <Typography sx={{ m: 'auto', width: 240, fontSize: 28, textDecoration: 'underline #f4673c 3px', borderBottom: '2px solid #f4673c', height: '40px' }}>Add a new agenda</Typography>
            <TextField
              sx={{ width: 1, mt: 1 }}
              id="outlined-search"
              label="Title"
              onChange={e => setFormData({ ...formData, 'title': e.target.value})}
              value={formData.title}
            />
            <TextField
              sx={{ width: 1, mt: 1 }}
              id="outlined-search"
              label="Description"
              onChange={e => setFormData({ ...formData, 'description': e.target.value})}
              value={formData.description}
            />
            <TextField
              sx={{ width: "65%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="First Topic"
              onChange={e => setFormData({ ...formData, 'firsttopic': e.target.value})}
              value={formData.firsttopic}
            />
            <TextField
              sx={{ width: "30%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'firstestimate': e.target.value})}
              value={formData.firstestimate}
            />
            <TextField
              sx={{ width: "65%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="Second Topic"
              onChange={e => setFormData({ ...formData, 'secondtopic': e.target.value})}
              value={formData.secondtopic}
            />
            <TextField
              sx={{ width: "30%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'secondestimate': e.target.value})}
              value={formData.secondestimate}
            />
            <TextField
              sx={{ width: "65%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="Third Topic"
              onChange={e => setFormData({ ...formData, 'thirdtopic': e.target.value})}
              value={formData.thirdtopic}
            />
            <TextField
              sx={{ width: "30%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'thirdestimate': e.target.value})}
              value={formData.thirdestimate}
            />
            <TextField
              sx={{ width: "65%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="Fourth Topic"
              onChange={e => setFormData({ ...formData, 'fourthtopic': e.target.value})}
              value={formData.fourthtopic}
            />
            <TextField
              sx={{ width: "30%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time estimation"
              onChange={e => setFormData({ ...formData, 'fourthestimate': e.target.value})}
              value={formData.fourthestimate}
            />
            <Button onClick={createAgenda} variant="contained" sx={{ color: "#fffaf6", backgroundColor: "#11717d", mt: '10px', ml: "90px", width: "170px" }}>Create Agenda</Button>
          </Box>
        </Fade>
      </Modal>
    </div>


          <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: "0" }}>Agendas</h1>
            {
              agendas.map(agenda => (
                <Accordion  sx={{ backgroundColor: "#64bfc4", width: "90%", alignSelf: "center" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{ height: "50px" }}
                  >
                      <Typography sx={{ fontSize: "22px", ml: "10px", color: "#fffaf6", fontWeight: "bold" }}>{agenda.title}</Typography>
                    </AccordionSummary>

                  <div key={agenda.id || agenda.title}>
                    <div>
                      <Grid container spacing={0}>

                        <Grid item xs={4}>
                          <Typography sx={{ color: "#12707d", textAlign: "center" }}>Description</Typography>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={2}>
                          <Button variant="contained" sx={{ ml: "20px" }}>
                            <Delete onClick={() => deleteAgenda(agenda)}></Delete>
                          </Button>
                        </Grid>

                        <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6"}}>
                        {agenda.description}
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "center" }}>

                        </Grid>

                        <Grid item xs={4}>
                          <Typography sx={{ color: "#12707d", textAlign: "center" }}>Topics</Typography>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={3}>
                          <Typography sx={{ color: "#12707d", textAlign: "center" }}>Time est.</Typography>
                        </Grid>

                        <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                        {agenda.firsttopic}
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "center"}}>
                        {agenda.firstestimate}
                        </Grid>

                        <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                        {agenda.secondtopic}
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "center"}}>
                        {agenda.secondestimate}
                        </Grid>

                        <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                        {agenda.thirdtopic}
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "center"}}>
                        {agenda.thirdestimate}
                        </Grid>

                        <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6", mb: "10px" }}>
                        {agenda.fourthtopic}
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "center"}}>
                        {agenda.fourthestimate}
                        </Grid>
                    </Grid>
                    </div>
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