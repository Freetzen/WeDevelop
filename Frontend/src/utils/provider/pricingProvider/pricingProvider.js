import axios from "axios"

const pricingProvider = {
    async createPreference(project) {
        try {
            const response = await axios.post('/createpreference', project)
            const {id} = response.data
            return id
        }catch (error) {
            console.log(error.message)
        }
    }


}



export default pricingProvider