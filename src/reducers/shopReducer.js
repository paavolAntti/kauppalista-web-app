import shopService from '../services/shops'

export const getUserShops = (user) => {
    return async dispatch => {
        try {
            const shops = await shopService.getAllUsersShops(user)
            console.log('very nice')
            dispatch({
                type: 'USERSHOPS',
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
            console.log('adding item')
            dispatch({
                type: 'ADDITEM',
                data: shop
            })
        } catch (exception) {
            console.log('error adding shop', exception.message)
        }
    }
}

const shopReducer = (state = null, action) => {
    switch (action.type) {
        case 'USERSHOPS':
            console.log('shop data: ', action.data)
            return action.data
        case 'ADDITEM':
            console.log('additem data', action.data)
            // poistetaan tilasta edellinen versio listasta kopioiden välttämisesksi
            state = state.filter(shop => shop.name != action.data.name)
            return [...state, action.data]
        default:
            return state
    }
}


export default shopReducer