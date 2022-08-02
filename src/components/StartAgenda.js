import React, { useState } from 'react';
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
  const [page, setPage] = useState(1)

  const currentAgenda = agendas.filter(agenda => agenda.id === openAgenda );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
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
  )
}