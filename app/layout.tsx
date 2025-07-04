'use client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none'
        }, 
        contained: {
          backgroundColor: '#66987D', 

        },
        outlined: {
          color: '#5C5C5C',
          borderColor: '#CDCDCD'
        }
      }
    }, 
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#66987E',
            '&.MuiTabs-indicator': {
              backgroundColor: '#66987E'
            }
          }
        }
      }
    }
  }
})

const ThemeWrapper = ({children}: {children: ReactNode}) => {
  return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}


export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <>
    <html>
      <head>
        <title>PDx</title>
      </head>
      <body style={{backgroundColor: '#FAFAFA', margin: 0}}>
          {/* <Box sx={{ maxWidth: 480, margin: '0 auto', border: '1px solid silver' }}> */}
            <ThemeWrapper>
                  {children}
            </ThemeWrapper>
        {/* </Box> */}
      
      </body>
    </html>
    </>
  )

}