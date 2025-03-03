import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  cancelSubscription,
  getRazorpayKey,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

//get Razorpay Key
router.route("/razorpaykey").get(getRazorpayKey);

//Verify payment and Save refernec in dataBase
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
