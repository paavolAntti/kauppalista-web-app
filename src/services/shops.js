import axios from 'axios'
import storage from '../utils/storage'
const baseUrl = 'http://localhost:3001/api/users'
const shopUrl = 'http://localhost:3001/api/shops'


const getConfig = () => {
    return {
        headers: { Authorization: `bearer ${storage.loadUser().token}`}
    }
}
// Etsitään kaikki kirjautuneen käyttäjän kaupat
const getAllUsersShops = async (user) => {
    const userToFind = await axios.get(`${baseUrl}/${user.id}`)

    return userToFind.data.shops
   
}

const addItem = async (id, item, amount) => {
    const itemToAdd = {
        item: item,
        amount: amount
    }
    const shop = await axios.post(`${shopUrl}/${id}/list`, itemToAdd)
    console.log('SHOP IN SERVICE: ', shop)
    return shop.data
}


export default { getAllUsersShops, addItem }