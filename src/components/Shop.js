import React from 'react'
import Item from './Item'
import AddItem from './AddItem'
import { useParams, useHistory } from 'react-router-dom'
import { removeShop } from '../reducers/shopReducer'
import { useDispatch } from 'react-redux'
import '../styles/shopstyle.css'

const Shop = ({ shops }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const id = useParams().id
    if (!shops) {
        return (
            <div></div>
        )
    }
    const shop = shops.find(s => s.id === id)
    console.log('kauppa: ', shop)
    const deleteShop = (event) => {
        event.preventDefault()
        history.push('/shops')
        dispatch(removeShop(shop.id))
    }
    
    return (
            <div className='shop_container'>
                <div className='header'>
                    <h2>{shop.name}</h2>
                    <button onClick={deleteShop} className='remove_button'>remove</button>
                </div>
                        {shop.list.map(l =>
                            <Item
                                className='single_item'
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