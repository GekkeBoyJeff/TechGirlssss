import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import expressLayouts from 'express-ejs-layouts'
import connectDB from "./config/db.js"

dotenv.config()

const app = express()
const port = process.env.port

app.set('view engine', 'ejs')
app.set('layout', 'layouts/default');
app.use(express.static('public'))
app.use(expressLayouts)

routes(app)

app.listen(port, function () {
    console.log(`De app werkt op http://localhost:${port}`)
    try {
        connectDB();
    } catch (err) {
        console.error(err.message);
    }
});