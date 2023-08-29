import UserModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController{
    static home = (req, res) => {
        res.render("index")
    }
    static about = (req, res) => {
        res.render("about")
    }
    static learn = (req, res) => {
        res.render("learn")
    }
    static mars = (req, res) => {
        res.render("mars")
    }
    static register = (req, res) => {
        res.render("registration")
    }
    static login = (req, res) => {
        res.render("login")
    }
    static userRegistration = async (req, res) => {
        const {name, email, password} = req.body
        const user = await UserModel.findOne({email:email});
        if(user){
            res.send({"status":"failed", "message":"Email already exists"})
        }
        else{
            if(name && email && password){
                try {
                    const doc = new UserModel({
                        name: name,
                        email: email,
                        password: password
                    })
                    await doc.save();
                    // res.send({"status":"Success", "message":"register successfully"})
                    res.redirect('/api/user/login');
                } catch (error) {
                    console.log(error)
                    res.send({"status":"failed", "message":"unable to register"})   
                }
            }
            else{
            res.send({"status":"failed", "message":"All fields are required"})
            }
        }
    }

}
export default UserController