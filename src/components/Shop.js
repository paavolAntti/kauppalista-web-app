import React, { useState } from 'react'
import Item from './Item'
import AddItem from './AddItem'


const Shop = ({ shop }) => {
    const [show, setShow] = useState(false)
    
    const handleButton = () => {
        setShow(!show);
    }

    if (!show) {
        return <button onClick={handleButton}>{shop.name}</button>
    }
    return (
        <div>
            <button onClick={handleButton}>{shop.name}</button>
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