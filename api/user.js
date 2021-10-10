const router = require("express").Router();
const User = require("../models/User");

// get all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => console.log(err));
});

// add user
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
  });
  newUser
    .save()
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
});

// edit user
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((updated) => res.status(200).send(updated))
    .catch((err) => console.log(err));
});

// delete user
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((deleted) => res.send(deleted))
    .catch((err) => console.log(err));
});

module.exports = router;
