// libraries
import express from "express";
import multer from "multer";

// DB model
// import { ImageModel } from "../../database/allModels";

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// utilities
import { s3Upload } from "../../utils/AWS/s3";

/*
route               /
description         uploads given image to S3 bucket, and saves file link to mongoDB
access              public
parameter           none
methods             POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "zomatoimage3721",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const uploadImage = await s3Upload(bucketOptions);
    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
