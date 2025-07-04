"use client"
import { ReactNode, useState } from "react";
import { Avatar, Box, Button, Container, Drawer, Icon, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, OutlinedInput, styled, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import MoreIcon from '@mui/icons-material/MoreVert'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import CheckIcon from '@mui/icons-material/Check'
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined'
import ModalIdentificaFidelidade from "../components/modalIdentificaFidelidade"
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'
import AppBarComponent from "../components/appbar"
import DrawerComponent from "../components/drawercomponent"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


interface buttomProps {
    value: string | ReactNode
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number  
}

const ButtonCalc = styled(Button)(({theme}) => ({
    padding: theme.spacing(1.5, 0)
    
}))

const ButtonCheck = styled(Button)(({theme}) => ({
    padding: theme.spacing(8, 0)
    
}))

const ButtomShop = ({value}: buttomProps) => (
    <Grid size={3}>
        <ButtonCalc variant="outlined">{value}</ButtonCalc>
    </Grid>
)

const ButtonConfirm = ({value}: buttomProps) => (
    <Grid>
        <ButtonCheck variant="contained">{value}</ButtonCheck>
    </Grid>
)



const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other} = props
    return (
        <Box
            hidden={value !== index}
        >
            {value === index && <Box>{children}</Box>}
        </Box>
    )
}

const InputFidelidade = () => {
    return (
        <OutlinedInput 
                        // onClick={() => openModalFidelidade()}
            sx={{
                    backgroundColor: '#F8FAF9',
                    "& fieldset": { border: 'none' }
                }}
            fullWidth
            placeholder="Informe o CPF do cliente"
            startAdornment={
                <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                </InputAdornment>
            }

            endAdornment={
                <InputAdornment position="end">
                    <SearchOutlinedIcon />
                </InputAdornment>
            }
        />
    )
}

const TotalVenda = () => {

    return (
        <>
            <Box sx={{ marginTop: '20px', display: "flex" }}>
                <TextField  
                    sx={{ 
                        flex: 1, 
                        "& fieldset": { border: 'none' },
                        padding: -100
                    }} 
                    label="Total" 
                    defaultValue="R$ 0,00"
                    slotProps={{
                        input: {
                            style: {
                                fontWeight: 'bold',
                                fontSize: '32px'
                            }

                        }
                    }}
                    
                />
                <Button sx={{ backgroundColor: '#66987D', borderRadius: 1 }}  variant="contained" ><CheckIcon /></Button>
            </Box>

            <ListItem>
                <ListItemIcon sx={{ minWidth: '30px', color: 'green'}}>
                    <RequestQuoteOutlinedIcon  />
                </ListItemIcon>
                <ListItemText 
                    sx={{
                        fontSize: '20px', 
                        color: 'green'
                    }} 
                    primary="Sua economia foi de R$ 0,00"
                />
            </ListItem>
        </>
    )

}


const ListaProdutosVenda = () => {

    const chart = [
        {
            sku: 20842,
            descricao: "Malbec Des Col",
            preco: 199,
            qtd: 1
        },
        {
            sku: 17689,
            descricao: "Floratta",
            preco: 149,
            qtd: 5
        },
        {
            sku: 38413,
            descricao: "Zaad Santal",
            preco: 299,
            qtd: 1
        }
    ]

    const [produtos, setProdutos] = useState(chart)

    const addProduto = (produto: any) => {

        setProdutos([...produtos, produto])
        console.log(produtos)

    }

    const [quantity, setQuantity] = useState(1);


    const handleIncrement = () => {
        setQuantity(quantity + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };

    return (

        <>

        <Button onClick={() => addProduto({sku: 10985, descricao: "Egeot Bomb Black", preco: 129, qtd: 1})}>addProduto</Button>
                        
        {produtos.length > 0 ? (
                            
            produtos.map((produto, index) => (

                <Grid key={index} container alignItems="center" spacing={2} sx={{display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                
                    <Box display="flex" alignItems="center">

                        <Grid sx={{margin: 2}}>
                            <Box sx={{ width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon component={ImageOutlinedIcon} sx={{ fontSize: 50, color: '#999' }} />
                            </Box>
                        </Grid>

                    
                        <Grid>
                            <Typography variant="body2" color="text.secondary">{produto.sku}</Typography>
                            <Typography variant="subtitle1">{produto.descricao}</Typography>
                            <Typography sx={{marginTop: 1}}  variant="body2" color="text.secondary">
                            {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format((produto.preco))} / un
                            </Typography>
                        
                            <Box sx={{marginTop: 1}}>
                                <IconButton 
                                    sx={{ width: 32, height: 32, borderRadius: '5px',  border: '1px solid silver'}}
                                    size="small" 
                                    onClick={handleDecrement}
                                    >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <Typography variant="body2" component="span" sx={{ margin: '0 8px' }}>{produto.qtd}</Typography>
                                <IconButton 
                                    sx={{width: 32, height: 32, borderRadius: '5px', border: '1px solid silver',}}  
                                    size="small" 
                                    onClick={handleIncrement}
                                    >
                                <AddIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Box>

                    <Grid sx={{ height: 120, display: "flex", flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Box>
                            <IconButton >
                                <MoreHorizOutlinedIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{marginTop: 6}}>
                            <Typography variant="subtitle1">R$ {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format((produto.preco * produto.qtd))}</Typography>
                        </Box>
                    </Grid>
                </Grid>
        ))) : (
            <>
            <Box sx={{height: '45vh'}}></Box>
            <Typography sx={{ paddingLeft: 10, paddingRight: 10, paddingBottom: '10vh', textAlign: 'center', }}>Nenhum produto adicionado ainda. Que tal começarmos <u>identificando o cliente?</u></Typography>
            </>
        )}
        </>
    )

}

export default function VendaPage () {

    const [openKeyboardDrawer, setopenKeyboardDrawer] = useState<boolean>(false)
    const [openOptionsDrawer, setOpenOptionsDrawer] = useState<boolean>(true)

    const toggleKeyboardDrawer = (status: boolean) => {
        setopenKeyboardDrawer(status)
    }

    const toggleOptionsDrawer = (status: boolean) => {
        setOpenOptionsDrawer(status)
        //console.log(openOptionsDrawer)
    }

    const [value, setValue] = useState(0)
    const [showModalFidelidade, setShowModalFidelidade] = useState<boolean>(true)

    const openModalFidelidade = () => {
        setShowModalFidelidade(!showModalFidelidade)
        console.log(showModalFidelidade)
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    
    

    const opcoesCaixa = [
        {
            desc: "Transferir venda",
            icon: <PeopleAltOutlinedIcon />,
            
        },
        {
            desc: "Marcar tudo para presente",
            icon: <CardGiftcardOutlinedIcon />
        },
        {
            desc: "Cupons promocionais",
            icon: <LocalOfferOutlinedIcon />
        },
        {
            desc: "Desvincular da compra",
            icon: <LinkOffOutlinedIcon />
        },
        {
            desc: "Opções de caixa",
            icon: <ContentPasteOutlinedIcon />
        },
        {
            desc: "Cancelar pré-venda",
            icon: <DeleteOutlineOutlinedIcon />
        }

    ]
    
    return (
        
        <Box sx={{ backgroundColor: '#FFF' }}>

            <ModalIdentificaFidelidade show={showModalFidelidade} />

            <AppBarComponent title="Vender" elevation={0}>
                <Avatar sx={{ bgcolor: '#66987D' }}>c</Avatar>
                <IconButton onClick={() => setOpenOptionsDrawer(true)} edge="end" color="inherit">
                    <MoreIcon />
                </IconButton>
            </AppBarComponent>

            <Box>
                <Tabs
                    sx={{
                        display: 'flex',
                        borderBottom: '1px solid silver'
                    }}
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    {["Resumo", "Oportunidades", "Catálogo"].map((title, index) => (
                      
                        <Tab 
                            key={index} 
                            sx={{
                                textTransform: 'none',
                                flex: 1,
                                fontSize: 14
                            }}
                            label={title}
                            value={index} 
                        />
                    ))}
                </Tabs>

                <TabPanel value={value} index={0}>

                    <InputFidelidade />
                    <TotalVenda />

                    <Container>
                        <Grid container spacing={1}>
                            <Grid size={10}>
                                <Button sx={{color: '#6B6B6B', textTransform: 'none', borderColor: '#A7A7A7'}} fullWidth color="inherit" size="large" variant="outlined" startIcon={<FilterCenterFocusIcon />}>Abrir leitor de código</Button>
                            </Grid>
                            <Grid size={2}>
                                <Button onClick={() => toggleKeyboardDrawer(true)} sx={{color: '#6B6B6B', borderColor: '#A7A7A7'}} color="inherit" size="large" variant="outlined"><KeyboardIcon sx={{padding: '1px'}} /></Button>
                            </Grid>
                        </Grid>
                        
                        
                        <ListaProdutosVenda />
                        
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InputFidelidade />
                    <TotalVenda />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <InputFidelidade />
                    <TotalVenda />
                </TabPanel>
            </Box>
            
            <Drawer
                anchor="bottom"
                open={openKeyboardDrawer}
            >
                <Box>                        
                    <ArrowBackIcon sx={{p: 1.3, cursor: 'pointer'}} onClick={() => toggleKeyboardDrawer(false)} />
                    <Container
                        sx={{
                            height: 'calc(100vh )',
                            flexGrow: 1
                        }}
                    >
                        <Grid container spacing={1} sx={{ margin: '40px'}}>
                            <ButtomShop value={7} />
                            <ButtomShop value={8} />
                            <ButtomShop value={9} />
                            <ButtomShop value={<BackspaceOutlinedIcon />} />
                            <ButtomShop value={4} />
                            <ButtomShop value={5} />
                            <ButtomShop value={6} />
                            <ButtomShop value={<CloseIcon />} />
                            <ButtomShop value={1} />
                            <ButtomShop value={2} />
                            <ButtomShop value={3} />
                            <ButtomShop value={0} />
                            <ButtomShop value={"00"} />
                            <ButtomShop value={","} />
                            <Grid container>
                            <ButtonConfirm value={<CheckIcon />} />
                            </Grid>
                        </Grid>
                    
                        
                    </Container>
                </Box>
            </Drawer>

            <DrawerComponent
                title="Opções de venda"
                show={false}
            >
                 <List>
                {opcoesCaixa.map((opcao, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {opcao.icon}
                            </ListItemIcon>
                            <ListItemText primary={opcao.desc} />
                        </ListItemButton>
                    </ListItem>
                ))}
              </List>
            </DrawerComponent>
        </Box>
        
    )
}