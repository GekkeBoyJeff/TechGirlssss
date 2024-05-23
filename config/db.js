import mongoose from "mongoose"

mongoose.set("strictQuery", false);
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

export default async function connectDB(url = process.env.mongoURI || null) {
    if (!url) {
        console.log("Geen MONOGO_URI gevonden in .env bestand. Voeg deze toe en probeer opnieuw.");
        return
    }

    const dbConnection = mongoose.connection
    dbConnection.on("error", (err) => {
        console.log(`connection error: ${err}`)
    })

    dbConnection.once("open", (_) => {
        // console.log(`Database connected: ${url}`)
    })

    try {
        await mongoose.connect(url);
        // console.log(mongoose.connection)
    } catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    }
}