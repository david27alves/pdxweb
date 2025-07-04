import { Alert, Box, Button, Container, Modal, Typography } from "@mui/material"
import { useState } from "react";
import OpenShop from "./drawerAbrirCaixa";

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
}

const ModalClosedShop = () => {

    const [openModalClosedShop, setOpenModalClosedShop] = useState(true)

    const [openDrawerShop, setOpenDrawerShop] = useState<boolean>(false)

    const handleOpenDrawer = () => {
        setOpenModalClosedShop(false)
        setOpenDrawerShop(true)
    }

    const handleCloseDrawer = () => {
        setOpenModalClosedShop(false)
    }

    return (
        <>
            <Container sx={{ marginTop: 3 }}>
                <Alert severity="warning">Atenção! O caixa está fechado.</Alert>
                <OpenShop isOpen={openDrawerShop} onClose={handleCloseDrawer} />
            </Container>

            <Modal
            open={openModalClosedShop}
            >
                <Box sx={style}>
                    <Typography sx={{textAlign: 'center'}} variant="h6" component="h2">
                        Deseja abrir o caixa?
                    </Typography>
                    <Typography sx={{ mt: 2, textAlign: 'center' }}>
                        Enquanto o caixa estiver fechado, não será possível iniciar as vendas
                    </Typography>
                    <Button 
                        sx={{
                            marginTop: 4, 
                            marginBottom: 2
                            }} 
                            fullWidth
                            variant='contained'
                            onClick={handleOpenDrawer}
                            >Abrir caixa agora</Button>
                    <Button onClick={handleCloseDrawer} fullWidth variant='outlined'>Agora não</Button>
                </Box>
            </Modal>

            
        </>
    )
}

export default ModalClosedShop