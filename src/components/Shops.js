import React from 'react'
import { Link } from 'react-router-dom'

const Shops = ({ shops, user }) => {
    const linkStyle = {
		padding: 5
	}
    if (!shops) {
        return (
            <div>
                
            </div>
        )
    }
    return (
        <div>
            <h2>all shops</h2>
            {shops.map(shop => 
                <div key={shop.id}>
                    <Link style={linkStyle} key={shop.id} to={`/shops/${shop.id}`}>{shop.name}</Link>
                </div>)}
        </div>
    )
}

export default Shops