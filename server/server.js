import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';
import jobRoutes from './routes/api/jobs.js'
import userRoutes from './routes/api/users.js'
import checkToken from './config/checkToken.js';
import { create,login } from './controllers/api/users.js';
const app = express();

dotenv.config();
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://baya:2002311@cluster0.v8y7nya.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 3001;


app.use(logger('dev'));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT,() => console.log('Connection done and running on PORT :'+ PORT))).catch((err) => console.log(err.message));

mongoose.set('strictQuery', false);

