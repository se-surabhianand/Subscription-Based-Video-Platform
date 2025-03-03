import express from "express";
import {
  addCourseLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import {
  authorizeAdmin,
  authorizeSubscribers,
  isAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.route("/courses").get(getAllCourses);

//Create New Course Only Admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

//Add Lectures, Delete Course, Get Course Details
router
  .route("/course/:id")
  .get(isAuthenticated, authorizeSubscribers, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addCourseLectures)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

//Delete Lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;
