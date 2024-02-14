import axios from 'axios'

const userProvider = {

    async getUsers() {
        try {
            const getUser = await axios('http://localhost:3001/users')
            return getUser.data
        } catch (error) {
            return error.message
        }
    },
    async createUser(user) {
        try {
            const createUser = await axios.post('http://localhost:3001/login', user)
            return createUser.data
        } catch (error) {
            console.error(error)
            return error.message
        }
    },

    async getUserByEmail(email) {
        try {
            const getUserEmail = await axios(`http://localhost:3001/users/email?email=${email}`)
            return getUserEmail.data
        } catch (error) {
            return error.message
        }
    },

    async postUserAdmin(userAdmin) {
        try {
            const newUserAdmin = await axios.post(`http://localhost:3001/admin`, userAdmin)
            return newUserAdmin.data
        } catch (error) {
            return error.message
        }
    },

}

export default userProvider