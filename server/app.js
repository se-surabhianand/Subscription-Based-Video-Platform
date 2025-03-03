import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/Error.js";
import cors from "cors";
import Razorpay from "razorpay";

config({
  path: "./config/config.env",
});

export const app = express();

//Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

//Importing and Using Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome, Website is Working on ${process.env.FRONTEND_URL2} click <a href=${process.env.FRONTEND_URL}>here</a></h1>`
  );
});

app.use(ErrorMiddleware);
