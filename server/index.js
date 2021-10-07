// importing env variables
require("dotenv").config();

// const express = require("express"); after configuring babel we can use ES6 syntax
import express from "express";

// cross origin request -> to allow api call from other servers(?) like react app
import cors from "cors";

// helmet adds few layers of security
import helmet from "helmet";

// db connection
import ConnectDB from "./database/connection";

// microservice routes
import Auth from "./API/auth";

const zomato = express();

// middleware application
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded());

// application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => {
  return res.json({ message: "setup successful" });
});
ConnectDB()
  .then(() => console.log("Connected to database ✔✔✔"))
  .catch(() => console.log("cannot connect to database ❌❌❌"));
zomato.listen(4000, () => console.log("server running🚀🚀🚀"));
