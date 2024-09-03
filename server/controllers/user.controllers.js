import User from "../models/usermodel.js";

export const test = (req,res) => {
    res.json({
        message : "Api is working"
    })
} 