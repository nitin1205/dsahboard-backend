import mongoose from 'mongoose';

export const connectDb = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then (() => console.log('Connected to db'))
    .catch((error) => console.log(error));
};