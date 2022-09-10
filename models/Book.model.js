import  mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    genreId: {
        ref: "Genre",
        type: mongoose.Schema.Types.ObjectId
    },

    user: [ 
        {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
]
})

const Book = mongoose.model('Book', bookSchema)

export{Book}