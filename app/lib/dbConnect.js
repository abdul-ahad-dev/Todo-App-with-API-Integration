import mongoose from "mongoose";


export async function connectDB() {
    let isConnect = false;

    if (isConnect) return "DB is already connected."

    try{
        let connected = await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB is connected succesfully.")
        if (connected.connection.readyState == 1) isConnect = true;
    }
    catch(error){
        console.log(error)
    }
}