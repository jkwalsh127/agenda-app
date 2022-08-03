import React, { useState } from 'react';
import { Button, Typography, Backdrop, Modal, Box, Fade, Zoom, Tooltip } from "@mui/material";
import { API } from 'aws-amplify';
import { deleteAgenda as deleteAgendaMutation } from './../graphql/mutations';
import { RemoveCircleOutline } from '@mui/icons-material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #f44336',
    boxShadow: 24,
    pl: 3,
    pr: 3,
    pt: 2,
    pb: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

export default function DeleteAgenda({ agenda, agendas, setAgendas, fetchAgendas }) {

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    async function confirmDeleteAgenda() {
        handleOpenDeleteModal();
    }

    async function deleteAgenda({ id }) {
        const newAgendasArray = agendas.filter(agenda => agenda.id !== id);
        setAgendas(newAgendasArray);
        await API.graphql({ query: deleteAgendaMutation, variables: { input: { id } }});
        handleCloseDeleteModal();
        fetchAgendas();
      }
    
    return (
      <>
        <Tooltip title="Delete" placement="bottom" arrow TransitionComponent={Zoom} >
            <Button variant="contained" sx={{ ml: "0px", p: "3px" }}>
                <RemoveCircleOutline onClick={() => confirmDeleteAgenda()} xs={{fontSize: "large"}}></RemoveCircleOutline>
            </Button>
        </Tooltip>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openDeleteModal}
            onClose={handleCloseDeleteModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openDeleteModal}>
            <Box sx={style}>
                <Typography sx={{ m: 'auto', fontSize: 28, color: "#f44336" }}>
                    Delete Agenda?
                </Typography>

                <Box>
                    <Button onClick={() => deleteAgenda(agenda)} variant="contained" sx={{ mt: '10px', mr: '10px', width: "150px" }}>
                        Confirm
                    </Button>
                    <Button onClick={handleCloseDeleteModal} variant="outlined" sx={{ mt: '10px', ml: '10px', width: "150px" }}>
                        Cancel
                    </Button>
                </Box>
            </Box>
            </Fade>
        </Modal>
      </>
    )
}