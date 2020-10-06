
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login'
import Shops from './components/Shops'
import NewShop from './components/NewShop'
import { setUser, logoutUser } from './reducers/loginReducer'
import { getUserShops } from './reducers/shopReducer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import storage from './utils/storage'
import styles from './styles/app.module.css'


const App = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const shops = useSelector(state => state.shops)

	const linkStyle = {
		padding: 5
	}
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

	const logout = () => {
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
		<div className={styles.flex_container}>
		<div className={styles.navigation}>
			<h4>{user.username} signed in <button onClick={logout}>logout</button></h4>
			<Router>
				<div>
					<Link style={linkStyle} to='/'>home</Link>
					<Link style={linkStyle} to='/shops'>shops</Link>
					<Link style={linkStyle} to='/new'>new list</Link>
				</div>
				<Switch>
					<Route path='/shops'>
						<Shops
							shops={shops}
						/>
					</Route>
					<Route path='/new'>
						<NewShop/>
					</Route>
				</Switch>
				<div>
					<i>Shopping list app, Antti Paavola 2020</i>
				</div>
			</Router>
		</div>
		</div>
	);
}

export default App;
