import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//To register a new user
router.route("/register").post(singleUpload, register);

//To Login user
router.route("/login").post(login);

//To Login user
router.route("/logout").post(logout);

//Get My profile
router.route("/me").get(isAuthenticated, getMyProfile);

//Delete My profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

//Change Password
router.route("/changepassword").put(isAuthenticated, changePassword);

//Update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//Update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

//Forget Password
router.route("/forgetpassword").post(forgetPassword);

//Reset Password
router.route("/resetpassword/:token").put(resetPassword);

//Add to Playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//Remove From Playlidt
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// Admin Routes

router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

export default router;
