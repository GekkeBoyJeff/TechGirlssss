import mongoose from "mongoose"

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
        console.log(`Database connected: ${url}`)
    })

    try {
        await mongoose.connect(url);
    } catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    }
}