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
const addUserToList = async (shopid, userid) => {
    const shop = await axios.post(`${shopUrl}/${shopid}/users`, {userid: userid})
    console.log('tässä kauppa', shop)
    return shop.data
}
const addShop = async (name, items) => {
    const shopToAdd = {
        name: name,
        list: items
    }
    const shop = await axios.post(shopUrl, shopToAdd, getConfig())
    console.log("tässä kauppa:" ,shop)
    return shop.data
}
const addItem = async (id, item, amount) => {
    const itemToAdd = {
        item: item,
        amount: amount
    }
    const shop = await axios.post(`${shopUrl}/${id}/list`, itemToAdd)
    return shop.data
}
const deleteShop = async (id) => {
    await axios.delete(`${shopUrl}/${id}`, getConfig())
}
const deleteItem = async (id, item) => {
    console.log('eghaengaegn')
    const shop = await axios.put(`${shopUrl}/${id}/list`, {item: item})
    console.log('DELETE IN SERVICE: ', shop.data)
    return shop.data
}


export default { getAllUsersShops, addItem, deleteItem, addShop, deleteShop, addUserToList, getConfig }