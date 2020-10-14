import React from 'react'
import Item from './Item'
import AddItem from './AddItem'
import { useParams } from 'react-router-dom'


const Shop = ({ shops }) => {
    console.log('shops', shops)
    const id = useParams().id
    console.log('id', id)
    const shop = shops.find(s => s.id === id)
    console.log('kauppa: ', shop)
    
    
    return (
            <div>
                <h2>{shop.name}</h2>
                        {shop.list.map(l =>
                            <Item
                                key={l.item}
                                item={l.item}
                                amount={l.amount}
                                shopID={shop.id}
                            />
                        )}
                <AddItem shopID={shop.id}/>
            </div>
    )
}

export default Shop