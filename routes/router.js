const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const db = require("../models/index");
const JWTSECRET = ";HIGV%f=";
const userMiddleware = require("../middleware/users.js");

const paginate = (query, { page, limit }) => {
  let offset;
  if(page==1){
   offset =0;

  }else{
     offset = page * limit;

  }

  return {
    ...query,
    offset,
    limit,
  };
};
router.post("/sign-up", (req, res, next) => {});
// routes/router.js

module.exports = router;
