const { createPreference } = require("../services/preferenceService")

const postPreference = async(req, res) => {
 try {
    const {title, price, quantity, info} = req.body
    const createdPreference = await createPreference({
        title,
        price,
        quantity,
        info
    })
    res.status(200).json(createdPreference)
 } catch (error) {
    res.status(500).send(error)
 }
}

module.exports = postPreference