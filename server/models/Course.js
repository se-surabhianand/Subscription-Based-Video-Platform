import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Course Title"],
    minLength: [4, "Title Must be at Least 4 Character"],
    maxLength: [80, "Title Can't Exceed 80 Character"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Discription"],
    minLength: [20, "Description Must be at Least 20 Character"],
  },

  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],

  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  views: {
    type: Number,
    default: 0,
  },

  numOfVideos: {
    type: Number,
    default: 0,
  },

  category: {
    type: String,
    required: true,
  },

  createdBy: {
    type: String,
    required: [true, "Enter Course Creator Name"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", schema);
