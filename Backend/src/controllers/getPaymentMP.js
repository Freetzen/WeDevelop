const {findPreferenceByIdPreference, PutPreference,} = require("../services/preferenceService");
const accessToken = "TEST-8044533475948845-022019-af21cd73911e2e5a0a21744664b0fe4a-142403819";
const axios = require("axios");
const {mailApprovedMP, mailRejectedMP} = require ("../utils/emailsMercadoPago");




const getPaymentMP = async (req, res) => {
  try {
    const { payment_id, preference_id } = req.query;

    const searchPayment = await findPreferenceByIdPreference(preference_id);
    
    const payAidi = await axios(
      `https://api.mercadopago.com/v1/payments/${payment_id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      );
      
      const pay = {
        payId: Number(payment_id),
        emailMp: payAidi.data.payer.email,
        date_approved: payAidi.data.date_approved,
        date_created: payAidi.data.date_created,
        status: payAidi.data.status,
        payment_method_id: payAidi.data.payment_method_id,
        payment_type_id: payAidi.data.payment_type_id,
      };
      
     
    const newOrder = await PutPreference(searchPayment._id, pay);

    if (payAidi.data.status === "approved") {
      mailApprovedMP(pay.emailMp, pay.payId, pay.date_approved, pay.status, pay.payment_type_id, pay.payment_method_id, newOrder.quote);
    }

    if (payAidi.data.status === "in_process") {
      mailRejectedMP(pay.emailMp, pay.payId, pay.date_approved, pay.status, pay.payment_type_id, pay.payment_method_id, newOrder.quote);
      
    }

    
    
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getPaymentMP;
