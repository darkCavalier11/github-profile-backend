const mongoose = require("mongoose");
const UserModel = require("../db/User");
const express = require("express");
const router = new express.Router();

const app = express();

app.use(express.json());

router.get("/login", async (req, res) => {
  try {
    const users = await UserModel.findOne(req.body);
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({
      error: err.message,
    });
  }
});

router.get("/addProfile", async (req, res) => {
  try {
    const user = await UserModel.findOne(req.body.cred);
    console.log(req.body);
    if (user.savedProfiles.indexOf(req.body.profile) == -1) {
      console.log(user.savedProfiles.indexOf(req.body.profile));
      user.savedProfiles.push(req.body.profile);
    }
    res.send(user.savedProfiles);
    await user.save();
  } catch (err) {
    res.send("Unable to add profile.").status(400);
  }
});

router.get("/removeProfile", async (req, res) => {
  try {
    const user = await UserModel.findOne(req.body.cred);
    const idx = user.savedProfiles.indexOf(req.body.profile) != -1;
    if (idx != -1) {
      user.savedProfiles.splice(idx, 1);
    }
    res.send(user.savedProfiles);
    await user.save();
  } catch (err) {
    res.send("Unable to add profile.").status(400);
  }
});

module.exports = router;
