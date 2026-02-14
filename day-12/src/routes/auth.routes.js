const express = require("express");
const useModel = require("../models/user.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRoutes = express.Router();

authRoutes.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const user = await userModel.create({ name, email, password });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token",token)

  res.status(201).json({
    message: "User registered successfully",
    user,
    token,
  });
});

module.exports = authRoutes;
