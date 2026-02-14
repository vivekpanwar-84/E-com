import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const DBURL = process.env.MONGODB_URL ;


// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () => {
//       console.log("MongoDB connected");
//     })

//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// }


connectDB().then(() => {
  console.log("data base conect ");
})
  .catch((err) => {
      console.log(err);
  });


async function connectDB() {
  await mongoose.connect(DBURL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
// import mongoose from "mongoose";