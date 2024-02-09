const { findForm } = require("../services/formService")

const getForms = async(req, res) => {
try {
    const form = await findForm()

    res.status(200).json(form)
} catch (error) {
    res.status(500).send(error)
}
}

module.exports = getForms