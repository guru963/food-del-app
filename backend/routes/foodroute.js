import multer from "multer";
import express from 'express';
import { addfood, deletefood } from '../controllers/foodcontoller.js';
import { foodlist } from "../controllers/foodcontoller.js";
const foodrouter = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route to handle image + form data
foodrouter.post("/add", upload.single("image"), addfood);
foodrouter.get("/foodlist",foodlist);
foodrouter.delete("/delete/:id",deletefood);
export default foodrouter;
