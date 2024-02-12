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
            const postProyects = await axios(`http://localhost:3001/proyects`, proyect)
            return postProyects.data
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


}

export default proyectsProvider