import { Box, Card, CardContent, CardHeader, Container, Divider, IconButton, Typography } from "@mui/material"
import AppBarComponent from "../components/appbar"
import MoreIcon from '@mui/icons-material/MoreVert'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Fechamento = () => {

    return (
        <>
            <AppBarComponent title="Fechamento de caixa" elevation={1}>
                <></>
            </AppBarComponent>
            <Container>
                <Box>
                    <Typography>Resumo</Typography>
                    <Box display="flex" alignContent="space-between">

                    <Box sx={{width: '50%'}}>
                        <Typography>Valor</Typography>
                        <Typography>R$ 0,00</Typography>
                    </Box>
                    <Box>
                        <Typography>Data</Typography>
                        <Typography>24/02/2025</Typography>
                    </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography>Formas de pagamento (1)</Typography>
                    <Card>
                        <CardHeader 
                            avatar={<LocalAtmIcon />}
                            title="Dinheiro" 
                            action={
                                <IconButton >
                                    <AddCircleIcon fontSize="large" color="success" /> <ChevronRightIcon />
                                </IconButton>
                            } 
                        />
                        <Divider />
                        <CardContent>
                        <Box display="flex" alignContent="space-between">
                            <Box sx={{width: '50%'}}>
                                <Typography>Qtd</Typography>
                                <Typography>---</Typography>
                            </Box>
                            <Box>
                                <Typography>Declarado</Typography>
                                <Typography>R$0,00</Typography>
                            </Box>
                        </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    )
}

export default Fechamento