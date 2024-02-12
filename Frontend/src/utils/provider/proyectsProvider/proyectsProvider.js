import axios from "axios"


const proyectsProvider = {
    async getProyects () {
        try {
            const getProyects = await axios('http://localhost:3001/proyects')
            return getProyects.data
        } catch (error) {
            return error.message
        }
    },
    async postProyects (proyect) {
        try {
            console.log('PROVIDER', proyect)
            const newProyects = await axios.post(`http://localhost:3001/proyects`, proyect)
            return newProyects
        } catch (error) {
            return error.message
        }
    },
    async getProyectById (id) {
        try {
            const getProyectsId = await axios(`http://localhost:3001/proyects/${id}`)
            return getProyectsId.data
        } catch (error) {
            return error.message
        }
    },

    async uploadImg (imgFile) {
        try {
            const url = `https://api.imgbb.com/1/upload?expiration=600&key=9435bd9e0656491504055e47dbc66e6c&name=${imgFile.name}`
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

export default proyectsProvider