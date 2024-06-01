import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect( "mongodb+srv://sireesha2000a:siri1234@cluster0.nzyafq6.mongodb.net/food-del1")
      .then(() => console.log("DB Connected"));
}