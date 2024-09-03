import User from "../models/usermodel.js"
import bcryptjs from "bryptjs"
import {errorHandler} from "../utils/Error.js"

export const signUp = async(req,res,next) => {
    const {password , email , username} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({password : hashedPassword, email , username});

    try {
        await newUser.save();
        res.sta
    } catch (error) {
        
    }
}