import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://prathamranjan3:Prathamranjan@cluster0.4seiypg.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
