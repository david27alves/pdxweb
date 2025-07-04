import Link from "next/link"
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MoreIcon from '@mui/icons-material/MoreVert'
import { ReactNode } from "react"

type props = {
    title: string
    elevation?: number
    children: ReactNode
}

const AppBarComponent = ({title, elevation, children}: props) => {
    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" color="inherit" elevation={elevation}>
                    <Toolbar>
                        <Link href="/" style={{color: '#000'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            >
                            <ArrowBackIosIcon />
                        </IconButton>
                        </Link>
                        <Typography sx={{ flexGrow: 1 }} fontWeight='bold'>{title}</Typography>

                        {children}

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default AppBarComponent