"use client"
import { useEffect, useState } from "react"
import Header from "./components/header"
import MenuHome from "./components/menuhome"
import { isOpen } from "./components/db"
import ModalCaixaFechado from "./components/modalCaixaFechado"

export default function Home() {

  const [statusCaixa, setStatusCaixa] = useState<Boolean>(true)
  
  const getStatus = async() => {
    setStatusCaixa(await isOpen())
  }
  
  useEffect(() => {

    getStatus()  
    
  }, [])

  return (
      <>
        <Header />

          { !statusCaixa &&
            <>
              <ModalCaixaFechado />
            </>
          }          

        <MenuHome />
      </>
  );
}
