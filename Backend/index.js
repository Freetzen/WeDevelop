const { default: mongoose } = require("mongoose");
const server = require("./src/server");
require("dotenv").config();
const { URLMONGODB, PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server listening on port https://wedevelop-37n5bb0vo-freetzen.vercel.app`);
})

//Mongo DB
const connectionMongoose = async () => {
  await mongoose.connect(URLMONGODB)
    .catch((err) => console.log(err));
  console.log(`Database connected`)
}

connectionMongoose()