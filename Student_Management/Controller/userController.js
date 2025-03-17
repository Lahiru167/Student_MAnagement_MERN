const userModel = require("../Model/userModel");

const getAllUsers = async (req, res, next) => {

    let users;
    try {
        users = await userModel.find();
    } catch (err) {
        console.log(err);
    }
    //not found
    if (!users) {
        return res.status(404).json({
            message: "No users found"
        });
    }

    //display all users
    return res.status(200).json({
        users});
};

const addUser = async (req, res, next) => {
    const { StudentId, name,  Age, Status } = req.body;
    const img = req.file ? req.file.path : null;

   let users;

    try {
        users = new userModel({
          StudentId,
          name,
          img,
          Age,
          Status,
        });
        await users.save();
    } catch (err) {
        console.log(err);
    }
     if (!users) {
        return res.status(404).json({
            message: "No users found"
        });
    }
    return res.status(200).json({
        users});



};

//get user by id
const getUserById = async (req, res, next) => {
    const userId = req.params.id;
    let user;
    try {
        user = await userModel.findById(userId);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({
            message: "No user found"
        });
    }
    return res.status(200).json({
        user});
};
//update
const updateUser = async (req, res, next) => {
    const userId = req.params.id;
    const { StudentId, name, img, Age, Status } = req.body;
    let user;
    try {
        user = await userModel.findById(userId);
        user.StudentId = StudentId;
        user.name = name;
        user.img = img;
        user.Age = Age;
        user.Status = Status;
        
        await user.save();
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({
            message: "Unable to update user"
        });
    }
    return res.status(200).json({
        user});
};

// Delete user
const deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    let user;
    try {
        user = await userModel.findByIdAndDelete(userId);
        await user.remove();
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({
            message: "Unable to delete user"
        });
    }
    return res.status(200).json({
        message: "User deleted successfully"
    });
};
exports.addUser = addUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;    
exports.deleteUser = deleteUser;

