import React from 'react'
import { removeItem, addItem } from '../reducers/shopReducer'
import { useDispatch } from 'react-redux'
import '../styles/shopstyle.css'

const Item = ( { shopID, item, amount } ) => {
    const dispatch = useDispatch()

    const decrease = (event) => {
        event.preventDefault()
        console.log('deleting: ', item)
        dispatch(removeItem(shopID, item))
    }
    const increase = (event) => {
        event.preventDefault()
        console.log('increasing: ', item)
        dispatch(addItem(shopID, item, 1))
    }
    return (
        <div className='single_item'>
            <button onClick={decrease} className='remove_button'>-</button>
            <div className='item'>{item}</div>
            <button onClick={increase} className='add_button'>{amount}</button>
        </div>
    )
     
}

export default Item
    