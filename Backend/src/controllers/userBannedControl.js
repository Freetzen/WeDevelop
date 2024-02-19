const {bannedUser} = require('../services/userService')
const {unbannedUser} = require('../services/userService')


const bannedUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const updatedUser = await userService.bannedUser(userId);
        res.status(200).json({ message: 'User successfully banned', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const unbannedUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const updatedUser = await userService.unbannedUser(userId);
        res.status(200).json({ message: 'User successfully unbanned', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { bannedUser, unbannedUser }