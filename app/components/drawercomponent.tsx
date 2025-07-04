"use client"
import { ReactNode, useState } from "react"
import { Box, Container, Divider, Drawer, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { grey } from "@mui/material/colors"
import CloseIcon from "@mui/icons-material/Close"

type DrawerProps = {
    children: ReactNode,
    title?: string,
    show: boolean,
    close?: boolean
}



export default function DrawerComponent({children, title, show, close}:DrawerProps) {

    const [isOpen, setIsOpen] = useState<boolean>(show)
    
    const toggleDrawer = () => {
        setIsOpen(false)
        console.log(isOpen)
    }

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
                onClose={() => toggleDrawer()}
                PaperProps={{ elevation: 0, style: { backgroundColor: 'transparent' }}}
            >
                <Puller />
                <Box
                    sx={{
                        backgroundColor: '#FFF',
                        borderRadius: '15px 15px 0 0'
                    }}
                >
                    { close && <CloseIcon sx={{p: 1.3, cursor: 'pointer'}} onClick={() => toggleDrawer()} />}
                    <Container>
                        <Typography sx={{ textAlign: 'center', p: 2 }} variant="h6" >{title}</Typography>
                        <Divider />
                        {children}
                    </Container>
                </Box>
            </Drawer>
        </>
    )
}