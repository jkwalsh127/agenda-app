import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { createAgenda as createAgendaMutation } from '../graphql/mutations';
import { TextField, Button, Typography, Backdrop, Modal, Box, Fade } from "@mui/material";


const initialFormState = { title: '', firsttopic: '', firstestimate: '', firstdescription: '', secondtopic: '', secondestimate: '', seconddescription: '',thirdtopic: '', thirdestimate: '', thirddescription: '', fourthtopic: '', fourthestimate: '', fourthdescription: ''};

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
  pb: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};  

export default function CreateAgenda({ agendas, setAgendas, fetchAgendas, open, handleClose }) {

  const [formData, setFormData] = useState(initialFormState);

  async function createAgenda() {
    if (!formData.title) return;
    await API.graphql({ query: createAgendaMutation, variables: { input: formData } });
    setAgendas([ agendas, formData ]);
    setFormData(initialFormState);
    handleClose();
    fetchAgendas();
  }

  return (
    <div>
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
              label="Agenda Title"
              onChange={e => setFormData({ ...formData, 'title': e.target.value})}
              value={formData.title}
              size="small"
            />
            <div>
            <TextField
              sx={{ width: "60%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="1st Topic"
              onChange={e => setFormData({ ...formData, 'firsttopic': e.target.value})}
              value={formData.firsttopic}
              size="small"
            />
            <TextField
              sx={{ width: "35%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time (minutes)"
              onChange={e => setFormData({ ...formData, 'firstestimate': e.target.value})}
              value={formData.firstestimate}
              size="small"
            />
            </div>
            <TextField
              sx={{ width: 1, mt: 1 }}
              id="outlined-search"
              label="1st Description"
              onChange={e => setFormData({ ...formData, 'firstdescription': e.target.value})}
              value={formData.firstdescription}
              size="small"
            />
            <div>
            <TextField
              sx={{ width: "60%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="2nd Topic"
              onChange={e => setFormData({ ...formData, 'secondtopic': e.target.value})}
              value={formData.secondtopic}
              size="small"
            />
            <TextField
              sx={{ width: "35%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time (minutes)"
              onChange={e => setFormData({ ...formData, 'secondestimate': e.target.value})}
              value={formData.secondestimate}
              size="small"
            />
            </div>
            <TextField
              sx={{ width: 1, mt: 1 }}
              id="outlined-search"
              label="2nd Description"
              onChange={e => setFormData({ ...formData, 'seconddescription': e.target.value})}
              value={formData.seconddescription}
              size="small"
            />
            <div>
            <TextField
              sx={{ width: "60%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="3rd Topic"
              onChange={e => setFormData({ ...formData, 'thirdtopic': e.target.value})}
              value={formData.thirdtopic}
              size="small"
            />
            <TextField
              sx={{ width: "35%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time (minutes)"
              onChange={e => setFormData({ ...formData, 'thirdestimate': e.target.value})}
              value={formData.thirdestimate}
              size="small"
            />
            </div>
            <TextField
              sx={{ width: 1, mt: 1 }}
              id="outlined-search"
              label="3rd Description"
              onChange={e => setFormData({ ...formData, 'thirddescription': e.target.value})}
              value={formData.thirddescription}
              size="small"
            />
            <div>
            <TextField
              sx={{ width: "60%", mt: 1, ml: "8px" }}
              id="outlined-search"
              label="4th Topic"
              onChange={e => setFormData({ ...formData, 'fourthtopic': e.target.value})}
              value={formData.fourthtopic}
              size="small"
            />
            <TextField
              sx={{ width: "35%", mt: 1, ml: "10px" }}
              id="outlined-search"
              label="time (minutes)"
              onChange={e => setFormData({ ...formData, 'fourthestimate': e.target.value})}
              value={formData.fourthestimate}
              size="small"
            />
            </div>
            <TextField
              sx={{ width: 1, mt: 1 }}
              id="outlined-search"
              label="4th Description"
              onChange={e => setFormData({ ...formData, 'fourthdescription': e.target.value})}
              value={formData.fourthdescription}
              size="small"
            />
            <Button onClick={createAgenda} variant="contained" sx={{ color: "#fffaf6", backgroundColor: "#11717d", mt: '10px', width: "170px" }}>
                Create Agenda
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}