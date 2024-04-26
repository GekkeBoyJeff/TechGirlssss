import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.send("hello");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});