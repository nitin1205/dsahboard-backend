import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import { connectDb } from './mongodb/connect.js';
import propertyRouter from './routes/property.routes.js';
import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

const startServer = () => {
    try {
        connectDb(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server strted on port 8080'));
    } catch (err) {
        console.log(err);
    }
};

startServer();