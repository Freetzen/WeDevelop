const { findProyect } = require("../services/projectService")

const getProjects = async(req, res) => {
try {
    const form = await findProyect()

    res.status(200).json(form)
} catch (error) {
    res.status(500).send({ error: error.message })
}
}

module.exports = getProjects