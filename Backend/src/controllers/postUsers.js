const { createUser } = require("../services/userService");
// const { createHash } = require("../utils/bcrypt");


const postUsers = async(req, res) => {
    const {name, image} = req.body
    try {
    //  const hashPassword = createHash(password);
        const users = await createUser({
            name,
            email,
            image,
        //  password: hashPassword
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = postUsers