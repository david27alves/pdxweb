import { NextResponse } from "next/server"

const products = [
    {
        cpf: "05802158301",
        nome: "FRANCISCO DAVID ALVES MOREIRA",
        nascimento: "27/02/1994",
        pontos: 999
    }
]

export async function GET() {
    return NextResponse.json({
        products
    })
}