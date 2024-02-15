const reviewModel = require('../models/reviewModel');


const postReviews = async (req,res) => {
    try {
        const { name, image, email, rating, message, date } = req.body;
    
        // Crear una nueva instancia del modelo Review con los datos proporcionados
        const newReview = new reviewModel({
          name,
          email,
          image,
          rating,
          message,
          date
        });
    
        // Guardar la nueva review en la base de datos
        await newReview.save();
        res.status(201).json({ message: 'Review creada exitosamente' });
      } catch (error) {
        console.error('Error al crear la review:', error);
        res.status(500).json({ message: 'Error al crear la review' });
      }
}

module.exports = postReviews;