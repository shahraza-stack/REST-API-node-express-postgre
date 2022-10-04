const {Router}=require('express');
const jwt = require('jsonwebtoken');
const passport =require('passport');

const controller =require("./controller");

const router = Router();
router.get("/", controller.getusers);
router.post("/",controller.addUser);
router.get("/:id",controller.getUserById);
router.delete("/:id",controller.removeUser);



module.exports = router;
