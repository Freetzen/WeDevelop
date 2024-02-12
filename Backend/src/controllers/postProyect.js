const { createProyect } = require("../services/proyectService");

const postProyect = async(req, res) => {
  try {
    const { name, images, description, category } = req.body;
    const form = await createProyect({
      name,
      images,
      description,
      category
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
module.exports = postProyect