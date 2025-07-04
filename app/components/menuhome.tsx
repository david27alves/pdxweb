'use client'
import { useState } from "react"
import { Button, Chip, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined'
import ModalOpcoesCaixa from "./drawerOpcoesCaixa"
import Link from "next/link"

export default function MenuHome() {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    const toggleOpenDrawer = (status: boolean) => {
      setOpenDrawer(status)
      console.log(openDrawer)
    }

    const menus = [
        {
          label: "Venda",
          icon: <ShoppingCartOutlinedIcon />,
          size: 12,
          route: "/venda"
        },
        {
          label: "Consulta de produto",
          icon: <SearchIcon />,
          size: 6,
          route: "/consulta"
        },
        {
          label: "Opções de caixa",
          icon: <ContentPasteOutlinedIcon />,
          size: 6,
          route: "/",
          function: () => toggleOpenDrawer(true)
        },
        {
          label: "Cartão presente",
          icon: <CardGiftcardOutlinedIcon />,
          size: 6,
          route: "/"
        },
        {
          label: "Troca e Devolução",
          icon: <StoreOutlinedIcon />,
          size: 6,
          route: "/trocadevolucao"
        },
        {
          label: "Clique e Retire",
          icon: <RepeatOutlinedIcon />,
          size: 6,
          route: "/"
        },
        {
          label: "Histórico de venda",
          icon: <ReceiptLongOutlinedIcon />,
          size: 6,
          route: "/"
        },
        {
          label: "SITEF",
          icon: <CreditCardOutlinedIcon />,
          size: 6,
          route: "/"
        },
        {
          label: "Nova carga",
          icon: <SettingsOutlinedIcon />,
          size: 6,
          route: "/"
        },
        {
          label: "Ajuda",
          icon: <QuestionMarkOutlinedIcon />,
          size: 6,
          route: "/"
        }
      ]

    return (
      <>
        <Button onClick={() => setOpenDrawer(true)}>Abrir drawer</Button>
        <Container sx={{marginTop: 3}}>
            <Grid container spacing={2}>
              {menus.map((menu, index) => (
                <Grid key={index} size={menu.size} onClick={menu.function}>
                  <Link style={{ textDecoration: 'none'}} href={menu.route || '/'}>
                    <Paper elevation={0} sx={{textAlign: "center", padding: 2, cursor: 'pointer'}} >
                        <IconButton 
                          disableRipple={true} 
                          sx={{ 
                            borderRadius: 10, 
                            backgroundColor: '#D1E1D7', 
                            color: '#164336', 
                            padding: 2
                          }}>
                            {menu.icon}
                        </IconButton>
                        <Typography sx={{marginTop: 1}}>{menu.label}</Typography>
                    </Paper>
                  </Link>
                </Grid>
                ))}
            </Grid>
        </Container>

        {/* <ModalOpcoesCaixa show={openDrawer} /> */}
      </>
    )
}

