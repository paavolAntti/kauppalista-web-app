import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers/shopReducer'
import '../styles/shopstyle.css'

const AddItem = ( { shopID }) => {
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(1)
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()

    const add = (event) => {
        event.preventDefault()
        console.log(`adding ${item} to database`)
        dispatch(addItem(shopID, item, amount))
        setItem('')
        setAmount(1)
        flip()
    }
    const flip = () => {
        setVisible(!visible);
    }
    const hide = { display: visible ? 'none' : ''}
    const show = { display: visible ? '' : 'none' }

    return (
        <div className='form_container'>
            <div style={ hide }>
            <button onClick={flip}>new item</button>
            </div>
            <div style= { show }>
                <h2>new item</h2> 
                <form onSubmit={ add }>
                    <div>
                        <label>
                            name
                            <input
                                type='text'
                                name='item'
                                value={item}
                                onChange={({ target }) => setItem(target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            amount
                            <input
                                type='number'
                                name='amount'
                                value={amount}
                                onChange={ ({ target }) => setAmount(target.value )}
                            />
                        </label>
                    </div>
                    <div>
                        <button type='submit'>add</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default AddItem