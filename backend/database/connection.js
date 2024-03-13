import mongoose from "mongoose";

const connection = mongoose
  .connect(
    "mongodb+srv://asujal787:wSxbM2MthrvNERnf@cluster0.tdqmqnl.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database has been connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

export default connection;
