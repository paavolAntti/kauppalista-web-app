import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import shopReducer from './reducers/shopReducer'

const reducer = combineReducers({
    user: loginReducer,
    shops: shopReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store