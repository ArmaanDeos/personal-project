import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connection.js";

//* dotenv config
dotenv.config({ path: "./env" });

//* Database connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 2700, () => {
      console.log(`Server is running on port ${process.env.PORT || 2700}`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed! : ${error.message}`);
  });
