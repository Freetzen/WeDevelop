const { createForm } = require("../services/formService");

const postForm = async(req, res) => {
 try {

    const {name, images, description} = req.body
    try {
        const form = await createForm({
            name,
            images,
            description
        })
        res.status(200).json(form)
    } catch (error) {
        res.status(500).send(error)
    }
    
 } catch (error) {
    
 }
}

module.exports = postForm