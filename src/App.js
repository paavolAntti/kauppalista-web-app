
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login'
import Shops from './components/Shops'
import NewShop from './components/NewShop'
import Shop from './components/Shop'
import NewUser from './components/NewUser'
import { setUser, logoutUser } from './reducers/loginReducer'
import { getUserShops } from './reducers/shopReducer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/app.css'
import { useHistory } from 'react-router-dom'


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

	const logout = (event) => {
		event.preventDefault()
		dispatch(logoutUser())
	}
	if (!user) {
		return (
			<div className='flex_container'>
			<div className='content_container'>
				<Router>
					<div className='navigation'>
						<Link style={linkStyle} to='/login'>login</Link>
						<Link style={linkStyle} to='/newuser'>new user</Link>
					</div>
					<Switch>
						<Route path='/login'>
							<Login/>
						</Route>
						<Route path='/newuser'>
							<NewUser/>
						</Route>
					</Switch>
				</Router>
			</div>
			</div>
		)
	}
	return (
		<div className='flex_container'>
		<div className='content_container'>
			<h4>{user.username} signed in <button onClick={logout}>logout</button></h4>
			<Router>
				<div>
					<Link style={linkStyle} to='/'>home</Link>
					<Link style={linkStyle} to='/shops'>shops</Link>
					<Link style={linkStyle} to='/new'>new list</Link>
				</div>
				<Switch>
					<Route path='/shops/:id'>
						<Shop 
							shops={shops} 
							user={user}
						/>
					</Route>
					<Route path='/shops'>
						<Shops
							shops={shops}
							user={user}
						/>
					</Route>
					<Route path='/new'>
						<NewShop/>
					</Route>
				</Switch>
			</Router>
			<div className='footer'>
				<i>Shopping list app, Antti Paavola 2020</i>
			</div>
		</div>
		</div>
		
	);
}

export default App;
