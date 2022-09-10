import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    review_name: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },

    book: {
        ref: "Book",
        type: mongoose.Schema.Types.ObjectId
    }
})

const Review = mongoose.model("Review", reviewSchema)

export{Review}