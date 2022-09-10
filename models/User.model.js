import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    isBlocked: {
        type: Boolean,
        default: false
    },

    borrow: [
         {
       ref: "Book",
       type: mongoose.Schema.Types.ObjectId
    }
    ]
})

const User = mongoose.model("User", userSchema)

export{User}