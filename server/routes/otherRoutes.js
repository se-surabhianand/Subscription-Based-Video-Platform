import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  conatct,
  courseRequest,
  getDashboardStats,
} from "../controllers/otherController.js";

const router = express.Router();

//Contact Form
router.route("/contact").post(conatct);

//Request Form
router.route("/courserequest").post(courseRequest);

//Get Admin Dashboard Stats Form
router
  .route("/admin/stats")
  .get(isAuthenticated, authorizeAdmin, getDashboardStats);

export default router;
