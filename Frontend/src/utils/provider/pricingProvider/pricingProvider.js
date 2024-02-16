import axios from "axios"

export const createPreference = async (project) => {
    console.log("datos provider:",project)
    try {
        const response = await axios.post("http://localhost:3001/preference", project)
        // const {id} = response.data;
        // return id;
        return response
    } catch (error) {
        console.log(error.message)        
    }
}