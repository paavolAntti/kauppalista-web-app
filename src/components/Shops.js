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
        <div key={shop.name}>
            <Shop
            key={shop.name}
            shop={shop}
        />
        </div>
        
        )
    return (
        <div>
            <h2>your</h2>
            {listShops()}
        </div>
    )
}

export default Shops