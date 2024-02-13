const { findProjectByCategory } = require("../services/projectService")

const getProjectByCategory = async(req, res) => {
    try {
        const {category} = req.query
        const proyectsCategory = await findProjectByCategory(category)
        res.status(200).json(proyectsCategory)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports =  getProjectByCategory