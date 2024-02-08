const { createUser } = require("../services/userService");
const { createHash } = require("../utils/bcrypt");


const postUsers = async(req, res) => {
    const {name, email, password} = req.body
    try {
        const hashPassword = createHash(password);
        const users = await createUser({
            name,
            email,
            password: hashPassword
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = postUsers