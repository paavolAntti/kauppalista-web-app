import loginService from '../services/login'

export const setUser = (user) => {
    return async dispatch => {
        dispatch({
            type: 'SETUSER',
            data: user
        })
    }
}

export const loginUser = (credentials) => {
    return async dispatch => {
        try {
            const user = await loginService.login(credentials)
            dispatch({
                type: 'LOGIN',
                data: user
            })
        } catch (exception) {
            console.log(`error logging in ${exception.message}`)
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('login data: ', action.data)
            window.localStorage.setItem('loggedUser', JSON.stringify(action.data))
            return action.data
        case 'LOGOUT':
            console.log('logout')
            window.localStorage.removeItem('loggedUser')
            return null
        case 'SETUSER':
            return action.data
        default:
            return state
    }
}

export default loginReducer