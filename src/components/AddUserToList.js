import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserToList } from '../reducers/shopReducer'

const AddUserToList = ({userID, shopID }) => {
    const [mail, setMail] = useState('')
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()

    const add = (event) => {
        event.preventDefault()
        console.log(`adding ${mail} to list`)
        dispatch(addUserToList(userID, mail, shopID))
        setMail('')
        flip()
    }
    const flip = () => {
        setVisible(!visible);
    }
    const hide = { display: visible ? 'none' : ''}
    const show = { display: visible ? '' : 'none' }

    return (
        <div className='userform'>
            <div style={ hide }>
            <button onClick={flip}>share list with user</button>
            </div>
            <div style= { show }>
                <h2>find user</h2> 
                <form onSubmit={ add }>
                    <div>
                            <input
                                type='text'
                                name='email'
                                placeholder='email'
                                value={mail}
                                onChange={({ target }) => setMail(target.value)}
                            />
                    </div>
                    <div>
                        <button type='submit'>add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUserToList