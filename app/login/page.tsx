import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, TextField, Button, FormControl, InputAdornment, styled } from "@mui/material";
import Image from 'next/image';

export default function Home() {

  return (
      <>
      <Box
        display='flex'
        justifyContent='center'
      >
        <Image 
          src='/grupoboticario.svg'
          width={231}
          height={51}
          alt='Grupo Boticário'
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <TextField 
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              },
            }}
            placeholder="Usuário"
            variant="outlined" 
            />
        </FormControl>
        <FormControl fullWidth>
          <TextField 
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
            placeholder="Senha"
            variant="outlined" 
            />
        </FormControl>
        <Button 
          sx={{textTransform: 'none', backgroundColor: '#67977f'}} 
          fullWidth 
          variant="contained"
          disableElevation
          size='large'
          >
            Entrar
        </Button>
      </Box>
      </>
  );
}
