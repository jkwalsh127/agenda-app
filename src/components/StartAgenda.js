import React, { useState } from 'react';
import { PlayArrow } from '@mui/icons-material';
import { Button, Pagination, Backdrop, Modal, Box, Fade, Zoom, Tooltip, Grid } from "@mui/material";

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
                    <Grid container spacing={0}>
                    
                      <Grid item xs={12} sx={{}}>
                        {agenda.title}
                      </Grid>
                
                      <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                        <Grid item xs={7} sx={{}}>
                          {agenda.firsttopic}
                        </Grid>
                        <Grid item xs={3} sx={{}}>
                          {"timer"}
                        </Grid>
                      </Grid>
                
                      <Grid item xs={12}>
                        {agenda.firstdescription}
                      </Grid>
                
                    </Grid>
                  : page === 2 ?
                    <Grid container spacing={0}>
                    
                      <Grid item xs={12} sx={{}}>
                        {agenda.title}
                      </Grid>
                
                      <Grid item xs={12} sx={{display: agenda.secondtopic ? "flex" : "none"}}>
                        <Grid item xs={7} sx={{}}>
                          {agenda.secondtopic}
                        </Grid>
                        <Grid item xs={3} sx={{}}>
                          {"timer"}
                        </Grid>
                      </Grid>
                
                      <Grid item xs={12}>
                        {agenda.seconddescription}
                      </Grid>
                
                    </Grid>
                  : page === 3 ?
                    <Grid container spacing={0}>
                    
                      <Grid item xs={12} sx={{}}>
                        {agenda.title}
                      </Grid>
                
                      <Grid item xs={12} sx={{display: agenda.thirdtopic ? "flex" : "none"}}>
                        <Grid item xs={7} sx={{}}>
                          {agenda.thirdtopic}
                        </Grid>
                        <Grid item xs={3} sx={{}}>
                          {"timer"}
                        </Grid>
                      </Grid>
                
                      <Grid item xs={12}>
                        {agenda.thirddescription}
                      </Grid>
                
                    </Grid>
                  :
                    <Grid container spacing={0}>
                    
                    <Grid item xs={12} sx={{}}>
                      {agenda.title}
                    </Grid>
                
                    <Grid item xs={12} sx={{display: agenda.fourthtopic ? "flex" : "none"}}>
                      <Grid item xs={7} sx={{}}>
                        {agenda.fourthtopic}
                      </Grid>
                      <Grid item xs={3} sx={{}}>
                        {"timer"}
                      </Grid>
                    </Grid>
                
                    <Grid item xs={12}>
                      {agenda.fourthdescription}
                    </Grid>
                
                  </Grid>
                ))
              }
              {
                currentAgenda.map(agenda => (
                  <>
                    <Pagination 
                        color="primary" 
                        count={agenda.secondtopic === "" ? 1 : agenda.thirdtopic === "" ? 2 : agenda.fourthtopic === "" ? 3 : 4 } 
                        onChange={handlePageChange}
                        page={page}
                    />
                  </>
                ))
              }
            </Box>
          </Fade>
        </Modal>
    </>
  )
}