// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
  'TEST-8044533475948845-022019-af21cd73911e2e5a0a21744664b0fe4a-142403819'
});
const postPreference = async (req, res) => {
  try {
    const { title, price, quantity, quote  } = req.body;

    console.log(req.body)

  /*   const shop = {
      title,
      price,
      quantity,
      info: quote
    }  */

    const body = {
      items: [
        {
          title,
          unit_price: Number(price),
          quantity: Number(quantity),
          email: 'federuizgei@gmail.com',
          currency_id: "ARS"
        },
      ],
      back_urls: {
        success: "https://wedevelop.vercel.app/",
        failure: "https://wedevelop.vercel.app/contact",
        pending: "https://wedevelop.vercel.app/projects",
      },
      auto_return: "approved",
      additional_info: {
         email: 'federuizgei@gmail.com'
       }
    };

    const preference = new Preference(client);

    try {
      const result = await preference.create({ body });
      res.status(200).json({ id: result.id });
    } catch (error) {
      console.log(error.message)
    }


  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postPreference;
