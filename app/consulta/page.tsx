import { AppBar, Avatar, Box, IconButton, OutlinedInput, TextField, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function ConsultaPage () {

    return (
        <>
            <Box>
                <AppBar position="static" sx={{ backgroundColor: '#F7F7F7', padding: '10px 0', borderBottom: '1px solid silver' }}  color="inherit" elevation={0}>
                    <Toolbar >
                    <Link href="/" style={{color: '#000'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            >
                            <ArrowBackIcon />
                        </IconButton>
                        </Link>
                        <OutlinedInput
                            sx={{
                                "& fieldset": { border: 'none' }
                            }}
                            fullWidth
                            placeholder="Busque por código ou descrição"
                        />
                        <IconButton
                            edge="end"
                            color="inherit"
                        >
                            <FilterCenterFocusIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}