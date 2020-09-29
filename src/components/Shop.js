import React from 'react'
import Item from './Item'
import AddItem from './AddItem'

const Shop = ({ shop }) => {
    
    return (
        <div>
            <h2>{shop.name} </h2>
                <table>
                    <tbody>
                        {shop.list.map(l =>
                            <Item
                                key={l.item}
                                item={l.item}
                                amount={l.amount}
                                shopID={shop.id}
                            />
                        )}
                    </tbody>
                </table>
                <AddItem shopID={shop.id}/>
        </div>
    )
}

export default Shop