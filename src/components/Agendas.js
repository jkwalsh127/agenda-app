import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator, ButtonGroup } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Card, Button, Typography, Accordion, AccordionSummary, Grid, Tooltip, Zoom, Modal, Backdrop } from "@mui/material";
import { ExpandMore, PlayArrow, RemoveCircleOutline } from '@mui/icons-material';
import NewAgenda from './NewAgenda';
import StartAgenda from './StartAgenda';


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
            <StartAgenda open={open} openAgenda={openAgenda} agendas={agendas} />
          </Modal>



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

                        <Grid item xs={7}></Grid>
                        <Grid item xs={5}>
                          <ButtonGroup
                            aria-label="outlined primary button group"
                            variant="contained"
                          > 
                            <Tooltip title="Delete" placement="top" arrow TransitionComponent={Zoom} >
                            <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                              <RemoveCircleOutline onClick={() => deleteAgenda(agenda)} xs={{fontSize: "large"}}></RemoveCircleOutline>
                            </Button>
                            </Tooltip>
                            <Tooltip title="Begin Agenda" placement="top" arrow TransitionComponent={Zoom}>
                            <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                              <PlayArrow onClick={() => startAgenda(agenda)}></PlayArrow>
                            </Button>
                            </Tooltip>
                          </ButtonGroup>
                          </Grid>

                        {/* <Grid item xs={4}>
                          <Typography sx={{ color: "#12707d", textAlign: "center" }}>Description</Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={4}>
                        </Grid>

                        <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6"}}>
                        {agenda.description}
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "center" }}> */}

                        {/* </Grid> */}

                        <Grid item xs={4}>
                          <Typography sx={{ color: "#12707d", textAlign: "center" }}>Topics</Typography>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={3}>
                          <Typography sx={{ color: "#12707d", textAlign: "center" }}>Time est.</Typography>
                        </Grid>


                          <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                            <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                            {agenda.firsttopic}
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: "center"}}>
                              <span style={{color: "#fffaf6"}}>{agenda.firstestimate}</span>
                              {" min"}
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sx={{pl: "25px", pr: "25px"}}>
                            {agenda.firstdescription}
                          </Grid>


                        <Grid item xs={12} sx={{display: agenda.secondtopic ? "flex" : "none"}}>
                          <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                          {agenda.secondtopic}
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: "center"}}>
                            <span style={{color: "#fffaf6"}}>{agenda.secondestimate}</span>
                            {" min"}
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{pl: "25px", pr: "25px"}}>
                          {agenda.firstdescription}
                        </Grid>

                        <Grid item xs={12} sx={{display: agenda.thirdtopic ? "flex" : "none"}}>
                          <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                          {agenda.thirdtopic}
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: "center"}}>
                          <span style={{color: "#fffaf6"}}>{agenda.thirdestimate}</span>
                            {" min"}                          
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{pl: "25px", pr: "25px"}}>
                          {agenda.firstdescription}
                        </Grid>

                        <Grid item xs={12} sx={{display: agenda.fourthtopic ? "flex" : "none"}}>
                          <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6", mb: "10px" }}>
                          {agenda.fourthtopic}
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: "center"}}>
                          <span style={{color: "#fffaf6"}}>{agenda.fourthestimate}</span>
                            {" min"}                          
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{pl: "25px", pr: "25px"}}>
                          {agenda.firstdescription}
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