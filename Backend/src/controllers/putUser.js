const { updateUser } = require("../services/userService");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "contactwedevelop@gmail.com",
    pass: "xrux iwcy cykn hpjh",
  },
});

const putUser = async (req, res) => {
  try {
    const { _id, name, email, role, banned } = req.body;

    console.log('BANNED BACK', banned)

    const response = await updateUser(_id, {
      name,
      email,
      role,
      banned
    });

    if (banned === 'true') {
      const mailOptions = {
        from: "contactwedevelop@gmail.com",
        to: email,
        subject: `${name}, you are Banned from WeDevelop.`,
        html: `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Actualization of WeDevelop</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                      href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@600&display=swap"
                      rel="stylesheet" />
                    <style>
                      html {
                        height: 100%;
                      }
                      body {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        font-family: "Instrument Sans", sans-serif;
                      }
                      .content {
                        top: 0;
                        margin: 0 auto;
                        width: 90%;
                        height: 100vh;
                        background-color: #f2f4f8;
                      }
                      .logo {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        margin: 10px;
                        width: 150px;
                        margin-right: 50px;
                      }
                      h1 {
                        color: #22b5a0;
                        padding: 30px 5px;
                      }
                      h3 {
                        text-align: center;
                      }
                      section {
                        padding: 5px 50px;
                      }
                      p {
                        text-align: justify;
                        color: #666 !important;
                      }
                      hr {
                        border: 1px solid #eee;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="content">
                      <h1 style="text-align: center">
                        Hi ${name}. Due to WeDevelop's internal policies, we have made the decision to block your account indefinitely.
                        For more information, contact us!
                        <a src='https://wedevelop.vercel.app/contact'>Contact Us</a>
                        <hr />
                      </h1>
                
                      <section>
                        <h3>
                        Do not respond to this message. It is automatic from WeDevelop
                        </h3>
                        <br />
                      </section>
                      <a href="https://urianviera.com/">
                      </a>
                    </div>
                  </body>
                </html>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Correo electrónico enviado: " + info.response);
        }
      });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = putUser;
