require('dotenv').config();

const {Client} = require("pg")
export const client = new Client({
    user:"postgres",
    host:"127.0.0.1",
    database:"TestServer",
    password:process.env.PASSWORD,
    port:"5432"
})
