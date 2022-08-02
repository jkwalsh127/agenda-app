import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAgenda } from './../graphql/queries';
import { deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { Card, Button, Typography, Accordion, AccordionSummary, Grid } from "@mui/material";
import { ExpandMore, Delete } from '@mui/icons-material';
import NewAgenda from './NewAgenda';


export default function Agendas() {


  const [agendas, setAgendas] = useState([]);

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

  return (
    <Authenticator>
        <>
        <Card variant="outlined" sx={{ border: "3px solid #f4673c", maxWidth: 500, width: "60%", minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifySelf: "center", marginTop: 3, marginBottom: 5, padding: 2, overflow: "scroll" }}>
          <Typography variant="title">Dashboard</Typography>

          <NewAgenda agendas={agendas} setAgendas={setAgendas} />


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
                          <Typography sx={{ color: "#12707d", textAlign: "center", pt: "10px" }}>Description</Typography>
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


                          <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                            <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                            {agenda.firsttopic}
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: "center"}}>
                            {agenda.firstestimate}
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                          <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                          {agenda.secondtopic}
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: "center"}}>
                          {agenda.secondestimate}
                          </Grid>
                          </Grid>

                        <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                          <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6" }}>
                          {agenda.thirdtopic}
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: "center"}}>
                          {agenda.thirdestimate}
                          </Grid>
                          </Grid>

                        <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                          <Grid item xs={9} sx={{ textAlign: "center", color: "#fffaf6", mb: "10px" }}>
                          {agenda.fourthtopic}
                          </Grid>
                          <Grid item xs={3} sx={{ textAlign: "center"}}>
                          {agenda.fourthestimate}
                          </Grid>
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