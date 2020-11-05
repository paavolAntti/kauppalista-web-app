import shopService from '../services/shops'
import userService from '../services/users'

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

export const addUserToList = (id, mail, shopid) => {
    return async dispatch => {
        try {
            console.log('in reducer: ', mail)
            console.log('shopid: ', shopid)
            const userid = await userService.userWithMail(id, mail)
            console.log('userid: ', userid)
            const shop = await shopService.addUserToList(shopid, userid)
            console.log('shop in reducer: ', shop)
            dispatch({
                type: 'SHARE',
                data: shop
            })
        } catch (exception) {
            console.log('error sharing', exception.message)            
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
            console.log('error adding item', exception.message)
        }
    }
}
export const addShop = (name, items) => {
    return async dispatch => {
        try {
            const shop = await shopService.addShop(name, items)
            dispatch({
                type: 'NEWSHOP',
                data: shop
            })
        } catch (exception) {
            console.log('error adding shop', exception.message)
        }
    }
}
export const removeShop = (id) => {
    return async dispatch => {
        try {
            await shopService.deleteShop(id)
            dispatch({
                type: 'DELETESHOP',
                data: id
            })
        } catch (exception) {
            console.log('error deleting shop', exception.message)
        }
    }
}
export const removeItem = (id, item) => {
    return async dispatch => {
        try {
            console.log(`deleting item ${item} from shop ${id}`)
            const shop = await shopService.deleteItem(id, item)
            dispatch({
                type: 'DELETEITEM',
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
        case 'DELETEITEM':
            console.log('after delete: ', action.data)
            state = state.filter(shop => shop.name !== action.data.name)
            return [...state, action.data]
        case 'NEWSHOP':
            console.log('afted new shop: ', action.data)
            return [...state, action.data]
        case 'DELETESHOP':
            console.log('deleting shop: ', action.data)
            return state.filter(s => s.id !== action.data)
        case 'SHARE':
            console.log('sharing shop', action.data)
            return state
        default:
            return state
    }
}


export default shopReducer