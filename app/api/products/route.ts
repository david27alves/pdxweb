import { NextResponse } from "next/server"

const products = [
    {
        sku: 82685,
        description: "EGEO DES COL BOMB BLACK C/CAR 90ml",
        description_reduce: "EGEO DES COL BOMB BL",
        price: 154.90,
        session: 5,
        ean: 7891033826858
    },
    {
        sku: 47949,
        description: "THE BLEND EDP 100ml V2",
        description_reduce: "THE BLEND EDP 100ml",
        price: 339.90,
        session: 5,
        ean: 7891033479498
    },
    {
        sku: 74438,
        description: "ARBO DES COL 100ml V4",
        description_reduce: "ARBO DES COL 100ml V",
        price: 169.90,
        session: 5,
        ean: 7891033744381
    },
    {
        sku: 25458,
        description: "FLORATTA DES COL BLUE 75ml",
        description_reduce: "FLORATTA DES COL BLU",
        price: 149.90,
        session: 5,
        ean: 7891033254583
    },
    {
        sku: 84387,
        description: "MALBEC DES COL V6 100ml",
        description_reduce: "MALBEC DES COL V6 10",
        price: 199.90,
        session: 5,
        ean: 7891033843879
    },
]

export async function GET() {
    return NextResponse.json({
        products
    })
}