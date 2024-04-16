const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/userData', async (req, res) => {
  try {
    console.log("Hi")
    const { username,
      email,
      phoneNumber,
      dateofBirth,
      gender,
      address,
      profileLink } = req.body
    console.log(username,
      email,
      phoneNumber,
      dateofBirth,
      gender,
      address,
      profileLink )

    if (username === undefined || email === undefined || phoneNumber === undefined || dateofBirth === undefined || gender === undefined || address === undefined || profileLink === undefined) throw Error("Enter all fields")
    await User.create({
      username,
      email,
      phoneNumber,
      dateofBirth,
      gender,
      address,
      profileLink
    }).then(() => { return res.status(200).json({ message: "User Created Successfully" }) })
      .catch((error) => {
        throw error
      })
  } catch (error) {
    if (error instanceof Error) return res.status(400).json({ error: error.message })
    return res.status(500).json({ error: "internal Server Error" })
  }
})

module.exports = router;