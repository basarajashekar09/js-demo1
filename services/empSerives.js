const express = require("express");
const router = express.Router()
let empservice = require('../routes/empRoutes')

const getUserById = async (id) => {
    return User.findById(id);
  };