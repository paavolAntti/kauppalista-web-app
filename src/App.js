
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login'
import Shops from './components/Shops'
import { setUser, logoutUser } from './reducers/loginReducer'
import { getUserShops } from './reducers/shopReducer'


const App = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const shops = useSelector(state => state.shops)

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedUser')
		if (loggedUser) {
			const userToLog = JSON.parse(loggedUser)
			dispatch(setUser(userToLog))
		}
	}, [dispatch])

	useEffect(() => {
		if (user) {
			dispatch(getUserShops(user))
		}
	}, [dispatch, user])
	const logout = () => {
		dispatch(logoutUser())
	}
	if (!user) {
		return (
			<div>
				<Login/>
			</div>
		)
	}
	return (
		<div>
			<h1>{user.username}</h1>
			<Shops
				shops={shops}
			/>
			<div>
				<button onClick={logout}>logout</button>
			</div> 		
		</div>
	);
}

export default App;
