const postMercadoPago = async(req, res) => {
try {
    console.log(req.body)
    console.log(req.query)
    res.status(200).send("ok")
} catch (error) {
    
}
}

module.exports = postMercadoPago