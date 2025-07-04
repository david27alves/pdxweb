import { Alert, Box, Button, Container, Divider, Drawer, IconButton, Slide, Snackbar, TextField, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { grey } from "@mui/material/colors"
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from "react"
import { Check } from "@mui/icons-material"
import CancelIcon from '@mui/icons-material/Cancel'
import { openShopDB } from "./db"

interface props {
    isOpen: boolean
    onClose: () => void
}

const OpeningShop = ({isOpen, onClose}: props) => {

    const [openSnack, setOpenSnack] = useState(false)
    const [startCash,  setStartCash] = useState('')

    const openShop = () => {
        onClose()
        setOpenSnack(true)
        openShopDB(1, Number(startCash))
        console.log(startCash)
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setOpenSnack(false)}
            >
                <CancelIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )
  
    const Puller = styled('div')(() => ({
        width: 60,
        height: 6,
        backgroundColor: grey[300],
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(45% - 15px)'
    }))

    return (
        <>            
            <Drawer
                anchor="bottom"
                open={isOpen}
                PaperProps={{ heigh: '100vh', top: 64, elevation: 0, style: { backgroundColor: 'transparent' }}}
            >
                <Puller />
                <Box
                    sx={{
                        backgroundColor: '#FFF',
                        borderRadius: '15px 15px 0 0'
                    }}
                >
                        
                    <CloseIcon sx={{p: 1.3, cursor: 'pointer'}} onClick={onClose} />
                    <Container
                        sx={{
                            height: 'calc(100vh - 150px)'
                        }}
                    >
                        <Typography variant="h6">Abertura de caixa</Typography>
                        <Typography>Informa um valor ou abra o caixa para continuar</Typography>
                        <TextField label="R$0,00" fullWidth variant="standard" onChange={(e) => setStartCash(e.target.value)}></TextField>
                    </Container>

                    <Divider />
                    
                    <Container>
                        <Button 
                            sx={{
                                marginTop: 2,
                                marginBottom: 2,
                                backgroundColor: '#66987D', 
                                textTransform: 'none'
                                
                            }} 
                            onClick={openShop}
                        variant="contained" fullWidth>Abrir caixa</Button>
                    </Container>

                </Box>
            </Drawer>
            
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                open={openSnack}
                autoHideDuration={6000}
                onClose={() => setOpenSnack(false)}
                TransitionComponent={Slide}
            >
                <Alert sx={{width: '100%'}} icon={<Check />}  severity="success" action={action} onClose={() => setOpenSnack(false)}>
                    Caixa aberto
                </Alert>
            </Snackbar>
        </>
    )
}

export default OpeningShop