// const express = require("express"); after configuring babel we can use ES6 syntax

import express from "express";

// cross origin request -> to allow api call from other servers(?) like react app
import cors from "cors";

// helmet adds few layers of security
import helmet from "helmet";

const zomato = express();

// middleware application
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded());

zomato.get("/", (req, res) => {
  return res.json({ message: "setup successful" });
});

zomato.listen(4000, () => console.log("server running🚀🚀🚀"));
