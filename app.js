import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import path, { dirname } from 'path';
import connectDB from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js'
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors());

connectDB(DATABASE_URL);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use("/", userRoutes)

app.set('views', path.resolve('./views'));

app.use(express.static('./public'));

app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`)
});

