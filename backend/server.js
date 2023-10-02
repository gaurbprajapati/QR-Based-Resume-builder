const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')

const cors = require('cors')
app.use(express.json())
// const port = process.env.PORT || 5000
const port = 5000
const userRoute = require('./routes/userRoute')
const path = require('path')
app.use('/api/user', userRoute)

app.use(
    cors({
        origin: ["https://buildresumeqr.netlify.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);


if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
}
app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/details', (req, res) => res.send('H!')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
