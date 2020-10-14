import React from 'react'
import { removeItem } from '../reducers/shopReducer'
import { useDispatch } from 'react-redux'

const Item = ( { shopID, item, amount } ) => {
    const dispatch = useDispatch()

    const deleteItem = (event) => {
        event.preventDefault()
        console.log('deleting: ', item)
        dispatch(removeItem(shopID, item))
    }
    return (
        <div>
            <button onClick={deleteItem}>-</button> {item} {amount}
        </div>
    )
     
}

export default Item
    