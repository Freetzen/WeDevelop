const axios = require('axios')

const postMercadoPago = async(req, res) => {
try {
    console.log('REQ.BODY DE MP: ', req.body)

    const {data} = req.body

    const {id} = data

    console.log('DATA.ID: ', id)

    const payment = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`)
    
    console.log('PAYMENT: ', payment)

    res.status(200).send("ok")
} catch (error) {
    
}
}

module.exports = postMercadoPago