import React from 'react';
import { Button, Typography, Accordion, AccordionSummary, Grid, Tooltip, Zoom, Box } from "@mui/material";
import { ExpandMore, RemoveCircleOutline } from '@mui/icons-material';
import { ButtonGroup } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import EditAgenda from "./EditAgenda";
import StartAgenda from './StartAgenda';

export default function ListAgendas({ agendas, setAgendas, fetchAgendas, setOpenAgenda }) {

  async function deleteAgenda({ id }) {
    const newAgendasArray = agendas.filter(agenda => agenda.id !== id);
    setAgendas(newAgendasArray);
    await API.graphql({ query: deleteAgendaMutation, variables: { input: { id } }});
    fetchAgendas();
  }

  return (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", marginTop: "20px", paddingBottom: "30px", alignSelf: "center"}}>
    {
      agendas.map(agenda => (
        <Accordion  sx={{ backgroundColor: "#64bfc4", width: "90%", alignSelf: "center", justifySelf: "center", p: "4px 0" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ height: "50px" }}
          >
            <Typography variant="agendaTitle">{agenda.title}</Typography>
          </AccordionSummary>

          <div key={agenda.id || agenda.title}>
            <div>
              <Grid container spacing={0}>

                <Grid item xs={3} sx={{mb: "5px", pt: "5px", borderTop: "1px solid #2d999e"}}>
                  <Typography variant="descriptor" sx={{pl: "15px"}}>Topics</Typography>
                </Grid>
                <Grid item xs={6} sx={{mb: "5px", pt: "5px", borderTop: "1px solid #2d999e"}}></Grid>
                <Grid item xs={3} sx={{mb: "5px", pt: "5px", borderTop: "1px solid #2d999e"}}>
                  <Typography variant="descriptor" sx={{paddingLeft: "23px"}}>Time est.</Typography>
                </Grid>


                <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                  <Grid item xs={9} sx={{height: "30px"}}>
                    <Typography variant="topicList">
                      {agenda.firsttopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center", color: "#2d999e"}}>
                    <span style={{color: "#fffaf6"}}>{agenda.firstestimate}</span>
                    {" min"}
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{display: agenda.secondtopic ? "flex" : "none"}}>
                  <Grid item xs={9} sx={{height: "30px"}}>
                    <Typography variant="topicList">
                      {agenda.secondtopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center", color: "#2d999e"}}>
                    <span style={{color: "#fffaf6"}}>{agenda.secondestimate}</span>
                    {" min"}
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{display: agenda.thirdtopic ? "flex" : "none"}}>
                  <Grid item xs={9} sx={{height: "30px"}}>
                    <Typography variant="topicList">
                      {agenda.thirdtopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center", color: "#2d999e"}}>
                  <span style={{color: "#fffaf6"}}>{agenda.thirdestimate}</span>
                    {" min"}                          
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{display: agenda.fourthtopic ? "flex" : "none"}}>
                  <Grid item xs={9} sx={{height: "30px"}}>
                    <Typography variant="topicList">
                      {agenda.fourthtopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center", color: "#2d999e"}}>
                  <span style={{color: "#fffaf6"}}>{agenda.fourthestimate}</span>
                    {" min"}                          
                  </Grid>
                </Grid>

                <Grid item xs={3} sx={{borderTop: "1px solid #2d999e"}}></Grid>
                <Grid item xs={6} sx={{borderTop: "1px solid #2d999e"}}>
                  <Box sx={{mb: "15px", mt: "10px"}}>
                    <ButtonGroup
                      aria-label="outlined primary button group"
                      variant="contained"
                    > 
                      <StartAgenda agendas={agendas} openAgenda={agenda.id} setOpenAgenda={setOpenAgenda} agenda={agenda}/>
                      <EditAgenda agendas={agendas} setAgendas={setAgendas} agendaId={agenda.id} agenda={agenda} fetchAgendas={fetchAgendas} />
                      <Tooltip title="Delete" placement="bottom" arrow TransitionComponent={Zoom} >
                        <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                          <RemoveCircleOutline onClick={() => deleteAgenda(agenda)} xs={{fontSize: "large"}}></RemoveCircleOutline>
                        </Button>
                      </Tooltip>
                    </ButtonGroup>
                  </Box>
                </Grid>
                <Grid item xs={3} sx={{borderTop: "1px solid #2d999e"}}></Grid>

              </Grid>
            </div>
          </div>
        </Accordion>
      ))
    }
  </div>
  )
}