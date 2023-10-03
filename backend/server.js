import express from 'express';
import cors from 'cors';
// import path from 'path';
import { config } from 'dotenv';
import userRoute from './routes/userRoute.js';
import { connectDB } from './data/dbConnect.js';

const app = express();

const port = process.env.PORT || 5000;
// Load environment variables
config({
    path: "./data/config.env",
});

app.use(express.json())

app.use('/api/user', userRoute)
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
// Call the function to connect to the database
connectDB();


// console.log(process.env.FRONTEND_URL, "hello");

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static('client/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
//     });
// }

app.get('/home', (req, res) => res.send('Hello World!'))
// app.get('/details', (req, res) => res.send('H!')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
