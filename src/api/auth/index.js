const Router = require("koa-router")
const authCtrl = require("./auth.ctrl") 

const auth = new Router();

auth.get("/", authCtrl.login)
auth.get("/signUp", authCtrl.signUp)



module.exports = auth;