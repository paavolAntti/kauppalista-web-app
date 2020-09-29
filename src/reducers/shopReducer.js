import shopService from '../services/shops'

export const getUserShops = (user) => {
    return async dispatch => {
        try {
            const shops = await shopService.getAllUsersShops(user)
            console.log('very nice')
            dispatch({
                type: 'ALL',
                data: shops
            })
        } catch (exception) {
            console.log(`error getting shops, ${exception.message}`)
        }
    }
}

export const addItem = (id, item, amount) => {
    return async dispatch => {
        try {
            const shop = await shopService.addItem(id, item, amount)
            console.log('adding item', item)
            dispatch({
                type: 'ADD',
                data: shop
            })
        } catch (exception) {
            console.log('error adding shop', exception.message)
        }
    }
}
export const removeItem = (id, item) => {
    return async dispatch => {
        try {
            console.log(`deleting item ${item} from shop ${id}`)
            const shop = await shopService.deleteItem(id, item)
            dispatch({
                type: 'DELETE',
                data: shop
            })
        } catch (exception) {
            console.log('error deleting item: ', exception.message,)
        }
    }
}

const shopReducer = (state = null, action) => {
    switch (action.type) {
        case 'ALL':
            console.log('all: ', action.data)
            return action.data
        case 'ADD':
            console.log('after add: ', action.data)
            // poistetaan tilasta edellinen versio listasta kopioiden välttämisesksi
            state = state.filter(shop => shop.name !== action.data.name)
            return [...state, action.data]
        case 'DELETE':
            console.log('after delete: ', action.data)
            state = state.filter(shop => shop.name !== action.data.name)
            return [...state, action.data]
        default:
            return state
    }
}


export default shopReducer