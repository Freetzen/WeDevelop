import axios from "axios"

export const createPreference = async (project) => {
    try {
        console.log(project)
        const response = await axios.post("/create_preference", project)
        console.log('ASDFASDG', response)
        const {id} = response.data;
        return id;
    } catch (error) {
        console.log(error.message)        
    }
}