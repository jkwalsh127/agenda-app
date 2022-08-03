import { Button, Typography, Backdrop, Modal, Box, Fade } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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

export default function ErrorModal({ openErrorModal, setOpenErrorModal, formData }) {
    const handleClose = () => setOpenErrorModal(false);
    
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openErrorModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openErrorModal}>
          <Box sx={style}>
            <Typography sx={{ m: 'auto', fontSize: 28, color: "#f44336" }}>
                Invalid Submission
            </Typography>

            {
                (!formData.title) ? (
                    <Typography sx={{textAlign: "center"}}>
                        You cannot create a new agenda without giving it a title.
                    </Typography>
                 ) : (!formData.firsttopic) ? (
                    <Typography sx={{textAlign: "center"}}>
                        You cannot create a new agenda without listing at least one topic.
                    </Typography>
                 ) : (!formData.firstestimate || !formData.firstdescription) ? (
                    <Typography sx={{textAlign: "center"}}>
                        You cannot create a new agenda without providing a time estimate and description for each topic.
                    </Typography>
                 ) : (formData.secondtopic && (!formData.secondestimate || !formData.seconddescription)) ? (
                    <Typography sx={{textAlign: "center"}}>
                        You cannot create a new agenda without providing a time estimate and description for each topic.
                    </Typography>
                 ) : (formData.thirdtopic && (!formData.thirdestimate || !formData.thirddescription)) ? (
                    <Typography sx={{textAlign: "center"}}>
                        You cannot create a new agenda without providing a time estimate and description for each topic.
                    </Typography>
                 ) : (formData.fourthtopic && (!formData.fourthestimate || !formData.fourthdescription)) ? (
                    <Typography sx={{textAlign: "center"}}>
                        You cannot create a new agenda without providing a time estimate and description for each topic.
                    </Typography>
                 ) : (<p></p>)
            }

            <Button onClick={handleClose} variant="outlined" sx={{ mt: '10px', width: "170px" }}>
                Okay
            </Button>
          </Box>
        </Fade>
      </Modal>
    )
}