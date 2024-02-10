const { findProyect } = require("../services/proyectService")

const getProyects = async(req, res) => {
try {
    const form = await findProyect()

    res.status(200).json(form)
} catch (error) {
    res.status(500).send(error)
}
}

module.exports = getProyects