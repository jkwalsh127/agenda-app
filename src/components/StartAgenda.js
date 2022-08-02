import React from 'react';
import { TextField, Button, Typography, Box, Fade } from "@mui/material";

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

export default function StartAgenda({ open }) {

  return (
        <Fade in={open}>
          <Box sx={style}>

          </Box>
        </Fade>
  )
}