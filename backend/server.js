import express from "express";
import authRoute from "./routes/routes.js";
import connection from "./database/connection.js"; // Importing the connection

const app = express();

connection.then(() => {
  // Use the connection
  app.use("/api/auth", authRoute);

  app.listen(5000, () => {
    console.log("App is running on server 5000");
  });
});
