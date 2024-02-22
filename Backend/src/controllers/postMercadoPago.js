// SDK de Mercado Pago
const { MercadoPagoConfig, Payment } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
  'TEST-8044533475948845-022019-af21cd73911e2e5a0a21744664b0fe4a-142403819'
});

const postMercadoPago = async(req, res) => {
try {
    console.log('REQ.BODY DE MP: ', req.body)

    const {data} = req.body

    const {id} = data

    console.log('DATA.ID: ', id)

    const payment = new Payment(client);

payment.get({
	id: id,
}).then(console.log).catch(console.log);
    
    console.log('PAYMENT: ', payment)

    res.status(200).send("ok")
} catch (error) {
    
}
}

module.exports = postMercadoPago