import Dexie, { EntityTable } from "dexie"

interface Shop {
    id: 1,
    open: boolean,
    startcash: number,
    cashier: string
}

const db = new Dexie('pdx') as Dexie & {
    shop: EntityTable<Shop>
}

db.version(1).stores({
    shop: 'id, open, valorfundo, operador'
})

db.on('populate', () => {
    db.shop.add({id: 1, open: false, startcash: 0, cashier: ''})
})

export const isOpen = async () => {
    const statusShop = await db.shop.where('id').equals(1).toArray()

    
    return statusShop[0].open
}

export const openShopDB = (id: any, startCash: number) => {
    db.shop.update(id, {open: true, startcash: startCash, cashier: 'cm'}).then((updated) => {
        (updated)? true : false
    })
}

export const closeShopDB = (id: any) => {
    db.shop.update(id, {open: false, startcash: 0, cashier: ''}).then((updated) => {
        (updated)? true : false
    })
}
