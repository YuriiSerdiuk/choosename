const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = Router();

router.get("/", (req, res) => {
  res.json({ test: " auth message!" });
});

router.post("/", (req, res) => {
  res.json({ test: " auth post!" });
});

// /auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("/register", email, password);
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: "Such a user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email: email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (e) {
    res.status(500).json({ message: "Some problems with registration" });
  }
});

// /auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  //   // if (!user) {
  //   //   return res.status(400).json({ message: "User not found" });
  //   // }
  //   //
  //   // const isMatch = await bcrypt.compare(password, user.password);
  //   //
  //   // if (!isMatch) {
  //   //   return res.status(400).json({ message: "Invalid password, try again" });
  //   // }
  //   //
  //   // const token = jwt.sign({ userId: user.id }, "jwtSecret", {
  //   //   expiresIn: "1h",
  //   // });
  //
  //   // res.json({ token, userId: user.id });
    console.log('user',user);
    res.json({ email: email, password: password });
  } catch (e) {
    res.status(500).json({ message: "Some problems with authorization" });
  }

});

// /auth/delete
// router.delete("/delete/uzer", async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log(req.body);
//     await User.deleteOne({ email });
//
//     await user.save();
//     res.status(201).json({ message: "User deleted" });
//   } catch (e) {
//     res.status(500).json({ message: "Some problems with User delete" });
//   }
// });

module.exports = router;
