import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import contactRoute from "./routes/contact.js";
import confirmbRoute from "./routes/confirmb.js";

const app = express();
dotenv.config();
const connect = async () => {
  try {
    mongoose.set('strictQuery', false); // Set strictQuery to false
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
// Middleware

app.use(express.json());
app.use(cookieParser());

// Routes
//by default we cannot send any json object like this  that's why we use app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/contact", contactRoute);
app.use("/api/confirmb", confirmbRoute);

//Error Handling Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 8800;

app.listen(port, () => {
  connect();
  console.log("Connected to the backend");
});
