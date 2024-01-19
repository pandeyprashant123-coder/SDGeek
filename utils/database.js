import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async()=>{
    mongoose.set("strictQuery",true)
    if(isConnected){
        console.log("Mongoose is connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'Hackathon6',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true
        console.log("mongodb connected")

    } catch (error) {
        console.log(error)
    }
}
