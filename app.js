import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.port;

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.send("hello");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});