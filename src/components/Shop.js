import React from 'react'
import AddItem from './AddItem'

const Shop = ({ shop }) => {
    if (!shop) return (<div>

    </div>)
    
    return (
    <div>
        <h2>{shop.name} </h2>
            <table>
                <tbody>
                    {shop.list.map(l =>
                        <tr key={l.item}>
                            <td>{l.item}</td>
                            <td>{l.amount}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <AddItem shopID={shop.id}/>
    </div>
    )
}

export default Shop