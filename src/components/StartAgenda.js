import React, { useState } from 'react';
import { PlayArrow } from '@mui/icons-material';
import { Button, Pagination, Backdrop, Modal, Box, Fade, Zoom, Tooltip, Grid, Typography } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  pb: 2
};  

export default function StartAgenda({ openAgenda, setOpenAgenda, agendas, agenda }) {
  const [page, setPage] = useState(1)
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const currentAgenda = agendas.filter(agenda => agenda.id === openAgenda );

  async function startAgenda({ id }) {
    handleOpen();
    setOpenAgenda(id);
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
        <Tooltip title="Start" placement="bottom" arrow TransitionComponent={Zoom}>
            <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                <PlayArrow onClick={() => startAgenda(agenda)}></PlayArrow>
            </Button>
        </Tooltip>
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
              {
                currentAgenda.map(agenda => (

                  page === 1 ? 
                    <Grid container spacing={0} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        
                        <Grid item xs={12} sx={{backgroundColor: "#11717d", width: "100%", height: "100px", padding: "5px 0 5px 15px"}}>
                            <Typography variant="agendaTitleStart">
                                {agenda.title}
                            </Typography>
                        </Grid>
                    
                        <div style={{padding: "0 40px", width: "100%"}}>
                            <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                                <Grid item xs={7} sx={{mt: "20px"}}>
                                    <Typography variant="agendaTopicStart">
                                        {agenda.firsttopic}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} sx={{mt: "30px", ml: "100px"}}>
                                    <Typography variant="agendaEstimateStart">
                                        {agenda.firstestimate}{" min"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        
                            <Grid item xs={12} sx={{mt: "10px"}}>
                                <Typography variant="agendaDescriptionStart">
                                    {agenda.firstdescription}
                                </Typography>
                            </Grid>
                        </div>
                
                    </Grid>
                  : page === 2 ?
                    <Grid container spacing={0} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    
                      <Grid item xs={12} sx={{backgroundColor: "#11717d", width: "100%", height: "100px", padding: "5px 0 5px 15px"}}>
                        <Typography variant="agendaTitleStart">
                            {agenda.title}
                        </Typography>
                      </Grid>
                
                      <div style={{padding: "0 40px", width: "100%"}}>
                        <Grid item xs={12} sx={{display: agenda.secondtopic ? "flex" : "none"}}>
                            <Grid item xs={7} sx={{mt: "20px"}}>
                                <Typography variant="agendaTopicStart">
                                    {agenda.secondtopic}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{mt: "30px", ml: "100px"}}>
                                <Typography variant="agendaEstimateStart">
                                    {agenda.secondestimate}{" min"}
                                </Typography>
                            </Grid>
                        </Grid>
                    
                        <Grid item xs={12} sx={{mt: "10px"}}>
                            <Typography variant="agendaDescriptionStart">
                                {agenda.seconddescription}
                            </Typography>
                        </Grid>
                      </div>
                
                    </Grid>
                  : page === 3 ?
                    <Grid container spacing={0} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        
                        <Grid item xs={12} sx={{backgroundColor: "#11717d", width: "100%", height: "100px", padding: "5px 0 5px 15px"}}>
                            <Typography variant="agendaTitleStart">
                                {agenda.title}
                            </Typography>
                        </Grid>
                    
                        <div style={{padding: "0 40px", width: "100%"}}>
                            <Grid item xs={12} sx={{display: agenda.thirdtopic ? "flex" : "none"}}>
                                <Grid item xs={7} sx={{mt: "20px"}}>
                                    <Typography variant="agendaTopicStart">
                                        {agenda.thirdtopic}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} sx={{mt: "30px", ml: "100px"}}>
                                    <Typography variant="agendaEstimateStart">
                                        {agenda.thirdestimate}{" min"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        
                            <Grid item xs={12} sx={{mt: "10px"}}>
                                <Typography variant="agendaDescriptionStart">
                                    {agenda.thirddescription}
                                </Typography>
                            </Grid>
                        </div>
                
                    </Grid>
                  :
                    <Grid container spacing={0} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        
                        <Grid item xs={12} sx={{backgroundColor: "#11717d", width: "100%", height: "100px", padding: "5px 0 5px 15px"}}>
                            <Typography variant="agendaTitleStart">
                                {agenda.title}
                            </Typography>
                        </Grid>
                    
                        <div style={{padding: "0 40px", width: "100%"}}>
                            <Grid item xs={12} sx={{display: agenda.fourthtopic ? "flex" : "none"}}>
                                <Grid item xs={7} sx={{mt: "20px"}}>
                                    <Typography variant="agendaTopicStart">
                                        {agenda.fourthtopic}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} sx={{mt: "30px", ml: "100px"}}>
                                    <Typography variant="agendaEstimateStart">
                                        {agenda.fourthestimate}{" min"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        
                            <Grid item xs={12} sx={{mt: "10px"}}>
                                <Typography variant="agendaDescriptionStart">
                                    {agenda.fourthdescription}
                                </Typography>
                            </Grid>
                        </div>
                
                    </Grid>
                ))
              }
              {
                currentAgenda.map(agenda => (
                  <div style={{display: "flex", justifyContent: "center", postition: "absolute", bottom: "0px", marginTop: "30px"}}>
                    <Pagination 
                        color="primary" 
                        count={agenda.secondtopic === "" ? 1 : agenda.thirdtopic === "" ? 2 : agenda.fourthtopic === "" ? 3 : 4 } 
                        onChange={handlePageChange}
                        page={page}
                        size="large"
                    />
                  </div>
                ))
              }
            </Box>
          </Fade>
        </Modal>
    </>
  )
}