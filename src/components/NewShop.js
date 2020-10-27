
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addShop } from '../reducers/shopReducer'
import { useHistory } from 'react-router-dom'
import '../styles/formstyle.css'

const NewShop = ( ) => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [shop, setShop] = useState('')
    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()
    const history = useHistory()

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
        history.push('/shops')
    }
    const showItems = () => items.map(i => 
            <div key={i.item}>
                {i.item}
            </div>
        )
    
 
    return (
        <div>
            <div className='userform'>
                <h2>new list</h2> 
                <form onSubmit={add}>
                    <div>
                            <input
                                type='text'
                                name='shop'
                                placeholder='shop'
                                value={shop}
                                onChange={({ target }) => setShop(target.value)}
                            />
                    </div>
                    <div>
                        <button type='submit'>add list</button>
                    </div>
                </form>
                <div>
                <form onSubmit={addItem}>
                    <div>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='item'
                                    value={name}
                                    onChange={ ({ target }) => setName(target.value )}
                                />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='amount'
                                    placeholder='amount'
                                    value={amount}
                                    onChange={ ({ target }) => setAmount(target.value )}
                                />
                            </div>
                    </div>
                    <div>
                        <button type='submit'>add item</button>
                    </div>
                </form>
                <div>
                    {showItems()}
                </div>
                    
            </div>
        </div>
        </div>
    )
}

export default NewShop