const axios = require('axios')

const postMercadoPago = async(req, res) => {
try {
    console.log('REQ.BODY DE MP: ', req.body)

    const {data} = req.body

    const payment = await axios(`https://api.mercadopago.com/v1/payments/${data.id}`)
    
    console.log('PAYMENT: ', payment)

    res.status(200).send("ok")
} catch (error) {
    
}
}

module.exports = postMercadoPago