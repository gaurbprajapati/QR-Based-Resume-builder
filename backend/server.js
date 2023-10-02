import express from 'express';
import cors from 'cors';
// import path from 'path';
import { config } from 'dotenv';
import userRoute from './routes/userRoute.js';
import { connectDB } from './data/dbConnect.js';
import { User } from './models/userModel.js';

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

app.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });

        if (result) {
            res.send(result);
        } else {
            res.status(400).json("Login failed");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
);

app.post("/register", async (req, res) => {
    try {
        const newuser = new User(req.body);
        await newuser.save();
        res.send("Registration Successful");
    } catch (error) {
        res.status(400).json(error);
    }
})

app.post("/update", async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.body._id }, req.body);
        const user = await User.findOne({ _id: req.body._id });
        res.send(user);
    } catch (error) {
        res.status(400).json(error);
    }
})
// app.get('/details', (req, res) => res.send('H!')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
