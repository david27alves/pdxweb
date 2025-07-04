"use client"
import { useState } from "react";
import { Box, Button, Chip, Container, IconButton, InputAdornment, OutlinedInput, Tab, Tabs } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import UndoIcon from '@mui/icons-material/Undo'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AppBarComponent from "../components/appbar";

const TrocaDevolucaoPage = () => {

    const [value, setValue] = useState(0)

    const handleChange = (newTab: number) => {
        setValue(newTab)
    }

    return (
        <>
            <AppBarComponent title="Troca e Devoluções">
                <IconButton
                    edge="end"
                    color="inherit"
                >
                    <HelpOutlineIcon />
                </IconButton>
            </AppBarComponent>

            <Box>
                <Container>
                    <Button><SwapHorizIcon />Nova Troca</Button>
                    
                    <Button><UndoIcon />Nova devolução</Button>
                </Container>
            </Box>

            <Box>
                <Tabs
                    sx={{
                        display: 'flex'
                    }}
                    value={value}
                    onChange={() => handleChange}
                    centered
                >
                    {["Vales-troca", "devoluções"].map((title, index) => (
                        <Tab key={index} sx={{
                            textTransform: 'none',
                            flex: 1,
                            fontSize: 14
                        }}
                        label={title} />
                    ))}
                </Tabs>
                <Box sx={{ marginTop: '25px' }}>
                    <Container>
                        <OutlinedInput 
                            sx={{ 
                                backgroundColor: '#F7F7F7'       ,
                                "& fieldset": { border: 'none' }, 
                            }}
                            fullWidth
                            placeholder="Busque por nome, número ou data"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            }
                        />
                        <Box>
                            <Chip label="Disponíveis" clickable />
                            <Chip label="Expirados" clickable />
                            <Chip label="Utilizados" clickable />
                            <Chip label="Cancelados" clickable />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default TrocaDevolucaoPage