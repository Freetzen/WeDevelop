const axios = require('axios')

const getMusic = async (req, res) => {
const {title} = req.params
const url = `https://www.cheapshark.com/api/1.0/deals?title=${title}`
try {
    const response = await axios(url);
    res.status(200).json(response.data)
} catch (error) {
    console.error(error);
}
}

module.exports = getMusic