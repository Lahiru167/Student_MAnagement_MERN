 const express = require('express');
const router = express.Router();
const upload = require("../middleware/upload");


//insert model
const User = require('../Model/userModel');

//insert controller
const userController = require('../Controller/userController');

router.get('/', userController.getAllUsers);
router.post("/", upload.single("img"), userController.addUser);

router.get('/:id', userController.getUserById); 
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser); 


//export router
module.exports = router;

