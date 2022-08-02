import React from 'react';
import { Box, Fade, Grid, Pagination } from "@mui/material";

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

export default function StartAgenda({ open, openAgenda, agendas }) {

  const currentAgenda = agendas.filter(agenda => agenda.id === openAgenda )

  return (
        <Fade in={open}>
          <Box sx={style}>
            {
            currentAgenda.map(agenda => (
                <>
                    <Grid container spacing={0}>
    
                        <Grid item xs={12} sx={{}}>
                          {agenda.title}
                        </Grid>

                        <Grid item xs={12} sx={{display: agenda.firsttopic ? "flex" : "none"}}>
                            <Grid item xs={7} sx={{}}>
                                {agenda.secondtopic}
                            </Grid>
                            <Grid item xs={3} sx={{}}>
                                {"timer"}
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            {agenda.firstdescription}
                        </Grid>

                    </Grid>
                </>
            ))
            }
            {
            currentAgenda.map(agenda => (
                <Pagination count={agenda.secondtopic === "" ? 1 : agenda.thirdtopic === "" ? 2 : agenda.fourthtopic === "" ? 3 : 4 } color="primary" />
            ))
            }

          </Box>
        </Fade>
  )
}