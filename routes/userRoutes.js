import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

router.get('/home', UserController.home)
router.get('/about', UserController.about)
router.get('/learn', UserController.learn)
router.get('/mars', UserController.mars)
router.get('/login', UserController.login)
router.get('/register', UserController.register)
router.post('/register', UserController.userRegistration)


export default router;