import { useState } from "react"
import { Box, Button, Modal, OutlinedInput, TextField, Typography } from "@mui/material"

type props = {
    show: boolean
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    p: 2,
  };

const ModalIdentificaFidelidade = ({show}: props) => {

    const [open, setOpen] = useState(show)

    const openModalFidelidade = () => {
        setOpen(!open)
    }
    
    return (
        <>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <Typography sx={{textAlign: 'center'}} variant="h6" component="h2">
                        Identifique o cliente
                    </Typography>
                    <OutlinedInput 
                        sx={{
                            backgroundColor: '#F7F7F7',
                            "& fieldset": { border: 'none' }
                        }}
                        fullWidth
                        placeholder="CPF do cliente" 
                    />
                    <Button 
                        sx={{
                            marginTop: 3, 
                            marginBottom: 2
                        }} 
                        fullWidth
                        variant='contained' disabled>Identificar</Button>
                    <Button onClick={() => openModalFidelidade()} fullWidth variant='outlined'>Agora não</Button>
                </Box>
            </Modal>
        </>
    )

}

export default ModalIdentificaFidelidade