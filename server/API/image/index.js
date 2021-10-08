// libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

// DB model
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// add S3 bucket config
const s3bucket = new AWS.S3({
  accessKeyID: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  region: "ap-south-1",
});

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

    // upload to s3
    const s3Upload = (options) => {
      return new Promise((resolve, reject) =>
        s3bucket.upload(options, (error, data) => {
          if (error) return reject(error);
          return resolve(data);
        })
      );
    };

    const uploadImage = await s3Upload(bucketOptions);
    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
