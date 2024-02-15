import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("connected to database");
})

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.send("API is working")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})