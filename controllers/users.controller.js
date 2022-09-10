import { User } from "../models/User.model.js";
import { Book } from "../models/Book.model.js";

const userController = {
  takeBookForUser: async (req, res) => {
    const user = await User.findById(req.params.id);
    const book = await Book.findById(req.body.book);

    if (user.isBlocked) {
      return res.json("Вы заблокированы!");
    }

    if (user.borrow.length >= 3) {
      return res.json("нельзя арендовать больше 3-х книг одновременно!");
    }

    if (book.user.legnth !== 0) {
      return res.json("эта книга уже арендована другим пользователем")
    }

    try {
       await user.updateOne({$addToSet: {borrow: req.body.book }}) 
       await book.updateOne({$addToSet: {user: req.params.id}})
       return res.json(`Юзер ${req.params.id} арендовал книгу ${req.body.book}`)
    } catch (error) {
        console.log(error.message)
    }
  },

  returnBookForUser: async(req, res) => {
    const user = await User.findById(req.params.id);
    const book = await Book.findById(req.body.book);

    try {
        await user.updateOne({$pull: {borrow: req.body.book}})
        await user.updateOne({$pull: {user: req.params.id}})
        return res.json(`Юзер ${req.params.id}, вернул книгу ${req.body.book}`)
    } catch (error) {
        console.log(error.message)
    }
  },

  takeBookAndBlockUser: async(req, res) => {
    const user = await User.findById(req.params.id)
    const book = await Book.findById(req.body.book)

    try {
        await user.updateOne({$pull: {borrow: req.body.book}})
        await book.updateOne({$pull: {user: req.params.id}})
        return res.json(`Админ взял у юзера ${req.params.id} эту книгу ${req.body.book}, и дал БАН`)
    } catch (error) {
        console.log(error.message)
    }
  },


  //Admins fucntions interface

  addUserByAdmin: async(req, res) => {
   try {
    const addUserByAdmin = await User.create({
        name: req.body.name,
        surname: req.body.surname
    });
    return res.json(addUserByAdmin)     
    } catch (error) {
        console.log(error.message)
    }
},
   deleteUserByAdmin: async(req, res) => {
    try {
        const deleteUserByAdmin = await User.findByIdAndDelete(req.params.id) 
        return res.json(deleteUserByAdmin)
    } catch (error) {
        console.log(error.message)
    }
},
    
    getUserByAdmin: async(req, res) => {
        try {
            const getUserByAdmin = await User.find({}).populate({path: "borrow", select: "name author _id"})
            return res.json(getUserByAdmin)
        } catch (error) {
            console.log(error.message)
        }
    }

}

export{userController}
