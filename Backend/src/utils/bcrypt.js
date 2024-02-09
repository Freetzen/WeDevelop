const bcrypt = require('bcrypt')
const { SALT } = process.env

const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(parseInt(SALT)))
}

const validatePassword = (password, storedPassword) => {
    return bcrypt.compareSync(password, storedPassword) //password: del usuario / storedPassword: De la BDD
}

module.exports = { createHash, validatePassword }