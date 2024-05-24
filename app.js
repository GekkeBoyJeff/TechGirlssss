import express from 'express'
import dotenv from 'dotenv'
import getRoutes from './routes/getRoutes.js'
import postRoutes from './routes/postRoutes.js'
import expressLayouts from 'express-ejs-layouts'
import connectDB from "./config/db.js"

import pageNotFoundHandler from './middlewares/404Handler.js'
import sessionMiddleware from './middlewares/session.js'
import fetchUserData from './middlewares/fetchUserData.js'

dotenv.config()

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')
app.set('layout', 'layouts/default')
app.use(express.static('public'), expressLayouts, express.urlencoded({ extended: true }), express.json())

sessionMiddleware(app)
app.use(fetchUserData)

getRoutes(app)
postRoutes(app)

app.use(pageNotFoundHandler)

app.listen(port, function () {
    console.log(`De app werkt op http://localhost:${port}`)
    connectDB()
})