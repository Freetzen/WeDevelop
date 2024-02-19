const { updateUser } = require("../services/userService")

const putUser = async (req, res) => {
    try {
        const { _id, name, email, role, suspended, banned } = req.body
        const response = await updateUser(_id, {
            name,
            email,
            role,
            suspended,
            banned,
        })

        res.status(200).json(response)

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = putUser
