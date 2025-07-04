'use client'
import { useState } from 'react'
import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

export default function Header() {

    const [saldo, setSaldo] = useState(false)

    const hiddenSaldo = () => {
        setSaldo(!saldo)
    }

    return (
        <>
          <Box sx={{backgroundColor: '#66987D', borderRadius: '0 0 4% 4%', height: 180}}></Box>
          
          <Container>
            <Box sx={{marginTop: -21}}>                
                <Grid container sx={{ marginBottom: 2}} justifyContent='space-between'>
                    <Grid>
                      <Box sx={{color: "#fff"}}>
                          <Typography fontSize={30} fontWeight={300}>Bom dia,</Typography><Typography fontSize={30} fontWeight={500}> cm</Typography>
                      </Box>
                    </Grid>
                    <Grid>
                      <Box display="flex">
                          <Avatar onClick={hiddenSaldo} sx={{ borderRadius: 5, backgroundColor: '#FFF', color: '#164336', marginRight: 1 }}>
                              { !saldo &&
                              <VisibilityOffIcon />
                              }
                              {saldo &&
                              <VisibilityIcon />
                              }
                          </Avatar>
                          <Avatar sx={{backgroundColor: '#FFF', color: '#164336'}}>c</Avatar>
                      </Box>
                    </Grid>
                </Grid>

                <Paper elevation={3} sx={{textAlign: 'center', padding: 3}}>
                  <Grid container spacing={2}>
                    <Grid size={4}>
                      { !saldo &&
                      <Typography color="#65977D" fontWeight={700} fontSize={25}>R$ 0,00</Typography>
                      }
                      { saldo &&
                          <Typography fontWeight={700} fontSize={25}>--</Typography>
                      }
                      <Typography fontSize={15}>Realizado</Typography>
                    </Grid>
                    <Grid size={4} sx={{borderLeft: '1px solid silver', borderRight: '1px solid silver'}}>
                    <Typography fontWeight={700} fontSize={25}>--</Typography>
                      <Typography fontSize={15}>Atingido</Typography>
                    </Grid>
                    <Grid size={4}>
                    <Typography fontWeight={700} fontSize={25}>--</Typography>
                      <Typography fontSize={15}>Meta</Typography>
                    </Grid>
                  </Grid>
                </Paper>
            </Box>
          </Container>
        </>
    )
}