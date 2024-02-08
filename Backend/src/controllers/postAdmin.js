const { createAdmin } = require("../services/adminService")
const { createHash } = require("../utils/bcrypt")

const postAdmin = async(req, res) => {
 try {
    const {name, email, password} = req.body
    const encriptar = createHash(password)
    const createAdmi = await createAdmin({
        name,
        email,
        password: encriptar
    })

    res.status(200).json(createAdmi)
 } catch (error) {
    res.status(500).send(error)
 }
}

module.exports = postAdmin