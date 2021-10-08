// importing env variables
require("dotenv").config();

// const express = require("express"); after configuring babel we can use ES6 syntax
// libraries
import express from "express";
import passport from "passport";

// cross origin request -> to allow api call from other servers(?) like react app
import cors from "cors";

// helmet adds few layers of security
import helmet from "helmet";

// db connection
import ConnectDB from "./database/connection";

// microservice routes
import Auth from "./API/auth";
import Restaurant from "./API/restaurant";
import Food from "./API/food";
import Menu from "./API/menu";
import Image from "./API/image";
import Order from "./API/order";
import Review from "./API/review";
import User from "./API/user";

// google auth configuration
import googleAuthConfig from "./config/google.config";

const zomato = express();

// middleware application
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.json());
zomato.use(express.urlencoded());
// zomato.use(passport.initialize());
// zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);

// application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

zomato.get("/", (req, res) => {
  return res.json({ message: "setup successful" });
});
ConnectDB()
  .then(() => console.log("Connected to database ✅✅✅ "))
  .catch(() => console.log("cannot connect to database ❌❌❌"));
zomato.listen(4000, () => console.log("server running🚀🚀🚀"));
