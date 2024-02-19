const { createUser } = require("../services/userService");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contactwedevelop@gmail.com",
        pass: "xrux iwcy cykn hpjh",
    },
});


const postUsers = async(req, res) => {
    const {name, email, image} = req.body
    try {
    
        const users = await createUser({
            name,
            email,
            image
        });

        const mailOptions = {
            from: "contactwedevelop@gmail.com",
            to: email,
            subject: `${name}, welcome to WeDevelop`,
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Notification</title>
                <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@600&display=swap" rel="stylesheet" />
                <style>
                    html, body {
                        height: 100%;
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #f0f0f0;
                    }
                    .content {
                        font-family: "Instrument Sans", sans-serif;
                        text-align: center;
                        width: 80%;
                        max-width: 600px;
                        background: linear-gradient(150deg, #b311d3, #1a38df);
                        box-shadow: 5px 7px 9px rgb(18, 1, 38);
                        border-radius: 10px;
                        padding: 30px;
                        color: #d2b5e9;
                    }
                    h1, h3, h2, p {
                        margin: 10px 0;
                    }
                    h3, h2{
                      color: #2ff145;
                    }
                    hr {
                        border: 1px solid #5b0668;
                    }
                </style>
            </head>
            <body>
                <div class="content">
                    <h1>
                        Hi ${name}, welcome to WeDevelop!!
                        <hr />
                    </h1>
                    <h3>
                        Your user was created correctly. ✔💻
                    </h3>
                    <p>
                        We are excited to have you here and hope you enjoy our content.
                    </p>
                    <h3>Thanks for joining us!!</h3>    
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

        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = postUsers