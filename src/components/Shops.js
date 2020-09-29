import React from 'react'
import Shop from './Shop'

const Shops = ({ shops }) => {
    if (!shops) {
        return (
            <div>
                
            </div>
        )
    }
    
    const listShops = () => shops.map(shop =>
        <Shop
            key={shop.name}
            shop={shop}
        />
        )
    return (
        <div>
            {listShops()}
        </div>
    )
}

export default Shops