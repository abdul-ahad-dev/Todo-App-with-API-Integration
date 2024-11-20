import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {

    if (isConnected) {
        console.log("DB is already connected.");
        return;
    }
    let connected = await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is connected succesfully.")
    if (connected.connection.readyState == 1) isConnected = true;
}