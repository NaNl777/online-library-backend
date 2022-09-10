import { Genre } from "../models/Genre.model.js";

const genreController = {
  addGenreByAdmin: async (req, res) => {
    try {
      const addGenreByAdmin = await Genre.create({
        name: req.body.name,
        description: req.body.description,
      });
      return res.json(addGenreByAdmin)
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteGenreIdByAdmin: async(req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id)
      return res.json(`Admin complete deleted ${req.params.id}`)
    } catch (error) {
     console.log(error.message) 
    }
},
  
   getGenreByAdmin: async(req, res) => {
    try {
       const getGenreByAdmin = await Genre.find({});
       return res.json(getGenreByAdmin)
    } catch (error) {
        console.log(error.message)
    }
   }
}

export{genreController}