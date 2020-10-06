
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addShop } from '../reducers/shopReducer'

const NewShop = ( ) => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [shop, setShop] = useState('')
    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()

    const addItem = (event) => {
        event.preventDefault()
        setItems([...items, {item: name, amount: amount}])
        setName('')
        setAmount(1)
    }
    const add = (event) => {
        event.preventDefault()
        console.log(`adding ${shop} to database`)
        dispatch(addShop(shop, items))
        setName('')
        setItems([])
    }
    const showItems = () => items.map(i => 
            <div key={i.item}>
                {i.item}
            </div>
        )
    
 
    return (
        <div>
            <div>
                <h2>new list</h2> 
                <form onSubmit={add}>
                    <div>
                        <label>
                            shop
                            <input
                                type='text'
                                name='shop'
                                value={shop}
                                onChange={({ target }) => setShop(target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type='submit'>add list</button>
                    </div>
                </form>
                <div>
                <form onSubmit={addItem}>
                    <div>
                        <label>
                            <div>
                                add item
                                <input
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={ ({ target }) => setName(target.value )}
                                />
                            </div>
                            <div>
                                amount
                                <input
                                    type='number'
                                    name='amount'
                                    value={amount}
                                    onChange={ ({ target }) => setAmount(target.value )}
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <button type='submit'>add item</button>
                    </div>
                </form>
                <ul>
                    {showItems()}
                </ul>
                    
            </div>
        </div>
        </div>
    )
}

export default NewShop