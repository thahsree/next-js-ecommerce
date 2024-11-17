import mongoose, { ConnectOptions } from "mongoose";


let isConnected:boolean = false;

export const connectDB = async():Promise<void> => {

    mongoose.set('strictQuery' ,true) //errors when unknown field added


    if(isConnected){
        console.log('MongoDB Already Connected');

        return
    }

    try {

        await mongoose.connect(process.env.MONGODB_URI as string,{
            dbName:'everlane_store',
            useNewUrlParser:true,
            useUnifiedTopology:true

        } as ConnectOptions)

        isConnected = true;
        console.log("Successfully connected to MongoDB.");
    
        
    } catch (error) {
        console.log(error);
    }

}