const { findProjectByName } = require("../services/projectService")

const getProjectByName = async (req, res) => {
    try {
        const { name } = req.query
        console.log('Este es el controller en back', name);
        const projectName = await findProjectByName(name)
        res.status(200).json(projectName)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getProjectByName