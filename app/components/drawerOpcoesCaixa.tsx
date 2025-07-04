import { Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import DrawerComponent from "./drawercomponent"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import ReceiptIcon from '@mui/icons-material/Receipt'

interface props {
    isOpen: boolean
    onClose: () => void
}

const ModalOpcoesCaixa = ({isOpen, onClose}: props) => {

    const opcoesCaixa = [
        {
            desc: "Abertura de caixa",
            icon: <AddShoppingCartOutlinedIcon />,
            close: true
        },
        {
            desc: "Fechamento de caixa",
            icon: <ProductionQuantityLimitsOutlinedIcon />
        },
        {
            desc: "Flash de caixa",
            icon: <ReceiptLongIcon />
        },
        {
            desc: "Sangria",
            icon: <ReceiptIcon />
        },
        {
            desc: "Reforço de caixa",
            icon: <ReceiptIcon />
        }

    ]

    return (
        
            <DrawerComponent title="Opções de caixa" show={false} >
              <List>
                {opcoesCaixa.map((opcao, index) => (
                    <ListItem key={index} disablePadding >
                            <ListItemButton disabled>
                            <ListItemIcon>
                                {opcao.icon}
                            </ListItemIcon>
                            <ListItemText primary={opcao.desc} />
                            {opcao.close && <Chip label="Fechado" size="small" color="error" />}
                        </ListItemButton>
                    </ListItem>
                ))}
              </List>
            </DrawerComponent>
    )

}

export default ModalOpcoesCaixa