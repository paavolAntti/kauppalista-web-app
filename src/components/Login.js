import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'
import styles from '../styles/login.module.css'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const login = (event) => {
        event.preventDefault()
        console.log(`logging in with ${username} and ${password}`)
        dispatch(loginUser({ username, password }))
        
    }

    return (
        <div className={styles.flex_container}>
        <div className={styles.login}>
            <h2>login</h2>
            <form onSubmit={login}>
                <div>
                    <label>
                        username
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        /> 
                    </label>
                </div>
                <div>
                    <label>
                        password
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type='submit'>login</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login