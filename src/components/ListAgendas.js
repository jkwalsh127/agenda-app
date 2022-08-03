import { Button, Typography, Accordion, AccordionSummary, Grid, Tooltip, Zoom } from "@mui/material";
import { ExpandMore, PlayArrow, RemoveCircleOutline } from '@mui/icons-material';
import { ButtonGroup } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';

export default function ListAgendas({ agendas, setAgendas, startAgenda }) {

  async function deleteAgenda({ id }) {
    const newAgendasArray = agendas.filter(agenda => agenda.id !== id);
    setAgendas(newAgendasArray);
    await API.graphql({ query: deleteAgendaMutation, variables: { input: { id } }});
  }

  return (
  <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
    <Typography variant="header">Agendas</Typography>
    {
      agendas.map(agenda => (
        <Accordion  sx={{ backgroundColor: "#64bfc4", width: "90%", alignSelf: "center" }}>
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

                <Grid item xs={4}>
                  <Typography variant="descriptor">Topics</Typography>
                </Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={3}>
                  <Typography variant="descriptor">Time est.</Typography>
                </Grid>


                <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                  <Grid item xs={9}>
                    <Typography variant="topicList">
                      {agenda.firsttopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center"}}>
                    <span style={{color: "#fffaf6"}}>{agenda.firstestimate}</span>
                    {" min"}
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{display: agenda.secondtopic ? "flex" : "none"}}>
                  <Grid item xs={9}>
                    <Typography variant="topicList">
                      {agenda.secondtopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center"}}>
                    <span style={{color: "#fffaf6"}}>{agenda.secondestimate}</span>
                    {" min"}
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{display: agenda.thirdtopic ? "flex" : "none"}}>
                  <Grid item xs={9}>
                    <Typography variant="topicList">
                      {agenda.thirdtopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center"}}>
                  <span style={{color: "#fffaf6"}}>{agenda.thirdestimate}</span>
                    {" min"}                          
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{display: agenda.fourthtopic ? "flex" : "none"}}>
                  <Grid item xs={9}>
                    <Typography variant="topicList">
                      {agenda.fourthtopic}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "center"}}>
                  <span style={{color: "#fffaf6"}}>{agenda.fourthestimate}</span>
                    {" min"}                          
                  </Grid>
                </Grid>

                <Grid item xs={7}></Grid>
                <Grid item xs={5}>
                  <ButtonGroup
                    aria-label="outlined primary button group"
                    variant="contained"
                  > 
                    <Tooltip title="Delete" placement="bottom" arrow TransitionComponent={Zoom} >
                      <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                        <RemoveCircleOutline onClick={() => deleteAgenda(agenda)} xs={{fontSize: "large"}}></RemoveCircleOutline>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Begin Agenda" placement="bottom" arrow TransitionComponent={Zoom}>
                      <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                        <PlayArrow onClick={() => startAgenda(agenda)}></PlayArrow>
                      </Button>
                    </Tooltip>
                  </ButtonGroup>
                </Grid>

              </Grid>
            </div>
          </div>
        </Accordion>
      ))
    }
  </div>
  )
}