import { createContext, useState } from 'react'

type ShopContextProps = {
    openShop: () => void
    closeShop: () => void
    getStatusShop: () => string | null
    shopIsOpen: () => boolean
}

export const ShopContext = createContext<ShopContextProps>({} as ShopContextProps)

export const ShopProvider = ({children}: {children: React.ReactNode}) => {

    const shop = {
        open: true,
        operator: "David",
        fund: 0
    }

    const openShop = () => {
        localStorage.setItem("@shop", JSON.stringify(shop))
    }

    const closeShop = () => {
        shopIsOpen() ? localStorage.removeItem("@shop") : console.log("Caixa já está fechado")
    }

    const getStatusShop = () => {
        const shop = localStorage.getItem("@shop")
        if (shop) return JSON.parse(shop)
    }

    const shopIsOpen = () => {
        const status = localStorage.getItem("@shop")
        return (status ? true : false) 
    }

    return (
        <ShopContext.Provider value={{ openShop, closeShop, getStatusShop, shopIsOpen}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider