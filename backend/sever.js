import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config(); //allow using environment variable
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse the incoming requests with Json payloads (from req.body)
app.use(cookieParser()); // to parse incoming cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("Is this thing on?")
//     // res.send("Hello?")
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Sever Running on port ${PORT}`);
});
