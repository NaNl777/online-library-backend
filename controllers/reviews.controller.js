import { Review } from "../models/Review.model.js";

const reviewController = {
    addReviewByAdmin: async(req, res) => {
       try {
        const addReviewByAdmin = await Review.create({
          name: req.body.name,
          review_name: req.body.review_name,
          book: req.body.book
        });
        return res.json(addReviewByAdmin)
      } catch (error) {
        console.log(error.message)     
      }
  },

    deletedReviewByAdmin: async(req, res) => {
        try {
            const deletedReviewByAdmin = await Review.findByIdAndDelete(req.params.id)
            return res.json("Admin successfully deleted review");
        } catch (error) {
            console.log(error.message)
        }
    },

    getReviewByAdmin: async(req, res) => {
        try {
            const getReviewByAdmin = await Review.find({}).populate({path: "review_name", select: "name _id"}).populate({path: "book", select: "name author _id"});
            return res.json(getReviewByAdmin)
        } catch (error) {
            console.log(error.message)
        }
    },

    updateReviewIdByAdmin: async(req, res) => {
        try {
            const updateReviewIdByAdmin = await Review.findByIdAndUpdate(req.params.id, req.body)
            return res.json(updateReviewIdByAdmin)
        } catch (error) {
            console.log(error.message)
        }
    }

}

export{reviewController}