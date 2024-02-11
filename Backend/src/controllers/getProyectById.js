const { findProyectById } = require("../services/proyectService")

const getProyectById = async(req, res) => {
  try {
    const {id} = req.params
    const proyectId = await findProyectById(id)
    res.status(200).json(proyectId)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = getProyectById