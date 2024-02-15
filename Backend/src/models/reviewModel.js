const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
    name: {
        type: String,
    },
    email: {
      type: String,
    },
      image: {
        type: String,
      },
      rating: {
        type: Number,
      },
      message: {
        type: String,
        required: true,
      },
      date: {
        type: String,
      },
});

const reviewModel = model("reviews", reviewSchema)

module.exports =  reviewModel;