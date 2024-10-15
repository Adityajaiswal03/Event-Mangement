import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
        .connect(
            process.env.MONGO_URI,
            { dbName: "EventManagement" }
        )
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log("Error in connecting database", err);
        });
}