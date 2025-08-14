import express from "express";
import cors from "cors";
import notesRouter from "./Routes/notes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ratelimit from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend URL
}));

app.use(express.json());
app.use(ratelimit);


app.get('/', (req, res) => { 
  res.status(200).send('Welcome to the Notes API');
});

app.use('/notes', notesRouter);
connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
});