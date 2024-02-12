import axios from "axios"


const projectsProvider = {
    async getProjects () {
        try {
            const getProjects = await axios.get('http://localhost:3001/projects')
            return getProjects.data
        } catch (error) {
            return error.message
        }
    },
    async postProjects (project) {
        try {
            const newProjects = await axios.post(`http://localhost:3001/projects`, project)
            return newProjects
        } catch (error) {
            return error.message
        }
    },
    async getProjectById (id) {
        try {
            const getProyectsId = await axios.get(`http://localhost:3001/projects/${id}`)
            return getProyectsId.data
        } catch (error) {
            return error.message
        }
    },

    async uploadImg (imgFile) {
        try {
            const url = `https://api.imgbb.com/1/upload?key=9435bd9e0656491504055e47dbc66e6c&name=${imgFile.name}`
            const data = new FormData();
            data.append("image", imgFile);
            const upload = await fetch(url, {
                method: "POST",
                body: data
              })
              const responseData = await upload.json()
              console.log(responseData)
              return responseData
        } catch (error) {
            return error.message
        }
    }


}

export default projectsProvider