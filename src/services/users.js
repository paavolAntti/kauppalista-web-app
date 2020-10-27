import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'

const newUser = async (username, mail, password) => {
    const newUser = {
        username: username,
        mail: mail,
        password: password
    }
    const user = await axios.post(baseUrl, newUser)
    return user.data.mail
    
}

export default { newUser }