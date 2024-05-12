import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

import multer from "multer"; //middleware for handling multipart/form-data, primarily used for uploading files.

const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); // generate a unique filename for each uploaded file based on the current timestamp appended with the original filename.
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
export default foodRouter;
