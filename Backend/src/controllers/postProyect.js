const { createProyect } = require("../services/proyectService");

const postProyect = async(req, res) => {
  try {
    const { name, images, description } = req.body;
    const form = await createProyect({
      name,
      images,
      description,
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = postProyect